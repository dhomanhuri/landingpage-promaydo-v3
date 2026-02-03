import React from 'react';

const TechStack = () => {
  const technologies = [
    // {
    //   name: 'Golang',
    //   icon: (
    //     <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
    //       <path d="M2,12C2,6.48 6.48,2 12,2S22,6.48 22,12S17.52,22 12,22S2,17.52 2,12M17.5,10.5C17.5,9.7 16.8,9 16,9H8C7.2,9 6.5,9.7 6.5,10.5V13.5C6.5,14.3 7.2,15 8,15H12V13H8V11H16V13H14.5V15H16C16.8,15 17.5,14.3 17.5,13.5V10.5Z" />
    //     </svg>
    //   ) // Simplified placeholder, better to use real SVG paths if possible, but for now using text or generic if complex. 
    //   // Actually, let's use text for reliability if paths are too long, OR better: use external images from a reliable CDN like simpleicons or similar? 
    //   // No, user wants "logo atau icon". I should try to make them look decent. 
    //   // I will use simple text labels + colored dots or generic code icons if I can't find exact paths, 
    //   // BUT for a "Senior" pair programmer, I should probably try to find the paths or use a CDN.
    //   // Since I can't browse freely for assets, I will use a reliable CDN for icons: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/...
    // },
    { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Vue', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'Golang', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg' },
    { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Kubernetes', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    { name: 'PostgreSQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'AWS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  ];

  return (
    <div className="py-10 bg-brand-dark/50 border-y border-white/5 backdrop-blur-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-brand-green font-semibold tracking-wide uppercase text-sm">Powering Your Solutions With</p>
        <h3 className="mt-2 text-2xl font-bold text-white">World-Class Technologies</h3>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex whitespace-nowrap gap-16 px-8">
          {/* First Loop */}
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center justify-center gap-3 group/item min-w-[80px]">
              <div className="w-16 h-16 relative flex items-center justify-center grayscale group-hover/item:grayscale-0 transition-all duration-300 opacity-60 group-hover/item:opacity-100 transform group-hover/item:scale-110">
                <img 
                  src={tech.url} 
                  alt={tech.name} 
                  className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                />
              </div>
              <span className="text-gray-500 text-xs font-medium group-hover/item:text-brand-light-blue transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
          
          {/* Duplicate for infinite loop */}
          {technologies.map((tech, index) => (
            <div key={`dup-${index}`} className="flex flex-col items-center justify-center gap-3 group/item min-w-[80px]">
              <div className="w-16 h-16 relative flex items-center justify-center grayscale group-hover/item:grayscale-0 transition-all duration-300 opacity-60 group-hover/item:opacity-100 transform group-hover/item:scale-110">
                <img 
                  src={tech.url} 
                  alt={tech.name} 
                  className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                />
              </div>
              <span className="text-gray-500 text-xs font-medium group-hover/item:text-brand-light-blue transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
        
        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-brand-dark to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-brand-dark to-transparent z-10" />
      </div>
    </div>
  );
};

export default TechStack;
