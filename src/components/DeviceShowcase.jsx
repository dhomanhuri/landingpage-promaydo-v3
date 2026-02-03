import React from 'react';
import { motion } from 'framer-motion';

const CodeScreen = () => (
  <div className="p-2 space-y-1 font-mono text-[6px] md:text-[8px] text-brand-green/80 overflow-hidden opacity-70">
    <div className="flex"><span className="text-brand-light-blue">import</span>&nbsp;AI&nbsp;<span className="text-brand-light-blue">from</span>&nbsp;'future';</div>
    <div className="flex"><span className="text-brand-light-blue">const</span>&nbsp;solution = <span className="text-yellow-400">new</span>&nbsp;AI();</div>
    <div className="h-2"></div>
    <div>// Initializing Neural Network</div>
    <div className="flex items-center gap-1">
      <span>Loading</span>
      <motion.div 
        animate={{ width: ["0%", "100%"] }} 
        transition={{ duration: 2, repeat: Infinity }}
        className="h-1 bg-brand-green rounded-full"
      />
    </div>
    <div className="h-2"></div>
    {Array.from({ length: 8 }).map((_, i) => (
      <div key={i} className="flex gap-1">
        <span className="text-gray-500">{i + 1}</span>
        <div className={`h-1 rounded-full bg-white/20 w-${Math.floor(Math.random() * 10) + 2}/12`} />
      </div>
    ))}
  </div>
);

const DashboardScreen = () => (
  <div className="p-2 grid grid-cols-2 gap-2 h-full content-start">
    <div className="bg-brand-dark-blue/40 rounded p-1">
       <div className="h-1 w-1/2 bg-gray-500 rounded mb-1 opacity-50"></div>
       <div className="h-8 flex items-end gap-1">
          <motion.div animate={{ height: ["20%", "60%", "40%"] }} transition={{ duration: 2, repeat: Infinity }} className="w-1/4 bg-brand-green/60 rounded-t"></motion.div>
          <motion.div animate={{ height: ["40%", "80%", "30%"] }} transition={{ duration: 2.5, repeat: Infinity }} className="w-1/4 bg-brand-light-blue/60 rounded-t"></motion.div>
          <motion.div animate={{ height: ["60%", "30%", "70%"] }} transition={{ duration: 3, repeat: Infinity }} className="w-1/4 bg-brand-green/60 rounded-t"></motion.div>
          <motion.div animate={{ height: ["30%", "50%", "90%"] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1/4 bg-brand-light-blue/60 rounded-t"></motion.div>
       </div>
    </div>
    <div className="bg-brand-dark-blue/40 rounded p-1 space-y-1">
       <div className="h-1 w-2/3 bg-gray-500 rounded opacity-50"></div>
       <div className="flex items-center gap-1">
         <div className="w-4 h-4 rounded-full border-2 border-brand-green/60 border-t-transparent animate-spin"></div>
         <div className="text-[6px] text-gray-400">Processing...</div>
       </div>
    </div>
    <div className="col-span-2 bg-brand-dark-blue/30 rounded p-1 flex items-center gap-2">
       <div className="w-6 h-6 rounded bg-brand-light-blue/20 flex items-center justify-center text-[8px] text-brand-light-blue">AI</div>
       <div className="flex-1 space-y-1">
          <div className="h-1 w-full bg-white/10 rounded overflow-hidden">
             <motion.div animate={{ x: ["-100%", "100%"] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} className="h-full w-1/2 bg-brand-light-blue/50"></motion.div>
          </div>
       </div>
    </div>
  </div>
);

const MobileScreen = () => (
  <div className="p-2 flex flex-col h-full">
     <div className="h-8 bg-brand-green/10 rounded-lg mb-2 flex items-center px-2 gap-2">
        <div className="w-4 h-4 rounded-full bg-brand-green/40"></div>
        <div className="h-1 w-12 bg-white/20 rounded"></div>
     </div>
     <div className="flex-1 space-y-2">
        <div className="bg-brand-dark-blue/20 p-2 rounded-lg border border-white/5">
           <div className="h-1 w-8 bg-brand-light-blue/50 rounded mb-1"></div>
           <div className="h-1 w-full bg-white/10 rounded"></div>
        </div>
        <div className="bg-brand-dark-blue/20 p-2 rounded-lg border border-white/5">
           <div className="h-1 w-8 bg-brand-light-blue/50 rounded mb-1"></div>
           <div className="h-1 w-full bg-white/10 rounded"></div>
        </div>
        <div className="mt-auto bg-brand-green text-brand-dark text-[8px] font-bold text-center py-1 rounded">
           Connect
        </div>
     </div>
  </div>
);

const DeviceShowcase = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center perspective-1000">
      {/* Laptop */}
      <motion.div 
        className="absolute z-10 w-[280px] md:w-[400px]"
        initial={{ y: 20, rotateX: 10 }}
        animate={{ y: [20, 10, 20], rotateX: [10, 5, 10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Screen Frame */}
        <div className="bg-gray-800 rounded-t-xl p-2 pb-0 shadow-2xl border border-gray-700">
          <div className="bg-gray-900 rounded-t-lg overflow-hidden h-[180px] md:h-[250px] relative border border-gray-800">
             {/* Camera */}
             <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-gray-600 z-20"></div>
             {/* Screen Content */}
             <div className="absolute inset-0 bg-brand-dark/90 p-2 overflow-hidden">
                <DashboardScreen />
             </div>
             {/* Reflection */}
             <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
          </div>
        </div>
        {/* Base */}
        <div className="bg-gray-700 h-3 md:h-4 rounded-b-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] relative">
           <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-600 rounded-b-md"></div>
        </div>
      </motion.div>

      {/* Tablet */}
      <motion.div 
        className="absolute z-20 -right-4 md:-right-12 bottom-12 md:bottom-16 w-[100px] md:w-[140px]"
        initial={{ y: 40, x: 20, rotateY: -10 }}
        animate={{ y: [40, 30, 40] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="bg-gray-800 rounded-xl p-1.5 shadow-2xl border border-gray-700">
          <div className="bg-gray-900 rounded-lg overflow-hidden h-[130px] md:h-[180px] relative border border-gray-800">
             <div className="absolute inset-0 bg-brand-dark/90 p-2">
                <CodeScreen />
             </div>
          </div>
        </div>
      </motion.div>

      {/* Phone */}
      <motion.div 
        className="absolute z-30 -left-2 md:-left-8 bottom-8 md:bottom-10 w-[60px] md:w-[80px]"
        initial={{ y: 60, x: -20, rotateY: 10 }}
        animate={{ y: [60, 50, 60] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <div className="bg-gray-800 rounded-[1rem] p-1 shadow-2xl border border-gray-700">
          <div className="bg-gray-900 rounded-[0.8rem] overflow-hidden h-[100px] md:h-[140px] relative border border-gray-800">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-3 bg-gray-800 rounded-b-md z-20"></div>
              <div className="absolute inset-0 bg-brand-dark/90 pt-4">
                 <MobileScreen />
              </div>
          </div>
        </div>
      </motion.div>

      {/* Glow Effect behind everything */}
      <div className="absolute inset-0 bg-brand-light-blue/20 blur-[100px] -z-10 rounded-full"></div>
    </div>
  );
};

export default DeviceShowcase;
