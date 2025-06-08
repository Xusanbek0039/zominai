import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Sponsors: React.FC = () => {
  const { t } = useLanguage();

  const sponsors = [
    {
      name: "TechCorp",
      logo: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      description: "Innovatsion texnologiyalar kompaniyasi"
    },
    {
      name: "InnovateLab",
      logo: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      description: "Yoshlar uchun startap inkubatori"
    },
    {
      name: "FutureSoft",
      logo: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      description: "Kelajak dasturiy ta'minot yetkazuvchisi"
    },
    {
      name: "CodeMasters",
      logo: "https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      description: "Dasturchilar jamiyati"
    },
    {
      name: "DigitalHub",
      logo: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      description: "Raqamli innovatsiyalar markazi"
    },
    {
      name: "AI Solutions",
      logo: "https://images.pexels.com/photos/1181393/pexels-photo-1181393.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      description: "Sun'iy intellekt bo'yicha ilg'or echimlar"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800 overflow-hidden relative">
      {/* Inline style for animation */}
      <style>
        {`
          @keyframes scrollX {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .scrolling-carousel {
            display: flex;
            width: max-content;
            animation: scrollX 40s linear infinite;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('sponsors')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="overflow-hidden">
          <div className="scrolling-carousel">
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div
                key={`${sponsor.name}-${index}`}
                className="flex-shrink-0 mx-8 text-center"
              >
                <div className="w-48 h-24 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center p-4 hover:shadow-lg transition-shadow grayscale hover:grayscale-0">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity"
                  />
                </div>
                <p className="mt-2 text-sm font-semibold text-gray-800 dark:text-white">
                  {sponsor.name}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {sponsor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
