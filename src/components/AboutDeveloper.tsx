import React from 'react';
import { Github, MessageCircle, Calendar, Layers, Users, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const skillIcons: Record<string, JSX.Element> = {
  React: (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        transform="rotate(45 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        transform="rotate(-45 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  ),
  TypeScript: (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="#3178c6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="2" ry="2" fill="#3178c6" />
      <path
        d="M7 17v-10h4v1.5h-2.5v2h2v1.5h-2v2h3v1.5H7zM15 7v10h2v-4.5h2.5v-1.5H17V7h-2z"
        fill="#fff"
      />
    </svg>
  ),
  'Node.js': (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="#43853d"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />
      <path
        d="M9.5 9v6h1.8l2.3-3v3h1.5v-6h-1.8l-2.3 3v-3h-1.5z"
        fill="#fff"
      />
    </svg>
  ),
  Python: (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2c-2 0-4 0-6 1.5V7h6v3H6.5C4 10 4 12 4 12c0 0 0 2 2.5 2h5.5v2H8v3c2 1.5 4 1.5 6 1.5s4-.5 4-3v-7c0-2.5-2-3-4-3z"
        fill="#3572A5"
      />
      <circle cx="8" cy="7" r="1" fill="#fff" />
      <circle cx="16" cy="17" r="1" fill="#fff" />
    </svg>
  ),
  'AI/ML': (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  'UI/UX': (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  ),
};

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
                        {/* Center Icon */}
                        <svg
                          className="w-16 h-16 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 8v4l3 3" />
                        </svg>
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
                    {"Usmonqulov Ozodbek"}
                  </h3>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
                    {t('developerRole')}
                  </p>
                                    <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
                    {"Zomin tumani 24-maktab 11-sinf o'quvchisi"}
                  </p>

                  {/* Skills */}
                  <div className="mb-8">
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                      {Object.entries(skillIcons).map(([skill, icon]) => (
                        <span
                          key={skill}
                          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                        >
                          {icon}
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex justify-center lg:justify-start space-x-4 mb-8">
                    <a
                      href="https://github.com/xusanbek0039"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center space-x-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                      <span>{t('github')}</span>
                    </a>

                    <a
                      href="https://t.me/husanbek_coder"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center space-x-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                      <span>{t('telegram')}</span>
                    </a>
<a
  href="https://www.youtube.com/@it_creative"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center space-x-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
>
  <svg
    className="w-5 h-5 group-hover:rotate-12 transition-transform"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21.8 7.2c-.2-.7-.8-1.3-1.5-1.5C18.9 5.5 12 5.5 12 5.5s-6.9 0-8.3.2c-.7.2-1.3.8-1.5 1.5C2 8.7 2 12 2 12s0 3.3.2 4.8c.2.7.8 1.3 1.5 1.5 1.4.2 8.3.2 8.3.2s6.9 0 8.3-.2c.7-.2 1.3-.8 1.5-1.5.2-1.5.2-4.8.2-4.8s0-3.3-.2-4.8zM10 15.5v-7l6 3.5-6 3.5z" />
  </svg>
  <span>YouTube</span>
</a>

  {/* Instagram */}
  <a
    href="https://instagram.com/husanbek_coder"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center space-x-2 px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
  >
    <svg
      className="w-5 h-5 group-hover:rotate-12 transition-transform"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
    <span>Instagram</span>
  </a>
</div>

                </div>
              </div>

              {/* Stats */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700 dark:text-gray-300">
                  <div className="flex items-center justify-center space-x-3">
                    <Calendar className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                    <div>
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</div>
                      <div>Yillik tajriba</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Layers className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                    <div>
                      <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">50+</div>
                      <div>Loyihalar</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Users className="w-7 h-7 text-pink-600 dark:text-pink-400" />
                    <div>
                      <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">100+</div>
                      <div>Mijozlar</div>
                    </div>
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
