import React from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-sweetDark text-white py-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-display font-bold mb-4 text-sweetBlue">Sweet Cow Ice Cream</h3>
          <p className="text-gray-300">Simply great ice cream. Handcrafted in small batches with love and locally sourced ingredients.</p>
        </div>
        <div>
          <h3 className="text-xl font-display font-bold mb-4 text-sweetGreen">Contact</h3>
          <p className="text-gray-300">info@sweetcow.com</p>
          <p className="text-gray-300">303-555-MOOO</p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-display font-bold mb-4 text-sweetPink">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-sweetBlue transition-colors"><Instagram /></a>
            <a href="#" className="hover:text-sweetBlue transition-colors"><Facebook /></a>
            <a href="#" className="hover:text-sweetBlue transition-colors"><Twitter /></a>
            <a href="#" className="hover:text-sweetBlue transition-colors"><Mail /></a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Sweet Cow Ice Cream. All rights reserved.
      </div>
    </footer>
  );
};
