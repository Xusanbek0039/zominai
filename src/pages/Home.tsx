import React from 'react';
import Hero from '../components/Hero';
import Forms from '../components/Forms';
import AboutDeveloper from '../components/AboutDeveloper';
import Testimonials from '../components/Testimonials';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Fixed, shared background (taken from Hero) */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20">
        {/* Optional blob animations */}
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* All content on top */}
      <div className="relative z-10">
        <Hero />
        <Forms />
        <AboutDeveloper />
        <Testimonials />
        <Sponsors />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
