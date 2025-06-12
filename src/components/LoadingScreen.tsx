import React from 'react';
import { Bot } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center z-50">
      <div className="text-center space-y-6">
        {/* Glowing gradient ring */}
        <div className="relative w-32 h-32 mx-auto">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 opacity-30 blur-2xl animate-pulse"></div>
          <div className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 blur-lg animate-spin-slow"></div>
          <div className="relative w-full h-full rounded-full flex items-center justify-center bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 shadow-lg">
            <Bot className="w-12 h-12 text-white animate-bounce drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
          </div>
        </div>

        {/* Logo Text */}
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent animate-fade-in">
          ZominAI.uz
        </h2>

        {/* Typing dots animation */}
        <div className="flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>

        {/* Sub Text */}
        <p className="text-sm text-gray-600 dark:text-gray-300 animate-pulse">
          Sabrli bo'ling, tizim yuklanmoqda...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
