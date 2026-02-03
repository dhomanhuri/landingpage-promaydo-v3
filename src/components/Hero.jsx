import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DeviceShowcase from './DeviceShowcase';

const Typewriter = ({ words, delay = 3000 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  // Typing logic
  useEffect(() => {
    if (index === words.length) {
        setIndex(0);
        return;
    }

    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000); // Wait before deleting
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="text-brand-green">
      {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
    </span>
  );
};

const Hero = () => {
  return (
    <div id="home" className="relative bg-transparent overflow-hidden min-h-screen flex items-center">
      {/* Background gradients for depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark/50 to-brand-dark z-0" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-brand-light-blue/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-green/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-light-blue font-mono text-sm md:text-base mb-4 tracking-widest border border-brand-light-blue/30 inline-block px-3 py-1 rounded-full bg-brand-dark-blue/20 backdrop-blur-sm">
              &lt; SYSTEM_READY /&gt;
            </h2>
          </motion.div>
          
          <motion.h1 
            className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block">Transforming Ideas into</span>
            <span className="block min-h-[1.2em]">
              <Typewriter words={["Digital Reality", "AI Solutions", "Smart Software", "Future Tech"]} />
            </span>
          </motion.h1>

          <motion.p 
            className="mt-6 text-xl text-gray-300 max-w-3xl leading-relaxed border-l-4 border-brand-green/50 pl-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We orchestrate high-performance <span className="text-white font-semibold">Web</span>, <span className="text-white font-semibold">Mobile</span>, and <span className="text-white font-semibold">Desktop</span> ecosystems infused with cutting-edge <span className="text-brand-light-blue font-bold">Artificial Intelligence</span>.
          </motion.p>

          <motion.div 
            className="mt-10 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#contact" className="group relative px-8 py-4 bg-brand-green text-brand-dark font-bold rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]">
              <span className="relative z-10 flex items-center gap-2">
                Initialize Project
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>
            
            <a href="#services" className="group px-8 py-4 border border-brand-light-blue text-brand-light-blue font-bold rounded-lg hover:bg-brand-light-blue/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all">
              <span className="flex items-center gap-2">
                Explore Core
                <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
              </span>
            </a>
          </motion.div>
        </div>

        {/* Device Showcase Section */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1, delay: 0.5 }}
           className="hidden lg:block"
        >
          <DeviceShowcase />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
