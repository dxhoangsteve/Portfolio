import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center px-4">
        <p className="text-lg mb-4">
          &copy; {new Date().getFullYear()} MyPortfolio. All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            GitHub
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;