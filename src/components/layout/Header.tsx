import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <a href="#" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
          My Portfolio
        </a>

        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">About</a>
          <a href="#projects" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Projects</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contact</a>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="https://www.shelterluv.com/embed/animal/HSTB-A-122447">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#about" className="text-gray-600 hover:text-blue-600 text-center py-2 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 text-center py-2 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 text-center py-2 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;