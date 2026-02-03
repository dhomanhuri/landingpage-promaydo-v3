import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-brand-dark/80 backdrop-blur-lg fixed w-full z-50 top-0 left-0 border-b border-white/5 shadow-lg shadow-brand-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img src="/logo.png" alt="PT. Promaydo Technology Indonesia" className="h-10 w-auto" />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-300 hover:text-brand-green px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Home</a>
              <a href="#services" className="text-gray-300 hover:text-brand-green px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Services</a>
              <a href="#projects" className="text-gray-300 hover:text-brand-green px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Projects</a>
              <a href="#about" className="text-gray-300 hover:text-brand-green px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">About</a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-brand-dark inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-brand-dark-blue border-b border-white/10" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="text-gray-300 hover:text-brand-green block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#services" className="text-gray-300 hover:text-brand-green block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#projects" className="text-gray-300 hover:text-brand-green block px-3 py-2 rounded-md text-base font-medium">Projects</a>
            <a href="#about" className="text-gray-300 hover:text-brand-green block px-3 py-2 rounded-md text-base font-medium">About</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
