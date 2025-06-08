import React, { createContext, useContext, useState, useEffect } from 'react';

// Language data object with translations
export const languageData = {
  uz: {
    // Navbar
    home: "Bosh sahifa",
    chat: "Chat",
    startChat: "Chatni boshlash",
    
    // Hero section
    heroTitle: "ZominAI — Aqlli yordamchi: tezkor, ishonchli, siz uchun ",
    heroSubtitle: "Zomin tumani IT Creative o'quvchilari tomonidan tashkil etilgan AI modul sizning yordamchingiz!",
    getStarted: "Boshlash",
    learnMore: "Batafsil",
    
    // Forms
    firstName: "Ism",
    lastName: "Familiya",
    phone: "Telefon",
    course: "Kurs",
    submit: "Yuborish",
    enrollCourse: "Kursga yozilish",
    
    // Courses
    selectCourse: "Kursni tanlang",
    webDevelopment: "Web dasturlash",
    mobileDevelopment: "Mobil dasturlash",
    dataScience: "Ma'lumotlar tahlili",
    artificialIntelligence: "Sun'iy intellekt",
    
    // About Developer
    aboutDeveloper: "LOYIHA YARATUVCHISI",
    developerName: "Abdulloh Yusupov",
    developerRole: "Full Stack Developer",
    github: "GitHub",
    telegram: "Telegram",
    
    // Testimonials
    testimonials: "LOYIHA HAQIDA FIKRLAR",
    testimonial1: "ZominAI juda foydali! Barcha savollarimga aniq javob beradi.",
    testimonial2: "Eng yaxshi AI yordamchi! Dasturlashda katta yordam beradi.",
    testimonial3: "Juda tez va aniq javoblar. Tavsiya qilaman!",
    testimonial4: "O'qituvchi sifatida ZominAI menga katta yordam beradi.",
    testimonial5: "Biznes uchun juda foydali vosita. Samaradorlikni oshiradi.",
    testimonial6: "Startapim uchun ajoyib AI yordamchi. Har doim ishlataman.",
    testimonial7: "Ma'lumotlar tahlilida ZominAI bilan ishlash juda qulay.",
    
    // Sponsors
    sponsors: "BIZGA ISHONCH BILDIRISHADI",
    
    // Footer
    contact: "Aloqa",
    address: "Manzil",
    author: "Muallif",
    allRightsReserved: "Barcha huquqlar himoyalangan",
    
    // Chat
    chatWelcome: "ZominAI bilan Chat boshlandi!",
    typeMessage: "Xabaringizni yozing...",
    send: "Yuborish",
    copyCode: "Nusxa olish",
    codeCopied: "✅ Nusxa olindi",
    
    // Loading
    loading: "Yuklanmoqda...",
    
    // Success messages
    enrollmentSuccess: "Kursga muvaffaqiyatli yozildingiz!",
  },
  ru: {
    // Navbar
    home: "Главная",
    chat: "Чат",
    startChat: "Начать чат",
    
    // Hero section
    heroTitle: "ZominAI — Ваш помощник искусственного интеллекта",
    heroSubtitle: "Общайтесь с самым современным AI чат-ботом в Узбекистане",
    getStarted: "Начать",
    learnMore: "Подробнее",
    
    // Forms
    firstName: "Имя",
    lastName: "Фамилия",
    phone: "Телефон",
    course: "Курс",
    submit: "Отправить",
    enrollCourse: "Записаться на курс",
    
    // Courses
    selectCourse: "Выберите курс",
    webDevelopment: "Веб-разработка",
    mobileDevelopment: "Мобильная разработка",
    dataScience: "Анализ данных",
    artificialIntelligence: "Искусственный интеллект",
    
    // About Developer
    aboutDeveloper: "О разработчике",
    developerName: "Абдуллох Юсупов",
    developerRole: "Full Stack разработчик",
    github: "GitHub",
    telegram: "Telegram",
    
    // Testimonials
    testimonials: "Отзывы клиентов",
    testimonial1: "ZominAI очень полезен! Отвечает точно на все мои вопросы.",
    testimonial2: "Лучший AI помощник! Очень помогает в программировании.",
    testimonial3: "Очень быстрые и точные ответы. Рекомендую!",
    testimonial4: "Как преподаватель, ZominAI мне очень помогает.",
    testimonial5: "Очень полезный инструмент для бизнеса. Повышает эффективность.",
    testimonial6: "Отличный AI помощник для моего стартапа. Использую постоянно.",
    testimonial7: "Работать с ZominAI в анализе данных очень удобно.",
    
    // Sponsors
    sponsors: "Спонсоры",
    
    // Footer
    contact: "Контакты",
    address: "Адрес",
    author: "Автор",
    allRightsReserved: "Все права защищены",
    
    // Chat
    chatWelcome: "Привет! Я ZominAI. У вас есть вопросы?",
    typeMessage: "Введите ваше сообщение...",
    send: "Отправить",
    copyCode: "Копировать",
    codeCopied: "✅ Скопировано",
    
    // Loading
    loading: "Загрузка...",
    
    // Success messages
    enrollmentSuccess: "Вы успешно записались на курс!",
  },
  en: {
    // Navbar
    home: "Home",
    chat: "Chat",
    startChat: "Start Chat",
    
    // Hero section
    heroTitle: "ZominAI — Your Artificial Intelligence Assistant",
    heroSubtitle: "Chat with the most modern AI chatbot in Uzbekistan",
    getStarted: "Get Started",
    learnMore: "Learn More",
    
    // Forms
    firstName: "First Name",
    lastName: "Last Name",
    phone: "Phone",
    course: "Course",
    submit: "Submit",
    enrollCourse: "Enroll in Course",
    
    // Courses
    selectCourse: "Select Course",
    webDevelopment: "Web Development",
    mobileDevelopment: "Mobile Development",
    dataScience: "Data Science",
    artificialIntelligence: "Artificial Intelligence",
    
    // About Developer
    aboutDeveloper: "About Developer",
    developerName: "Abdulloh Yusupov",
    developerRole: "Full Stack Developer",
    github: "GitHub",
    telegram: "Telegram",
    
    // Testimonials
    testimonials: "Client Testimonials",
    testimonial1: "ZominAI is very helpful! Answers all my questions accurately.",
    testimonial2: "The best AI assistant! Great help in programming.",
    testimonial3: "Very fast and accurate responses. Highly recommend!",
    testimonial4: "As a teacher, ZominAI helps me a lot.",
    testimonial5: "Very useful tool for business. Increases efficiency.",
    testimonial6: "Great AI assistant for my startup. I use it constantly.",
    testimonial7: "Working with ZominAI in data analysis is very convenient.",
    
    // Sponsors
    sponsors: "Sponsors",
    
    // Footer
    contact: "Contact",
    address: "Address",
    author: "Author",
    allRightsReserved: "All rights reserved",
    
    // Chat
    chatWelcome: "Hello! I'm ZominAI. Do you have any questions?",
    typeMessage: "Type your message...",
    send: "Send",
    copyCode: "Copy Code",
    codeCopied: "✅ Code Copied",
    
    // Loading
    loading: "Loading...",
    
    // Success messages
    enrollmentSuccess: "Successfully enrolled in course!",
  }
};

type Language = 'uz' | 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('zominai-language');
    return (saved as Language) || 'uz';
  });

  useEffect(() => {
    localStorage.setItem('zominai-language', language);
  }, [language]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = languageData[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};