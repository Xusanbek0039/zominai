import React from 'react';
import { Bot, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                ZominAI.uz
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              O'zbekistondagi eng zamonaviy sun'iy intellekt chatbot platformasi. 
              Bizning maqsadimiz - har bir foydalanuvchiga sifatli AI yordamini taqdim etish.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://t.me/zominai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="text-gray-400">O'zbekiston, Jizzax Viloyati, Zomin tumani IT Park</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <span className="text-gray-400">+998 (97) 521 66 86</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-400">itpark0071@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Author */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('author')}</h3>
            <div className="space-y-2">
              <p className="text-gray-400">{t('developerName')}</p>
              <p className="text-purple-400 text-sm">{t('developerRole')}</p>
              <div className="flex space-x-2 mt-3">
                <a
                  href="https://github.com/abdulloh-yusupov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  GitHub
                </a>
                <span className="text-gray-600">•</span>
                <a
                  href="https://t.me/abdulloh_yusupov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 ZominAI.uz. {t('allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;