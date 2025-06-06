const Stat = require("../models/Stat")
const User = require("../models/User")

/**
 * Kunlik statistikani yangilash
 * @param {Object} options - Yangilash uchun parametrlar
 * @param {Number} options.chats - Qo'shiladigan chat soni
 * @param {Number} options.tokens - Qo'shiladigan token soni
 * @param {String} options.model - Chat modeli
 * @param {String} options.userId - Foydalanuvchi ID si
 */
async function updateDailyStats({ chats = 1, tokens = 0, model = "gpt-3.5-turbo", userId }) {
  try {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    // Statistikani yangilash
    const updateQuery = {
      $inc: {
        dailyChats: chats,
        totalTokens: tokens,
      },
    }

    // Model statistikasini yangilash
    if (model) {
      updateQuery.$inc[`models.${model}`] = 1
    }

    // Noyob foydalanuvchilarni qo'shish
    if (userId) {
      updateQuery.$addToSet = { uniqueUsers: userId }
    }

    await Stat.findOneAndUpdate({ date: today }, updateQuery, {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    })
  } catch (error) {
    console.error("Statistikani yangilashda xatolik:", error)
  }
}

/**
 * Barcha foydalanuvchilar usage ni yangilash
 * Har kuni yarim tunda ishga tushirilishi kerak
 */
async function resetDailyUsage() {
  try {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

    // Barcha foydalanuvchilarni yangilash
    await User.updateMany(
      { "usage.lastDailyReset": { $lt: today } },
      {
        $set: {
          "usage.daily": 0,
          "usage.lastDailyReset": today,
        },
      },
    )

    console.log("Kunlik usage muvaffaqiyatli yangilandi")
  } catch (error) {
    console.error("Kunlik usage ni yangilashda xatolik:", error)
  }
}

/**
 * Barcha foydalanuvchilar oylik usage ni yangilash
 * Har oyning birinchi kuni ishga tushirilishi kerak
 */
async function resetMonthlyUsage() {
  try {
    const now = new Date()
    const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1)

    // Barcha foydalanuvchilarni yangilash
    await User.updateMany(
      { "usage.lastMonthlyReset": { $lt: thisMonth } },
      {
        $set: {
          "usage.monthly": 0,
          "usage.lastMonthlyReset": thisMonth,
        },
      },
    )

    console.log("Oylik usage muvaffaqiyatli yangilandi")
  } catch (error) {
    console.error("Oylik usage ni yangilashda xatolik:", error)
  }
}

/**
 * Barcha foydalanuvchilar yillik usage ni yangilash
 * Har yilning birinchi kuni ishga tushirilishi kerak
 */
async function resetYearlyUsage() {
  try {
    const now = new Date()
    const thisYear = new Date(now.getFullYear(), 0, 1)

    // Barcha foydalanuvchilarni yangilash
    await User.updateMany(
      { "usage.lastYearlyReset": { $lt: thisYear } },
      {
        $set: {
          "usage.yearly": 0,
          "usage.lastYearlyReset": thisYear,
        },
      },
    )

    console.log("Yillik usage muvaffaqiyatli yangilandi")
  } catch (error) {
    console.error("Yillik usage ni yangilashda xatolik:", error)
  }
}

module.exports = {
  updateDailyStats,
  resetDailyUsage,
  resetMonthlyUsage,
  resetYearlyUsage,
}
