// Qo‘shimcha sahifalar qo‘shilgan va mobilda "Chatni boshlash" tugmasi faqat / sahifasida ko‘rinadi

import React, { useState } from 'react';
import {
  Bot,
  Sun,
  Moon,
  MessageCircle,
  Home as HomeIcon,
  Menu,
  X,
  Youtube,
  Send,
  BookOpen,
  School,
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavButtonProps {
  to?: string;
  label: string;
  icon: React.ReactNode;
  external?: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({ to, label, icon, external }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = to && location.pathname === to;

  const handleClick = () => {
    if (external && to) {
      window.open(to, '_blank');
    } else if (to) {
      navigate(to);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`
        relative inline-flex items-center gap-2 px-5 py-2 rounded-full font-medium transition-all duration-300
        ${isActive
          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
          : 'text-gray-700 dark:text-gray-300 bg-gray-100/60 dark:bg-gray-800/60 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white'}
      `}
    >
      {icon}
      <span>{label}</span>
      {isActive && (
        <span className="absolute inset-0 rounded-full ring-2 ring-purple-400/60 animate-pulse pointer-events-none"></span>
      )}
    </button>
  );
};

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => {
              navigate('/');
              closeMenu();
            }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ZominAI.uz
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavButton to="/" label={t('home')} icon={<HomeIcon className="w-4 h-4" />} />
            <NavButton to="/chat" label={t('chat')} icon={<MessageCircle className="w-4 h-4" />} />
            <NavButton to="/center-haqida" label="Zomin academy" icon={<School className="w-4 h-4" />} />
            <NavButton to="/kurs-haqida" label="IT haqida" icon={<BookOpen className="w-4 h-4" />} />
            <NavButton
              to="https://youtube.com/@it_creative"
              label="YouTube"
              icon={<Youtube className="w-4 h-4" />}
              external
            />
            <NavButton
              to="https://t.me/it_creative_news"
              label="Telegram"
              icon={<Send className="w-4 h-4" />}
              external
            />
          </div>

          {/* Right-side Controls */}
          <div className="flex items-center space-x-4 md:space-x-2">
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

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              onClick={toggleMenu}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-2 mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
            <NavButton to="/" label={t('home')} icon={<HomeIcon className="w-4 h-4" />} />
            <NavButton to="/chat" label={t('chat')} icon={<MessageCircle className="w-4 h-4" />} />
            <NavButton to="/center-haqida" label="Zomin academy" icon={<School className="w-4 h-4" />} />
            <NavButton to="/kurs-haqida" label="IT haqida" icon={<BookOpen className="w-4 h-4" />} />
            <NavButton to="https://youtube.com" label="YouTube" icon={<Youtube className="w-4 h-4" />} external />
            <NavButton to="https://t.me/zominai" label="Telegram" icon={<Send className="w-4 h-4" />} external />

            {/* Chat CTA (faqat home sahifada) */}
            {location.pathname === '/' && (
              <button
                onClick={() => {
                  navigate('/chat');
                  closeMenu();
                }}
                className="flex items-center space-x-2 justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t('startChat')}</span>
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
