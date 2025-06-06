const express = require("express")
const User = require("../models/User")
const { authMiddleware } = require("../middleware/auth")

const router = express.Router()

// Profil ma'lumotlarini olish
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password")

    res.json({
      success: true,
      data: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        role: user.role,
        limits: user.limits,
        usage: user.usage,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    })
  } catch (error) {
    console.error("Profilni olishda xatolik:", error)
    res.status(500).json({
      success: false,
      message: "Profilni olishda xatolik yuz berdi",
    })
  }
})

// Profil ma'lumotlarini yangilash
router.put("/profile", authMiddleware, async (req, res) => {
  try {
    const { firstName, lastName, phone } = req.body
    const updateData = {}

    // Faqat berilgan maydonlarni yangilash
    if (firstName) updateData.firstName = firstName.trim()
    if (lastName) updateData.lastName = lastName.trim()
    if (phone) updateData.phone = phone.trim()

    // Validatsiya
    if (firstName && firstName.trim().length < 2) {
      return res.status(400).json({
        success: false,
        message: "Ism kamida 2 ta belgidan iborat bo'lishi kerak",
      })
    }

    if (lastName && lastName.trim().length < 2) {
      return res.status(400).json({
        success: false,
        message: "Familiya kamida 2 ta belgidan iborat bo'lishi kerak",
      })
    }

    if (phone && !/^\+?[1-9]\d{1,14}$/.test(phone.trim())) {
      return res.status(400).json({
        success: false,
        message: "Telefon raqam formati noto'g'ri",
      })
    }

    const user = await User.findByIdAndUpdate(req.user._id, updateData, { new: true, runValidators: true }).select(
      "-password",
    )

    res.json({
      success: true,
      message: "Profil muvaffaqiyatli yangilandi",
      data: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        role: user.role,
        limits: user.limits,
        usage: user.usage,
        updatedAt: user.updatedAt,
      },
    })
  } catch (error) {
    console.error("Profilni yangilashda xatolik:", error)

    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message)
      return res.status(400).json({
        success: false,
        message: messages.join(", "),
      })
    }

    res.status(500).json({
      success: false,
      message: "Profilni yangilashda xatolik yuz berdi",
    })
  }
})

// Usage statistikasini olish
router.get("/usage", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user._id)

    // Usage ni yangilash (limitlarni reset qilish uchun)
    user.checkAndUpdateUsage()
    await user.save()

    res.json({
      success: true,
      data: {
        usage: user.usage,
        limits: user.limits,
        remaining: {
          daily: Math.max(0, user.limits.daily - user.usage.daily),
          monthly: Math.max(0, user.limits.monthly - user.usage.monthly),
          yearly: Math.max(0, user.limits.yearly - user.usage.yearly),
        },
      },
    })
  } catch (error) {
    console.error("Usage ma'lumotlarini olishda xatolik:", error)
    res.status(500).json({
      success: false,
      message: "Usage ma'lumotlarini olishda xatolik yuz berdi",
    })
  }
})

module.exports = router
