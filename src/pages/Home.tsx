import React from 'react';
import Hero from '../components/Hero';
import Forms from '../components/Forms';
import AboutDeveloper from '../components/AboutDeveloper';
import Testimonials from '../components/Testimonials';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Forms />
      <AboutDeveloper />
      <Testimonials />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Home;