// Required additional imports
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
  Blocks,
  BookOpen,
  School,
  MoreHorizontal,
  GraduationCap,
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate, useLocation } from 'react-router-dom';

// FormModal component
const FormModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center pt-20 z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg max-w-md w-full shadow-lg relative animate-slideDown">
        <h2 className="text-lg font-bold mb-4 text-center text-gray-800 dark:text-gray-100">
          Kursga yozilish
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Ismingiz"
            className="w-full p-2 border rounded-md dark:bg-gray-800 dark:text-white"
          />
          <input
            type="tel"
            placeholder="Telefon raqamingiz"
            className="w-full p-2 border rounded-md dark:bg-gray-800 dark:text-white"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-md hover:scale-105 transition-transform"
          >
            Yuborish
          </button>
        </form>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">✕</button>
      </div>
    </div>
  );
};

const style = document.createElement('style');
style.innerHTML = `
  @keyframes slideDown {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-slideDown {
    animation: slideDown 0.3s ease-out;
  }
`;
document.head.appendChild(style);

const NavButton = ({ to, label, icon, external }: any) => {
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
      className={`relative inline-flex items-center gap-2 px-5 py-2 rounded-full font-medium transition-all duration-300 ${
        isActive
          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
          : 'text-gray-700 dark:text-gray-300 bg-gray-100/60 dark:bg-gray-800/60 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
      <FormModal open={isModalOpen} onClose={() => setModalOpen(false)} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
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

          <div className="hidden md:flex items-center space-x-4">
            <NavButton to="/" label={t('home')} icon={<HomeIcon className="w-4 h-4" />} />
            <NavButton to="/chat" label={t('chat')} icon={<MessageCircle className="w-4 h-4" />} />
            <NavButton to="/center-haqida" label="Zomin academy" icon={<School className="w-4 h-4" />} />
            <NavButton to="/kurs-haqida" label="IT haqida" icon={<BookOpen className="w-4 h-4" />} />
            <a
              href="https://itclms.uz/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
<button className="group relative overflow-hidden flex items-center space-x-2 px-8 py-4 rounded-full font-semibold text-lg border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white bg-white/10 dark:bg-gray-800/40 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r from-blue-500/30 to-purple-500/30">
  <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:translate-y-[-2px]">
    <GraduationCap className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
    <span>Kursga yozilish</span>
  </span>

  {/* Glowing animation layer */}
  <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
</button>

            </a>
            <div className="relative">
              <button onClick={() => setMoreOpen(!moreOpen)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600">
                <MoreHorizontal className="w-4 h-4" />
              </button>
              {moreOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 z-50">
                  <NavButton to="https://youtube.com/@it_creative" label="YouTube" icon={<Youtube className="w-4 h-4" />} external />
                  <NavButton to="https://t.me/it_creative_news" label="Telegram" icon={<Send className="w-4 h-4" />} external />
                  <NavButton to="https://itc-blog.uz" label="Blog" icon={<Blocks className="w-4 h-4" />} external />

                </div>
              )}
            </div>
          </div>

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
            <button
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              onClick={toggleMenu}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-2 mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
            <NavButton to="/" label={t('home')} icon={<HomeIcon className="w-4 h-4" />} />
            <NavButton to="/chat" label={t('chat')} icon={<MessageCircle className="w-4 h-4" />} />
            <NavButton to="/center-haqida" label="Zomin academy" icon={<School className="w-4 h-4" />} />
            <NavButton to="/kurs-haqida" label="IT haqida" icon={<BookOpen className="w-4 h-4" />} />
            <NavButton to="https://youtube.com/@it_creative" label="YouTube" icon={<Youtube className="w-4 h-4" />} external />
            <NavButton to="https://t.me/it_creative_news" label="Telegram" icon={<Send className="w-4 h-4" />} external />
            <NavButton to="https://itc-blog.uz" label="Blog" icon={<Blocks className="w-4 h-4" />} external />

            <a
              href="https://itclms.uz/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
<button className="group relative overflow-hidden flex items-center space-x-2 px-8 py-4 rounded-full font-semibold text-lg border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white bg-white/10 dark:bg-gray-800/40 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r from-blue-500/30 to-purple-500/30">
  <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:translate-y-[-2px]">
    <GraduationCap className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
    <span>Kursga yozilish</span>
  </span>

  {/* Glowing animation layer */}
  <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
</button>

            </a>
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
