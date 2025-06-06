/**
 * Admin yaratish uchun script
 *
 * Ishlatish:
 * node scripts/create-admin.js
 */

require("dotenv").config()
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const readline = require("readline")

// MongoDB ga ulanish
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB ga ulandi"))
  .catch((err) => {
    console.error("MongoDB ulanishida xatolik:", err)
    process.exit(1)
  })

// User modelini yaratish
const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: {
      type: String,
      unique: true,
      lowercase: true,
    },
    phone: String,
    password: String,
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    limits: {
      daily: { type: Number, default: 30 },
      monthly: { type: Number, default: 300 },
      yearly: { type: Number, default: 1000 },
    },
    usage: {
      daily: { type: Number, default: 0 },
      monthly: { type: Number, default: 0 },
      yearly: { type: Number, default: 0 },
      lastUsed: { type: Date, default: Date.now },
      lastDailyReset: { type: Date, default: Date.now },
      lastMonthlyReset: { type: Date, default: Date.now },
      lastYearlyReset: { type: Date, default: Date.now },
    },
    active: { type: Boolean, default: true },
  },
  { timestamps: true },
)

const User = mongoose.model("User", userSchema)

// Foydalanuvchi kiritish uchun interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// Function to ask questions
function question(query) {
  return new Promise((resolve) => {
    rl.question(query, resolve)
  })
}

// Admin ma'lumotlarini so'rash
async function createAdmin() {
  try {
    // Mavjud adminlar sonini tekshirish
    const adminCount = await User.countDocuments({ role: "admin" })
    if (adminCount > 0) {
      console.log("Diqqat! Tizimda allaqachon admin mavjud.")
      const answer = await question("Yangi admin yaratishni istaysizmi? (ha/yo'q): ")
      if (answer.toLowerCase() !== "ha") {
        console.log("Admin yaratish bekor qilindi.")
        process.exit(0)
      }
    }

    const firstName = await question("Ism: ")
    const lastName = await question("Familiya: ")
    const email = await question("Email: ")
    const phone = await question("Telefon: ")
    const password = await question("Parol: ")

    // Parolni hashlash
    const hashedPassword = await bcrypt.hash(password, 10)

    // Yangi admin yaratish
    const newAdmin = new User({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
      role: "admin",
    })

    // Adminni saqlash
    await newAdmin.save()
    console.log("Yangi admin muvaffaqiyatli yaratildi.")
  } catch (err) {
    console.error("Admin yaratishda xatolik:", err)
  } finally {
    rl.close()
  }
}

// Admin yaratishni boshlash
createAdmin()
