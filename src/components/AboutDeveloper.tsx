import React from 'react';
import { Github, MessageCircle, Code, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutDeveloper: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('aboutDeveloper')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up animation-delay-200">
            <div className="p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
                
                {/* Avatar */}
                <div className="relative">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1">
                    <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <Code className="w-16 h-16 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                    <Award className="w-8 h-8 text-yellow-800" />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {t('developerName')}
                  </h3>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
                    {t('developerRole')}
                  </p>
                  
                  {/* Skills */}
                  <div className="mb-8">
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                      {['React', 'TypeScript', 'Node.js', 'Python', 'AI/ML', 'UI/UX'].map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex justify-center lg:justify-start space-x-4">
                    <a
                      href="https://github.com/abdulloh-yusupov"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center space-x-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                      <span>{t('github')}</span>
                    </a>
                    
                    <a
                      href="https://t.me/abdulloh_yusupov"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center space-x-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                      <span>{t('telegram')}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
                    <div className="text-gray-600 dark:text-gray-400">Yillik tajriba</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">50+</div>
                    <div className="text-gray-600 dark:text-gray-400">Loyihalar</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2">100+</div>
                    <div className="text-gray-600 dark:text-gray-400">Mijozlar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDeveloper;