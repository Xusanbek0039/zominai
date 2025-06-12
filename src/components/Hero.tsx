import React, { useEffect, useState } from 'react';
import { MessageCircle, Handshake, Sparkles, Brain, Cpu, Sun, Moon, Zap, Code, Database } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
const TypingLanguages = () => {
  return (
    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-300 dark:to-blue-300 bg-clip-text text-transparent">
      <Typewriter
        words={[
          "O'zbek",
          "Русский",
          "English",
          "Türkçe"
        ]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={100}
        deleteSpeed={60}
        delaySpeed={300}
      />
    </span>
  );
};
const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);



  const words = [
    'Oson integratsiya',
    'Professional nutq tizimi',
    'AI texnologiyasi bilan',
    "O'zbek tilida ishlaydigan",
    'Suniy intellekt yordamida',
    'Zamonaviy texnologiya'
  ];

  useEffect(() => {
    setIsVisible(true);
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    document.documentElement.classList.toggle('dark', prefersDark);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Mouse tracking effect
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMouseMoving(true);
      
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMouseMoving(false);
      }, 150);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 80 : 120;
    const pauseTime = isDeleting ? 800 : 2500;

    const timer = setTimeout(() => {
      if (!isDeleting && currentCharIndex < currentWord.length) {
        setTypedText(currentWord.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(prev => prev + 1);
      } else if (isDeleting && currentCharIndex > 0) {
        setTypedText(currentWord.substring(0, currentCharIndex - 1));
        setCurrentCharIndex(prev => prev - 1);
      } else if (!isDeleting && currentCharIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentCharIndex === 0) {
        setIsDeleting(false);
        setCurrentWordIndex(prev => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentCharIndex, currentWordIndex, isDeleting]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 600);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 overflow-hidden transition-all duration-1000">
      {/* Dark/Light Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-6 right-6 z-50 p-3 bg-white/10 dark:bg-slate-800/30 backdrop-blur-md rounded-full border border-gray-200/20 dark:border-slate-600/30 hover:bg-white/20 dark:hover:bg-slate-800/40 transition-all duration-300 group"
      >
        {isDarkMode ? (
          <Sun className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-200" />
        ) : (
          <Moon className="w-5 h-5 text-slate-600 group-hover:text-slate-700 transition-colors duration-200" />
        )}
      </button>

      {/* Interactive Mouse Follower */}
      <div 
        className={`fixed pointer-events-none z-20 transition-all duration-300 ${isMouseMoving ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="w-48 h-48 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 dark:from-blue-400/30 dark:via-cyan-400/30 dark:to-purple-400/30 rounded-full blur-xl animate-pulse" />
      </div>

      {/* Mouse Trail Effect */}
      <div 
        className="fixed pointer-events-none z-10 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 dark:from-blue-300 dark:to-cyan-300 rounded-full opacity-60 transition-all duration-75 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${isMouseMoving ? 1 : 0})`
        }}
      />

      {/* Creative AI-themed Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Dynamic Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob transition-all duration-1000"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <div 
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-400/30 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-2000 transition-all duration-1000"
          style={{
            transform: `translate(${-mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`
          }}
        />
        <div 
          className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 dark:from-cyan-500/20 dark:to-blue-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-4000 transition-all duration-1000"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)`
          }}
        />

        {/* Matrix-style Digital Rain */}
        <div className="absolute inset-0 opacity-20 dark:opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-xs font-mono text-blue-500/40 dark:text-cyan-400/40 animate-matrix"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            >
              {['01', '10', '11', '00', 'AI', 'ML', 'DL'][Math.floor(Math.random() * 7)]}
            </div>
          ))}
        </div>

        {/* Interactive Neural Network */}
        <svg className="absolute inset-0 w-full h-full opacity-40 dark:opacity-30" viewBox="0 0 1200 800">
          {/* Dynamic Neural Connections */}
          <g className="animate-pulse-slow">
            {[
              { x1: 100, y1: 100, x2: 300, y2: 200, delay: 0 },
              { x1: 300, y1: 200, x2: 500, y2: 150, delay: 1 },
              { x1: 500, y1: 150, x2: 700, y2: 250, delay: 2 },
              { x1: 700, y1: 250, x2: 900, y2: 180, delay: 3 },
              { x1: 200, y1: 400, x2: 400, y2: 350, delay: 4 },
              { x1: 400, y1: 350, x2: 600, y2: 400, delay: 5 },
              { x1: 600, y1: 400, x2: 800, y2: 320, delay: 6 },
            ].map((line, i) => (
              <line
                key={i}
                x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
                stroke={`url(#grad${(i % 3) + 1})`}
                strokeWidth="1"
                opacity="0.6"
                className="animate-pulse-slow"
                style={{
                  transform: `translate(${mousePosition.x * (0.002 + i * 0.001)}px, ${mousePosition.y * (0.002 + i * 0.001)}px)`,
                  animationDelay: `${line.delay}s`
                }}
              />
            ))}
          </g>

          {/* Interactive Neural Nodes */}
          <g>
            {[
              { cx: 100, cy: 100, r: 4, grad: 1 },
              { cx: 300, cy: 200, r: 6, grad: 2 },
              { cx: 500, cy: 150, r: 4, grad: 3 },
              { cx: 700, cy: 250, r: 5, grad: 1 },
              { cx: 900, cy: 180, r: 4, grad: 2 },
              { cx: 200, cy: 400, r: 5, grad: 3 },
              { cx: 400, cy: 350, r: 4, grad: 1 },
              { cx: 600, cy: 400, r: 6, grad: 2 },
              { cx: 800, cy: 320, r: 4, grad: 3 },
            ].map((node, i) => (
              <circle
                key={i}
                cx={node.cx} cy={node.cy} r={node.r}
                fill={`url(#grad${node.grad})`}
                className={`animate-neural transition-all duration-300 ${isMouseMoving ? 'opacity-100' : 'opacity-60'}`}
                style={{
                  transform: `translate(${mousePosition.x * (0.005 + i * 0.001)}px, ${mousePosition.y * (0.005 + i * 0.001)}px)`,
                  animationDelay: `${i * 0.5}s`
                }}
              />
            ))}
          </g>

          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="1" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="1" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating AI Elements */}
        <div className="absolute inset-0">
          {[
            { icon: Brain, top: '20%', left: '10%', delay: 0, size: 'w-8 h-8' },
            { icon: Cpu, top: '30%', right: '15%', delay: 2, size: 'w-6 h-6' },
            { icon: Code, bottom: '25%', left: '20%', delay: 4, size: 'w-7 h-7' },
            { icon: Database, bottom: '35%', right: '25%', delay: 6, size: 'w-5 h-5' },
            { icon: Zap, top: '60%', left: '70%', delay: 1, size: 'w-6 h-6' },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`absolute ${item.size} text-blue-400/30 dark:text-cyan-400/40 animate-float transition-all duration-500`}
                style={{
                  ...item,
                  transform: `translate(${mousePosition.x * (0.008 + i * 0.002)}px, ${mousePosition.y * (0.008 + i * 0.002)}px)`,
                  animationDelay: `${item.delay}s`
                }}
              >
                <Icon className="w-full h-full" />
              </div>
            );
          })}
        </div>

        {/* Interactive Geometric Shapes */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-${2 + (i % 4)} h-${2 + (i % 4)} border border-blue-400/20 dark:border-cyan-400/30 animate-float transition-all duration-500 ${
                i % 3 === 0 ? 'rotate-45' : i % 3 === 1 ? 'rounded-full bg-purple-400/10 dark:bg-purple-400/20' : ''
              }`}
              style={{
                top: `${Math.random() * 80 + 10}%`,
                left: `${Math.random() * 80 + 10}%`,
                transform: `translate(${mousePosition.x * (0.005 + i * 0.001)}px, ${mousePosition.y * (0.005 + i * 0.001)}px)`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-blue-50/40 to-purple-50/60 dark:from-slate-950/90 dark:via-slate-900/80 dark:to-indigo-950/90" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* AI Status Badge */}
          <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center space-x-3 bg-white/20 dark:bg-slate-800/30 backdrop-blur-md text-gray-700 dark:text-gray-200 px-6 py-3 rounded-full border border-gray-300/30 dark:border-slate-600/30 shadow-xl hover:bg-white/30 dark:hover:bg-slate-800/40 transition-all duration-300">
              <div className="flex items-center space-x-2">
                <Brain className="w-4 h-4 text-blue-500 dark:text-blue-400 animate-pulse" />
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-cyan-500 dark:bg-cyan-400 rounded-full animate-pulse animation-delay-200" />
                  <div className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full animate-pulse animation-delay-400" />
                </div>
              </div>
              <span className="text-sm font-medium tracking-wide">
                {typedText}
                <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150 text-blue-500 dark:text-blue-400`}>|</span>
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
                ZominAI
              </span>
              <Sparkles className="inline-block w-8 h-8 ml-2 text-cyan-500 dark:text-cyan-400 animate-spin-slow" />
            </span>
            <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-cyan-700 dark:from-cyan-400 dark:via-purple-400 dark:to-cyan-500 bg-clip-text text-transparent">uz</span>
            <span className="text-gray-800 dark:text-white"> - birinchi </span>
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-300 dark:to-blue-300 bg-clip-text text-transparent"><TypingLanguages /></span>
            <br />
            <span className="text-gray-800 dark:text-white">nutqini aniqlash va sintez qilish</span>
            <br />
            <span className="text-gray-600 dark:text-gray-300">tizimi</span>
          </h1>

          {/* Subtitle */}
          <p className={`text-lg sm:text-xl text-gray-600 dark:text-gray-300 mt-8 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Biznesingizni jahon miqyosidagi nutq va sohaga mos til modellari bilan rivojlantiring. 
            <span className="text-cyan-600 dark:text-cyan-400 font-medium"> Suniy intellekt</span> texnologiyasi asosida yaratilgan zamonaviy yechim.
          </p>

          {/* Feature Highlights */}
          <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center space-x-2 bg-white/30 dark:bg-slate-800/20 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-300/30 dark:border-slate-600/20 hover:bg-white/40 dark:hover:bg-slate-800/30 hover:border-gray-400/40 dark:hover:border-slate-500/30 transition-all duration-300">
              <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm text-gray-700 dark:text-gray-300">Haqiqiy vaqtda ishlov berish</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/30 dark:bg-slate-800/20 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-300/30 dark:border-slate-600/20 hover:bg-white/40 dark:hover:bg-slate-800/30 hover:border-gray-400/40 dark:hover:border-slate-500/30 transition-all duration-300">
              <Brain className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span className="text-sm text-gray-700 dark:text-gray-300">Neyron tarmoqlari</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/30 dark:bg-slate-800/20 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-300/30 dark:border-slate-600/20 hover:bg-white/40 dark:hover:bg-slate-800/30 hover:border-gray-400/40 dark:hover:border-slate-500/30 transition-all duration-300">
              <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm text-gray-700 dark:text-gray-300">Murakkab AI</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
<a
  href="/kurs-haqida"
  className="group relative flex items-center space-x-3 bg-white/30 dark:bg-slate-800/30 hover:bg-white/40 dark:hover:bg-slate-700/40 text-gray-800 dark:text-white px-8 py-4 rounded-full border border-gray-300/40 dark:border-slate-600/30 hover:border-gray-400/50 dark:hover:border-slate-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-md overflow-hidden"
>
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
  <Cpu className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-200 relative z-10" />
  <span className="font-medium relative z-10">IT Haqida</span>
</a>

<a
  href="/chat"
  className="group relative flex items-center space-x-3 bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 hover:from-blue-700 hover:via-cyan-700 hover:to-purple-700 dark:from-blue-500 dark:via-cyan-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:via-cyan-600 dark:hover:to-purple-600 text-white px-8 py-4 rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 overflow-hidden"
>
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
  <MessageCircle className="w-5 h-5 relative z-10" />
  <span className="font-medium relative z-10">Chatbot</span>
</a>

          </div>

          {/* Stats */}
          <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">99%</div>
              <div className="text-gray-500 dark:text-gray-400 text-sm mt-1">Aniqlik darajasi</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">50ms</div>
              <div className="text-gray-500 dark:text-gray-400 text-sm mt-1">Javob vaqti</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-gray-500 dark:text-gray-400 text-sm mt-1">Xizmat ko'rsatish</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 dark:from-slate-950 to-transparent pointer-events-none" />
    </div>
  );
};

export default Hero;
