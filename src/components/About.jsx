import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id="about" className="bg-gradient-to-b from-transparent to-brand-dark-blue/10 py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-brand-light-blue/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">
              Who We Are
            </h2>
            <div className="prose prose-lg prose-invert text-gray-400">
              <p className="mb-4">
                PT. Promaydo Technology Indonesia is a forward-thinking software house dedicated to empowering businesses through technology. We don't just write code; we solve problems and build value.
              </p>
              <p className="mb-4">
                Our team consists of expert developers, designers, and AI specialists who are passionate about innovation. We believe in the power of clean code, user-centric design, and scalable architecture.
              </p>
              <p>
                Whether you need a simple landing page or a complex AI-driven enterprise system, we have the expertise to deliver results that exceed expectations.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
               <motion.div 
                 className="bg-brand-dark-blue/30 p-4 rounded-lg border-l-4 border-brand-green"
                 whileHover={{ scale: 1.05 }}
                 transition={{ type: "spring", stiffness: 300 }}
               >
                 <span className="block text-3xl font-bold text-white">50+</span>
                 <span className="text-sm text-gray-400">Projects Delivered</span>
               </motion.div>
               <motion.div 
                 className="bg-brand-dark-blue/30 p-4 rounded-lg border-l-4 border-brand-light-blue"
                 whileHover={{ scale: 1.05 }}
                 transition={{ type: "spring", stiffness: 300 }}
               >
                 <span className="block text-3xl font-bold text-white">100%</span>
                 <span className="text-sm text-gray-400">Client Satisfaction</span>
               </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-12 lg:mt-0 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-brand-green/20 rounded-2xl transform rotate-3 translate-x-2 translate-y-2 animate-pulse" style={{ animationDuration: '3s' }}></div>
            <div className="relative bg-brand-dark-blue/80 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Our Core Values</h3>
              <ul className="space-y-4">
                {[
                  { title: "Innovation First", desc: "Always exploring new technologies.", color: "bg-brand-green" },
                  { title: "Reliability", desc: "Systems you can count on 24/7.", color: "bg-brand-light-blue" },
                  { title: "Transparency", desc: "Clear communication at every step.", color: "bg-brand-green" }
                ].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (idx * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className={`flex-shrink-0 h-6 w-6 rounded-full ${item.color} flex items-center justify-center mt-1`}>
                      <svg className="h-4 w-4 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-white">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
