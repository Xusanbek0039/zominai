import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Sponsors: React.FC = () => {
  const { t } = useLanguage();

  const sponsors = [
    { name: "TechCorp", logo: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "InnovateLab", logo: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "FutureSoft", logo: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "CodeMasters", logo: "https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "DigitalHub", logo: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "AI Solutions", logo: "https://images.pexels.com/photos/1181393/pexels-photo-1181393.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('sponsors')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        {/* Infinite scrolling carousel */}
        <div className="relative">
          <div className="flex animate-scroll">
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div
                key={`${sponsor.name}-${index}`}
                className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div className="w-48 h-24 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center p-4 hover:shadow-lg transition-shadow">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;