import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div id="contact" className="bg-brand-dark py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            Ready to start your next project? We'd love to hear from you.
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto bg-brand-dark-blue/20 rounded-2xl p-8 md:p-12 border border-white/5 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <form className="grid grid-cols-1 gap-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name</label>
                <input type="text" id="name" className="mt-1 block w-full bg-brand-dark/50 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
                <input type="email" id="email" className="mt-1 block w-full bg-brand-dark/50 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition" placeholder="you@example.com" />
              </div>
            </div>
            
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-400">Service Interested In</label>
              <select id="service" className="mt-1 block w-full bg-brand-dark/50 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition">
                <option>Web Development</option>
                <option>Mobile App</option>
                <option>Desktop Application</option>
                <option>AI Solution</option>
                <option>Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
              <textarea id="message" rows="4" className="mt-1 block w-full bg-brand-dark/50 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition" placeholder="Tell us about your project..."></textarea>
            </div>
            
            <div>
              <motion.button 
                type="button" 
                className="w-full bg-brand-green text-brand-dark font-bold py-3 px-4 rounded-md hover:bg-brand-light-blue hover:text-white transition-colors duration-300 shadow-lg shadow-brand-green/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
