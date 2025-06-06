const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const helmet = require("helmet")
const rateLimit = require("express-rate-limit")
require("dotenv").config()

const authRoutes = require("./routes/auth")
const chatRoutes = require("./routes/chat")
const profileRoutes = require("./routes/profile")
const adminRoutes = require("./routes/admin")

const app = express()

// Middleware
app.use(helmet())
app.use(cors())
app.use(express.json({ limit: "10mb" }))

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
})
app.use(limiter)

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Atlas ga muvaffaqiyatli ulandi"))
  .catch((err) => console.error("MongoDB ulanishida xatolik:", err))

// Routes
app.use("/api/auth", authRoutes)
app.use("/api", chatRoutes)
app.use("/api", profileRoutes)
app.use("/api/admin", adminRoutes)

// Debug uchun barcha so'rovlarni log qilish
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`)
  next()
})

// Health check
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "Chat Backend API ishlayapti",
    endpoints: [
      "POST /api/auth/register",
      "POST /api/auth/login",
      "GET /api/auth/verify",
      "POST /api/chat",
      "GET /api/chats",
      "GET /api/profile",
      "POST /api/admin/login",
      "GET /api/admin/users",
    ],
  })
})

app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Server ishlayapti" })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    success: false,
    message: "Server xatoligi yuz berdi",
  })
})

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint topilmadi",
  })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server ${PORT} portda ishga tushdi`)
})
