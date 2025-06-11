import React from 'react';
import {
  BookOpen,
  CalendarCheck,
  Users,
  ArrowRight,
  GraduationCap,
  Star,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AcademyHero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-900/20 dark:to-pink-900/20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-20 right-0 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-20 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl px-6 text-center">
        <div className="animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-xl flex items-center justify-center">
              <GraduationCap className="w-12 h-12 text-white animate-pulse" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Zomin Academy
            </span>
            <br />
            <span className="text-3xl md:text-5xl font-medium text-gray-700 dark:text-gray-300">
              Bilim sari birinchi qadam
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            Ingliz tili, matematika, IT va boshqa ko‘plab yo‘nalishlarda zamonaviy o‘quv kurslar. Malakali ustozlar, interaktiv darslar, qulay o‘rganish muhitini hozir boshlang!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate('/courses')}
              className="group flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <span>Kurslarni ko‘rish</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://zominacademy.uz/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center space-x-2 px-8 py-4 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/20 dark:hover:bg-gray-800/70 transform hover:scale-105">
                <CalendarCheck className="w-5 h-5" />
                <span>Ro‘yxatdan o‘tish</span>
              </button>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            <div className="text-center">
              <Users className="w-8 h-8 mx-auto text-blue-600 dark:text-blue-400 mb-2" />
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">5,000+</div>
              <p className="text-gray-600 dark:text-gray-400">O‘quvchilar</p>
            </div>
            <div className="text-center">
              <BookOpen className="w-8 h-8 mx-auto text-purple-600 dark:text-purple-400 mb-2" />
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">20+</div>
              <p className="text-gray-600 dark:text-gray-400">Kurslar</p>
            </div>
            <div className="text-center">
              <Star className="w-8 h-8 mx-auto text-pink-600 dark:text-pink-400 mb-2" />
              <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">4.9/5</div>
              <p className="text-gray-600 dark:text-gray-400">O‘rtacha baho</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademyHero;
