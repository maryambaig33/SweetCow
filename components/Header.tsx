import React, { useState } from 'react';
import { Menu, X, IceCream } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md font-display">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => handleNav('home')}>
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-sweetBlue p-2 rounded-full">
                 <IceCream className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold text-sweetBlue tracking-tight">Sweet Cow</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`px-3 py-2 rounded-md text-lg font-medium transition-colors ${
                  currentView === item.id
                    ? 'text-sweetBlue font-bold'
                    : 'text-gray-600 hover:text-sweetGreen'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="bg-sweetGreen hover:bg-lime-500 text-white px-5 py-2 rounded-full font-bold shadow-lg transition-transform hover:scale-105" onClick={() => handleNav('locations')}>
              Visit Us
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  currentView === item.id
                    ? 'bg-sweetBlue text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
