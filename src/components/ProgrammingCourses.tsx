import React, { useState } from 'react';
import {
  Smartphone,
  Globe,
  Database,
  BrainCircuit,
  Bot,
  Layers3,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';
import FormsModal from './FormsModal';

const paths = [
  {
    title: 'Web Dasturlash',
    icon: <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    description: 'Frontend va backend dasturlar yaratish, saytlar, e-commerce platformalar.',
    income: '$1000-3000+/oy',
  },
  {
    title: 'Mobil Ilovalar',
    icon: <Smartphone className="w-8 h-8 text-green-600 dark:text-green-400" />,
    description: 'iOS va Android uchun ilovalar yaratish (React Native, Flutter).',
    income: '$1200-4000+/oy',
  },
  {
    title: 'Data Science',
    icon: <Database className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
    description: 'Statistika, AI modellari, tahlil va bashoratli tizimlar.',
    income: '$1500-5000+/oy',
  },
  {
    title: 'AI / ML',
    icon: <BrainCircuit className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    description: 'Sun’iy intellekt, mashinaviy o‘rganish, chatbotlar va ko‘rish tizimlari.',
    income: '$2000-8000+/oy',
  },
  {
    title: 'Full Stack Web',
    icon: <Layers3 className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
    description: 'Frontend + Backend + Database bilimlari bilan to‘liq dasturchi bo‘lish.',
    income: '$1500-6000+/oy',
  },
  {
    title: 'Telegram Botlar',
    icon: <Bot className="w-8 h-8 text-pink-600 dark:text-pink-400" />,
    description: 'Avtomatlashtirilgan botlar, xizmat ko‘rsatuvchi interfeyslar.',
    income: '$500-2500+/oy (freelance)',
  },
];

const CareerPaths: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="relative min-h-screen py-20 px-6 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <div className="mb-12">
          <TrendingUp className="w-12 h-12 mx-auto text-indigo-600 dark:text-indigo-400 mb-4 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            IT Sohasidagi Eng Ommabop Yo‘nalishlar
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Har bir yo‘nalishning afzalliklari, qo‘llanilishi va daromad imkoniyatlari bilan tanishing.
          </p>
        </div>

        {/* Career Path Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {paths.map((path, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:scale-105 text-left"
            >
              <div className="mb-4">{path.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {path.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">{path.description}</p>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                <strong>Daromad:</strong> {path.income}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16">
          <button
            onClick={() => setShowModal(true)}
            className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span>Yo‘nalishni tanlang</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <FormsModal onClose={() => setShowModal(false)} />
        </div>
      )}
    </section>
  );
};

export default CareerPaths;
