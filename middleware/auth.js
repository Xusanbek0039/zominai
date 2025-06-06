const jwt = require("jsonwebtoken")
const User = require("../models/User")

// Oddiy foydalanuvchi autentifikatsiyasi
const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "")

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token topilmadi, ruxsat berilmadi",
      })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findById(decoded.userId).select("-password")

    if (!user || !user.active) {
      return res.status(401).json({
        success: false,
        message: "Token yaroqsiz yoki foydalanuvchi faol emas",
      })
    }

    req.user = user
    next()
  } catch (error) {
    console.error("Auth middleware xatoligi:", error)
    res.status(401).json({
      success: false,
      message: "Token yaroqsiz",
    })
  }
}

// Admin autentifikatsiyasi
const adminMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "")

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token topilmadi, ruxsat berilmadi",
      })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findById(decoded.userId).select("-password")

    if (!user || !user.active) {
      return res.status(401).json({
        success: false,
        message: "Token yaroqsiz yoki foydalanuvchi faol emas",
      })
    }

    if (user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Admin huquqlari mavjud emas",
      })
    }

    req.user = user
    next()
  } catch (error) {
    console.error("Admin middleware xatoligi:", error)
    res.status(401).json({
      success: false,
      message: "Token yaroqsiz",
    })
  }
}

module.exports = { authMiddleware, adminMiddleware }
