const express = require("express")
const User = require("../models/User")
const Chat = require("../models/Chat")
const Stat = require("../models/Stat")
const { adminMiddleware } = require("../middleware/auth")
const jwt = require("jsonwebtoken")

const router = express.Router()

// Admin login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body

    // Maydonlarni tekshirish
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email va parolni kiriting",
      })
    }

    // Foydalanuvchini topish
    const user = await User.findOne({ email: email.toLowerCase() })
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Email yoki parol noto'g'ri",
      })
    }

    // Admin ekanligini tekshirish
    if (user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Admin huquqlari mavjud emas",
      })
    }

    // Foydalanuvchi faolligini tekshirish
    if (!user.active) {
      return res.status(401).json({
        success: false,
        message: "Sizning hisobingiz bloklangan",
      })
    }

    // Parolni tekshirish
    const isPasswordValid = await user.comparePassword(password)
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Email yoki parol noto'g'ri",
      })
    }

    // JWT token yaratish
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" })

    res.json({
      success: true,
      message: "Admin sifatida muvaffaqiyatli tizimga kirildi",
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
    })
  } catch (error) {
    console.error("Admin tizimga kirishda xatolik:", error)
    res.status(500).json({
      success: false,
      message: "Server xatoligi",
    })
  }
})

// Barcha foydalanuvchilar ro'yxati
router.get("/users", adminMiddleware, async (req, res) => {
  try {
    const page = Number.parseInt(req.query.page) || 1
    const limit = Number.parseInt(req.query.limit) || 20
    const skip = (page - 1) * limit
    const search = req.query.search || ""

    let query = {}
    if (search) {
      query = {
        $or: [
          { firstName: { $regex: search, $options: "i" } },
          { lastName: { $regex: search, $options: "i" } },
          { email: { $regex: search, $options: "i" } },
          { phone: { $regex: search, $options: "i" } },
        ],
      }
    }

    const users = await User.find(query).sort({ createdAt: -1 }).skip(skip).limit(limit).select("-password")

    const total = await User.countDocuments(query)

    res.json({
      success: true,
      data: users,
      pagination: {
        current: page,
        total: Math.ceil(total / limit),
        count: users.length,
        totalUsers: total,
      },
    })
  } catch (error) {
    console.error("Foydalanuvchilarni olishda xatolik:", error)
    res.status(500).json({
      success: false,
      message: "Foydalanuvchilarni olishda xatolik yuz berdi",
    })
  }
})

// Bitta foydalanuvchi ma'lumotlarini olish
router.get("/users/:id", adminMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password")

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Foydalanuvchi topilmadi",
      })
    }

    // Foydalanuvchining chat statistikasi
    const chatCount = await Chat.countDocuments({ userId: user._id })
    const latestChats = await Chat.find({ userId: user._id }).sort({ createdAt: -1 }).limit(5)

    res.json({
      success: true,
      data: {
        user,
        stats: {
          totalChats: chatCount,
          latestChats,
        },
      },
    })
  } catch (error) {
    console.error("Foydalanuvchi ma'lumotlarini olishda xatolik:", error)
    res.status(500).json({
      success: false,
      message: "Foydalanuvchi ma'lumotlarini olishda xatolik yuz berdi",
    })
  }
})

// Foydalanuvchi limitlarini yangilash
router.put("/users/:id/limit", adminMiddleware, async (req, res) => {
  try {
    const { daily, monthly, yearly } = req.body
    const updateData = { limits: {} }

    // Faqat berilgan limitlarni yangilash
    if (daily !== undefined) updateData.limits.daily = Number(daily)
    if (monthly !== undefined) updateData.limits.monthly = Number(monthly)
    if (yearly !== undefined) updateData.limits.yearly = Number(yearly)

    // Validatsiya
    if (daily !== undefined && (isNaN(daily) || daily < 0)) {
      return res.status(400).json({
        success: false,
        message: "Kunlik limit noto'g'ri formatda",
      })
    }

    if (monthly !== undefined && (isNaN(monthly) || monthly < 0)) {
      return res.status(400).json({
        success: false,
        message: "Oylik limit noto'g'ri formatda",
      })
    }

    if (yearly !== undefined && (isNaN(yearly) || yearly < 0)) {
      return res.status(400).json({
        success: false,
        message: "Yillik limit noto'g'ri formatda",
      })
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: updateData },
      { new: true, runValidators: true },
    ).select("-password")

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Foydalanuvchi topilmadi",
      })
    }

    res.json({
      success: true,
      message: "Foydalanuvchi limitlari muvaffaqiyatli yangilandi",
      data: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        limits: user.limits,
      },
    })
  } catch (error) {
    console.error("Limitlarni yangilashda xatolik:", error)
    res.status(500).json({
      success: false,
      message: "Limitlarni yangilashda xatolik yuz berdi",
    })
  }
})

// Foydalanuvchini faollashtirish/bloklash
router.put("/users/:id/status", adminMiddleware, async (req, res) => {
  try {
    const { active } = req.body

    if (active === undefined) {
      return res.status(400).json({
        success: false,
        message: "Status ko'rsatilmagan",
      })
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { active: Boolean(active) },
      { new: true, runValidators: true },
    ).select("-password")

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Foydalanuvchi topilmadi",
      })
    }

    res.json({
      success: true,
      message: `Foydalanuvchi muvaffaqiyatli ${active ? "faollashtirildi" : "bloklandi"}`,
      data: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        active: user.active,
      },
    })
  } catch (error) {
    console.error("Statusni yangilashda xatolik:", error)
    res.status(500).json({
      success: false,
      message: "Statusni yangilashda xatolik yuz berdi",
    })
  }
})

// Statistika
router.get("/stats", adminMiddleware, async (req, res) => {
  try {
    const period = req.query.period || "daily"
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    let startDate, endDate
    if (period === "daily") {
      startDate = new Date(today)
      endDate = new Date(today)
      endDate.setDate(endDate.getDate() + 1)
    } else if (period === "weekly") {
      startDate = new Date(today)
      startDate.setDate(startDate.getDate() - 7)
      endDate = new Date(today)
      endDate.setDate(endDate.getDate() + 1)
    } else if (period === "monthly") {
      startDate = new Date(today)
      startDate.setMonth(startDate.getMonth() - 1)
      endDate = new Date(today)
      endDate.setDate(endDate.getDate() + 1)
    } else {
      return res.status(400).json({
        success: false,
        message: "Noto'g'ri davr ko'rsatilgan",
      })
    }

    // Statistikani olish
    const stats = await Stat.find({
      date: { $gte: startDate, $lt: endDate },
    }).sort({ date: 1 })

    // Umumiy statistika
    const totalUsers = await User.countDocuments()
    const totalChats = await Chat.countDocuments()
    const activeUsers = await User.countDocuments({ active: true })

    // Eng faol foydalanuvchilar
    const topUsers = await Chat.aggregate([
      {
        $match: {
          createdAt: { $gte: startDate, $lt: endDate },
        },
      },
      {
        $group: {
          _id: "$userId",
          count: { $sum: 1 },
          totalTokens: { $sum: "$tokens.total" },
        },
      },
      {
        $sort: { count: -1 },
      },
      {
        $limit: 10,
      },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $unwind: "$user",
      },
      {
        $project: {
          _id: 1,
          count: 1,
          totalTokens: 1,
          firstName: "$user.firstName",
          lastName: "$user.lastName",
          email: "$user.email",
        },
      },
    ])

    // Model statistikasi
    const modelStats = await Chat.aggregate([
      {
        $match: {
          createdAt: { $gte: startDate, $lt: endDate },
        },
      },
      {
        $group: {
          _id: "$model",
          count: { $sum: 1 },
          totalTokens: { $sum: "$tokens.total" },
        },
      },
      {
        $sort: { count: -1 },
      },
    ])

    res.json({
      success: true,
      data: {
        period,
        stats,
        summary: {
          totalUsers,
          activeUsers,
          totalChats,
          periodChats: stats.reduce((sum, stat) => sum + stat.dailyChats, 0),
          periodTokens: stats.reduce((sum, stat) => sum + stat.totalTokens, 0),
        },
        topUsers,
        modelStats,
      },
    })
  } catch (error) {
    console.error("Statistikani olishda xatolik:", error)
    res.status(500).json({
      success: false,
      message: "Statistikani olishda xatolik yuz berdi",
    })
  }
})

// Admin yaratish (faqat birinchi admin uchun)
router.post("/create-admin", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password, secretKey } = req.body

    // Secret key tekshirish
    if (secretKey !== process.env.ADMIN_SECRET_KEY) {
      return res.status(403).json({
        success: false,
        message: "Maxfiy kalit noto'g'ri",
      })
    }

    // Mavjud adminlar sonini tekshirish
    const adminCount = await User.countDocuments({ role: "admin" })
    if (adminCount > 0 && !process.env.ALLOW_MULTIPLE_ADMINS) {
      return res.status(403).json({
        success: false,
        message: "Admin allaqachon mavjud",
      })
    }

    // Maydonlarni tekshirish
    if (!firstName || !lastName || !email || !phone || !password) {
      return res.status(400).json({
        success: false,
        message: "Barcha maydonlarni to'ldiring",
      })
    }

    // Email noyobligini tekshirish
    const existingUser = await User.findOne({ email: email.toLowerCase() })
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Bu email allaqachon ro'yxatdan o'tgan",
      })
    }

    // Yangi admin yaratish
    const admin = new User({
      firstName,
      lastName,
      email: email.toLowerCase(),
      phone,
      password,
      role: "admin",
      limits: {
        daily: 100,
        monthly: 1000,
        yearly: 10000,
      },
    })

    await admin.save()

    // JWT token yaratish
    const token = jwt.sign({ userId: admin._id }, process.env.JWT_SECRET, { expiresIn: "7d" })

    res.status(201).json({
      success: true,
      message: "Admin muvaffaqiyatli yaratildi",
      token,
      user: {
        id: admin._id,
        firstName: admin.firstName,
        lastName: admin.lastName,
        email: admin.email,
        phone: admin.phone,
        role: admin.role,
      },
    })
  } catch (error) {
    console.error("Admin yaratishda xatolik:", error)

    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message)
      return res.status(400).json({
        success: false,
        message: messages.join(", "),
      })
    }

    res.status(500).json({
      success: false,
      message: "Server xatoligi",
    })
  }
})

module.exports = router
