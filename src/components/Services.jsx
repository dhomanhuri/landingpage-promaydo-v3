import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon, index }) => (
  <motion.div 
    className="relative bg-brand-dark-blue/20 border border-white/5 p-8 rounded-2xl group overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
  >
    {/* Hover glow effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-brand-green/0 to-brand-light-blue/0 group-hover:from-brand-green/10 group-hover:to-brand-light-blue/10 transition-all duration-500" />
    <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-brand-light-blue/20 rounded-full blur-3xl group-hover:bg-brand-green/20 transition-colors duration-500" />
    
    <div className="relative z-10">
      <div className="w-14 h-14 bg-brand-dark rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 border border-brand-green/20 shadow-lg shadow-brand-green/5">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-green transition-colors flex items-center gap-2">
        {title}
        <motion.span 
          className="inline-block opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-brand-light-blue"
        >
          →
        </motion.span>
      </h3>
      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{description}</p>
    </div>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern frameworks like React, Next.js, and Vue. Fast, SEO-friendly, and responsive.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter. Seamless user experience on the go.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-light-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Desktop Applications",
      description: "Robust desktop software for Windows, macOS, and Linux. Electron-based apps that bring the power of the web to the desktop.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "AI Solutions",
      description: "Intelligent solutions leveraging Machine Learning and Generative AI. Chatbots, predictive analytics, and process automation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-light-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ];

  return (
    <div id="services" className="bg-transparent py-24 relative">
       {/* Removed the skew background as it might clash with the global animation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand-green font-semibold tracking-wide uppercase text-sm">What We Do</h2>
            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              Comprehensive Tech Services
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
              From concept to deployment, we handle every aspect of your digital product lifecycle.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
