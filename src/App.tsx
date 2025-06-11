import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Chat from './pages/Chat';
import NotFound from './pages/NotFound'; // ✅ 404 sahifa import qilindi
import AcademyHero from './components/AcademyHero'; 
import ProgrammingCourses from './components/ProgrammingCourses'; 

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/center-haqida" element={<AcademyHero />} />
              <Route path="/kurs-haqida" element={<ProgrammingCourses />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="*" element={<NotFound />} /> {/* ✅ 404 marshrut qo‘shildi */}
            </Routes>
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
