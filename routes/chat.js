const express = require("express")
const OpenAI = require("openai")
const Chat = require("../models/Chat")
const User = require("../models/User")
const Stat = require("../models/Stat")
const { authMiddleware } = require("../middleware/auth")

const router = express.Router()

// OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// Chat yuborish
router.post("/chat", authMiddleware, async (req, res) => {
  try {
    const { question, model = "gpt-3.5-turbo" } = req.body

    if (!question || question.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: "Savol kiritish majburiy",
      })
    }

    // Foydalanuvchini yangilash va limitni tekshirish
    const user = await User.findById(req.user._id)
    const usageCheck = user.checkAndUpdateUsage()

    if (!usageCheck.allowed) {
      return res.status(429).json({
        success: false,
        message: usageCheck.message,
      })
    }

    // OpenAI API ga so'rov yuborish
    const completion = await openai.chat.completions.create({
      model: model,
      messages: [
        {
          role: "system",
          content: "Siz foydali yordamchi assistentsiz. Savollarni aniq va tushunarli javob bering.",
        },
        {
          role: "user",
          content: question,
        },
      ],
      max_tokens: 1000,
      temperature: 0.7,
    })

    const answer = completion.choices[0].message.content

    // Chatni bazaga saqlash
    const chat = new Chat({
      userId: req.user._id,
      question: question.trim(),
      answer: answer,
      model: model,
      tokens: {
        prompt: completion.usage?.prompt_tokens || 0,
        completion: completion.usage?.completion_tokens || 0,
        total: completion.usage?.total_tokens || 0,
      },
    })

    await chat.save()

    // Foydalanuvchini saqlash
    await user.save()

    // Statistikani yangilash
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    await Stat.findOneAndUpdate(
      { date: today },
      {
        $inc: {
          dailyChats: 1,
          totalTokens: completion.usage?.total_tokens || 0,
          [`models.${model}`]: 1,
        },
        $addToSet: { uniqueUsers: req.user._id },
      },
      { upsert: true, new: true, setDefaultsOnInsert: true },
    )

    res.json({
      success: true,
      message: "Chat muvaffaqiyatli yuborildi",
      data: {
        id: chat._id,
        question: chat.question,
        answer: chat.answer,
        model: chat.model,
        createdAt: chat.createdAt,
        tokens: chat.tokens,
      },
      usage: {
        daily: user.usage.daily,
        monthly: user.usage.monthly,
        yearly: user.usage.yearly,
        limits: user.limits,
      },
    })
  } catch (error) {
    console.error("Chat yuborishda xatolik:", error)

    if (error.code === "insufficient_quota") {
      return res.status(402).json({
        success: false,
        message: "OpenAI API kvotasi tugagan",
      })
    }

    if (error.code === "rate_limit_exceeded") {
      return res.status(429).json({
        success: false,
        message: "OpenAI API limit oshib ketdi, biroz kuting",
      })
    }

    res.status(500).json({
      success: false,
      message: "Chat yuborishda xatolik yuz berdi",
    })
  }
})

// Chatlar ro'yxatini olish
router.get("/chats", authMiddleware, async (req, res) => {
  try {
    const page = Number.parseInt(req.query.page) || 1
    const limit = Number.parseInt(req.query.limit) || 20
    const skip = (page - 1) * limit

    const chats = await Chat.find({ userId: req.user._id })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .select("question answer model createdAt tokens")

    const total = await Chat.countDocuments({ userId: req.user._id })

    res.json({
      success: true,
      data: chats,
      pagination: {
        current: page,
        total: Math.ceil(total / limit),
        count: chats.length,
        totalChats: total,
      },
    })
  } catch (error) {
    console.error("Chatlarni olishda xatolik:", error)
    res.status(500).json({
      success: false,
      message: "Chatlarni olishda xatolik yuz berdi",
    })
  }
})

// Chatni o'chirish
router.delete("/chats/:id", authMiddleware, async (req, res) => {
  try {
    const chatId = req.params.id

    const chat = await Chat.findOne({
      _id: chatId,
      userId: req.user._id,
    })

    if (!chat) {
      return res.status(404).json({
        success: false,
        message: "Chat topilmadi",
      })
    }

    await Chat.findByIdAndDelete(chatId)

    res.json({
      success: true,
      message: "Chat muvaffaqiyatli o'chirildi",
    })
  } catch (error) {
    console.error("Chatni o'chirishda xatolik:", error)
    res.status(500).json({
      success: false,
      message: "Chatni o'chirishda xatolik yuz berdi",
    })
  }
})

// Bitta chatni olish
router.get("/chats/:id", authMiddleware, async (req, res) => {
  try {
    const chat = await Chat.findOne({
      _id: req.params.id,
      userId: req.user._id,
    })

    if (!chat) {
      return res.status(404).json({
        success: false,
        message: "Chat topilmadi",
      })
    }

    res.json({
      success: true,
      data: chat,
    })
  } catch (error) {
    console.error("Chatni olishda xatolik:", error)
    res.status(500).json({
      success: false,
      message: "Chatni olishda xatolik yuz berdi",
    })
  }
})

module.exports = router
