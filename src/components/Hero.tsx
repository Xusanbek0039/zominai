import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Sparkles,
  Users,
  HelpCircle,
  MessageSquare,
  GraduationCap,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

// Multi-text typewriter effect component
const TypewriterMulti: React.FC<{ texts: string[] }> = ({ texts }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (textIndex >= texts.length) {
      const resetTimeout = setTimeout(() => {
        setTextIndex(0);
        setDisplayedText('');
        setCharIndex(0);
      }, 1500);
      return () => clearTimeout(resetTimeout);
    }

    if (charIndex < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const pauseTimeout = setTimeout(() => {
        setDisplayedText('');
        setCharIndex(0);
        setTextIndex(textIndex + 1);
      }, 1200);
      return () => clearTimeout(pauseTimeout);
    }
  }, [charIndex, textIndex, texts]);

  return (
    <span className="text-3xl md:text-5xl font-medium text-gray-700 dark:text-gray-300">
      {displayedText}
      <span className="blinking-cursor">|</span>
      <style>{`
        .blinking-cursor {
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
};

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const animatedTexts = [
    'Aqlli yordamchi:',
    'tezkor,',
    'ishonchli,',
    'siz uchun',
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Logo Sparkles */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <Sparkles className="w-10 h-10 text-white animate-pulse" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              ZominAI
            </span>
            <br />
            <TypewriterMulti texts={animatedTexts} />
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('heroSubtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Start Chat */}
            <button
              onClick={() => navigate('/chat')}
              className="group flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <span>{t('getStarted')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Learn More */}
            <a
              href="https://itclms.uz/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center space-x-2 px-8 py-4 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/20 dark:hover:bg-gray-800/70 transform hover:scale-105">
                <GraduationCap className="w-5 h-5" />
                <span>{t('learnMore')}</span>
              </button>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-fade-in-up animation-delay-200">
              <div className="flex justify-center mb-2">
                <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">10K+</div>
              <div className="text-gray-600 dark:text-gray-400">Foydalanuvchilar</div>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-400">
              <div className="flex justify-center mb-2">
                <MessageSquare className="w-8 h-8 text-pink-600 dark:text-pink-400" />
              </div>
              <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-1">50K+</div>
              <div className="text-gray-600 dark:text-gray-400">Savollar</div>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-600">
              <div className="flex justify-center mb-2">
                <HelpCircle className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">24/7</div>
              <div className="text-gray-600 dark:text-gray-400">Yordam</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
