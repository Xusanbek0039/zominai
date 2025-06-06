const mongoose = require("mongoose")

const chatSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    question: {
      type: String,
      required: [true, "Savol kiritish majburiy"],
      trim: true,
      maxlength: [2000, "Savol 2000 belgidan oshmasligi kerak"],
    },
    answer: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      default: "gpt-3.5-turbo",
    },
    tokens: {
      prompt: Number,
      completion: Number,
      total: Number,
    },
  },
  {
    timestamps: true,
  },
)

// Index for faster queries
chatSchema.index({ userId: 1, createdAt: -1 })

module.exports = mongoose.model("Chat", chatSchema)
