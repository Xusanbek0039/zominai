const express = require("express")
const jwt = require("jsonwebtoken")
const User = require("../models/User")
const { authMiddleware } = require("../middleware/auth")

const router = express.Router()

// Ro'yxatdan o'tish
router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password } = req.body

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

    // Yangi foydalanuvchi yaratish
    const user = new User({
      firstName,
      lastName,
      email: email.toLowerCase(),
      phone,
      password,
    })

    await user.save()

    // JWT token yaratish
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" })

    res.status(201).json({
      success: true,
      message: "Foydalanuvchi muvaffaqiyatli ro'yxatdan o'tdi",
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
      },
    })
  } catch (error) {
    console.error("Ro'yxatdan o'tishda xatolik:", error)

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

// Tizimga kirish
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
      message: "Muvaffaqiyatli tizimga kirildi",
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        role: user.role,
        limits: user.limits,
        usage: user.usage,
      },
    })
  } catch (error) {
    console.error("Tizimga kirishda xatolik:", error)
    res.status(500).json({
      success: false,
      message: "Server xatoligi",
    })
  }
})

// Token tekshirish
router.get("/verify", authMiddleware, (req, res) => {
  res.json({
    success: true,
    user: {
      id: req.user._id,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      email: req.user.email,
      phone: req.user.phone,
      role: req.user.role,
      limits: req.user.limits,
      usage: req.user.usage,
    },
  })
})

module.exports = router
