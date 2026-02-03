import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <div className="bg-brand-dark min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <TechStack />
        <Services />
        <Projects />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
