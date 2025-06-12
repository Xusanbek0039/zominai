import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Ushbu platforma qanday ishlaydi?",
    answer:
      "Platforma sizga dasturlash, sun'iy intellekt va boshqa texnologiyalar bo‘yicha bilimlar taqdim etadi.",
  },
  {
    question: "Kurslar bepulmi?",
    answer:
      "Hozirda barcha kurslar bepul tarzda taqdim etilmoqda, lekin kelajakda ba'zilari pullik bo‘lishi mumkin.",
  },
  {
    question: "Telegram guruhingiz bormi?",
    answer:
      "Ha, siz bizning Telegram guruhimizga qo‘shilib yangiliklardan xabardor bo‘lishingiz mumkin.",
  },
  {
    question: "Yordam kerak bo‘lsa kimga murojaat qilaman?",
    answer:
      "Agar yordam kerak bo‘lsa, Telegram yoki Instagram orqali biz bilan bog‘lanishingiz mumkin.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Tez-tez beriladigan savollar
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
            Foydalanuvchilardan eng ko‘p beriladigan savollarni shu yerda jamladik.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-2xl transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left text-gray-900 dark:text-white font-semibold text-lg focus:outline-none"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
