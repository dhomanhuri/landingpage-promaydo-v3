import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, category, image, description, index, link }) => (
  <motion.div 
    className="relative group rounded-2xl overflow-hidden cursor-pointer"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
  >
    <a href={link} target={link === '#' ? '' : '_blank'} rel={link === '#' ? '' : 'noopener noreferrer'} className="block h-full">
    {/* Image Background */}
    <div className="absolute inset-0 bg-brand-dark-blue">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
      />
    </div>

    {/* Content Overlay */}
    <div className="relative h-96 p-8 flex flex-col justify-end z-10">
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent opacity-90 transition-opacity duration-300" />
      
      <div className="relative z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <span className="text-brand-green text-xs font-bold uppercase tracking-wider mb-2 block">
          {category}
        </span>
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-light-blue transition-colors">
          {title}
        </h3>
        <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
          {description}
        </p>
        
        <div className="mt-6 flex items-center gap-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
          <span>View Case Study</span>
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
    
    {/* Border Glow */}
    <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-brand-green/50 transition-colors duration-500" />
    </a>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "Neural Finance Dashboard",
      category: "Fintech & AI",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      description: "A predictive analytics platform for real-time market trend analysis using deep learning algorithms.",
      link: "#"
    },
    {
      title: "Smart City Grid",
      category: "IoT Infrastructure",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
      description: "Centralized management system for urban energy consumption and traffic flow optimization.",
      link: "#"
    },
    {
      title: "NOC Assistance",
      category: "Network Operations",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
      description: "AI-powered assistant for Network Operations Centers, automating incident response and monitoring.",
      link: "#"
    }
  ];

  return (
    <div id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-brand-light-blue font-semibold tracking-wide uppercase text-sm">Our Work</h2>
            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-xl text-gray-400">
              Showcasing our best work in digital transformation and AI innovation.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-0"
          >
            <a href="#contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-brand-dark bg-white hover:bg-brand-light-blue transition-colors duration-300">
              View All Projects
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
        
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-0 w-full h-1/2 -z-10 bg-gradient-to-b from-transparent to-brand-dark/50" />
      </div>
    </div>
  );
};

export default Projects;
