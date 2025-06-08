import React from 'react';
import { Bot, Sun, Moon, MessageCircle, Home as HomeIcon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavButtonProps {
  to: string;
  label: string;
  icon: React.ReactNode;
}

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  /** Reusable rounded gradient button */
  const NavButton: React.FC<NavButtonProps> = ({ to, label, icon }) => {
    const isActive = location.pathname === to;

    return (
      <button
        onClick={() => navigate(to)}
        className={`
          relative inline-flex items-center gap-2 px-5 py-2 rounded-full font-medium
          transition-all duration-300
          ${isActive
            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
            : 'text-gray-700 dark:text-gray-300 bg-gray-100/60 dark:bg-gray-800/60 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white'}
        `}
      >
        {icon}
        <span>{label}</span>

        {/* Pulsating ring for active state */}
        {isActive && (
          <span className="absolute inset-0 rounded-full ring-2 ring-purple-400/60 animate-pulse pointer-events-none"></span>
        )}
      </button>
    );
  };

  return (
    <nav className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => navigate('/')}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ZominAI.uz
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <NavButton
              to="/"
              label={t('home')}
              icon={<HomeIcon className="w-4 h-4" />}
            />
            <NavButton
              to="/chat"
              label={t('chat')}
              icon={<MessageCircle className="w-4 h-4" />}
            />
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>

            {/* Start Chat CTA */}
            {location.pathname !== '/chat' && (
              <button
                onClick={() => navigate('/chat')}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t('startChat')}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
