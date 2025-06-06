const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Ism kiritish majburiy"],
      trim: true,
      minlength: [2, "Ism kamida 2 ta belgidan iborat bo'lishi kerak"],
    },
    lastName: {
      type: String,
      required: [true, "Familiya kiritish majburiy"],
      trim: true,
      minlength: [2, "Familiya kamida 2 ta belgidan iborat bo'lishi kerak"],
    },
    email: {
      type: String,
      required: [true, "Email kiritish majburiy"],
      unique: true,
      lowercase: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Email formati noto'g'ri"],
    },
    phone: {
      type: String,
      required: [true, "Telefon raqam kiritish majburiy"],
      match: [/^\+?[1-9]\d{1,14}$/, "Telefon raqam formati noto'g'ri"],
    },
    password: {
      type: String,
      required: [true, "Parol kiritish majburiy"],
      minlength: [6, "Parol kamida 6 ta belgidan iborat bo'lishi kerak"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    limits: {
      daily: {
        type: Number,
        default: 30,
      },
      monthly: {
        type: Number,
        default: 300,
      },
      yearly: {
        type: Number,
        default: 1000,
      },
    },
    usage: {
      daily: {
        type: Number,
        default: 0,
      },
      monthly: {
        type: Number,
        default: 0,
      },
      yearly: {
        type: Number,
        default: 0,
      },
      lastUsed: {
        type: Date,
        default: Date.now,
      },
      lastDailyReset: {
        type: Date,
        default: Date.now,
      },
      lastMonthlyReset: {
        type: Date,
        default: Date.now,
      },
      lastYearlyReset: {
        type: Date,
        default: Date.now,
      },
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
)

// Parolni hash qilish
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next()

  try {
    const salt = await bcrypt.genSalt(12)
    this.password = await bcrypt.hash(this.password, salt)
    next()
  } catch (error) {
    next(error)
  }
})

// Parolni tekshirish
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password)
}

// Usage limitlarini tekshirish va yangilash
userSchema.methods.checkAndUpdateUsage = function () {
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1)
  const thisYear = new Date(now.getFullYear(), 0, 1)

  // Kunlik reset
  if (this.usage.lastDailyReset < today) {
    this.usage.daily = 0
    this.usage.lastDailyReset = today
  }

  // Oylik reset
  if (this.usage.lastMonthlyReset < thisMonth) {
    this.usage.monthly = 0
    this.usage.lastMonthlyReset = thisMonth
  }

  // Yillik reset
  if (this.usage.lastYearlyReset < thisYear) {
    this.usage.yearly = 0
    this.usage.lastYearlyReset = thisYear
  }

  // Limitlarni tekshirish
  if (this.usage.daily >= this.limits.daily) {
    return { allowed: false, message: `Kunlik limit tugadi (${this.limits.daily} ta so'rov)` }
  }
  if (this.usage.monthly >= this.limits.monthly) {
    return { allowed: false, message: `Oylik limit tugadi (${this.limits.monthly} ta so'rov)` }
  }
  if (this.usage.yearly >= this.limits.yearly) {
    return { allowed: false, message: `Yillik limit tugadi (${this.limits.yearly} ta so'rov)` }
  }

  // Usage ni yangilash
  this.usage.daily += 1
  this.usage.monthly += 1
  this.usage.yearly += 1
  this.usage.lastUsed = now

  return { allowed: true }
}

module.exports = mongoose.model("User", userSchema)
