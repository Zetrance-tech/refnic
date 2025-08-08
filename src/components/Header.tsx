import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Gem, TrendingUp, LogIn } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Blackmass Recycling', path: '/recycling-process' },
    { name: 'Supply Chain', path: '/supply-chain' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'News', path: '/articles' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[500] bg-white shadow-md">
      {/* Top Mini Header Bar */}
      <div className="text-gray-800 text-[15px] font-medium tracking-wide px-4 py-2 flex justify-between items-center sm:px-6 lg:px-8 border-b border-gray-200">
        {/* content on the left */}
        <Link to="/" className="flex items-center space-x-2">
          
        </Link>

        {/* Right-side links with icons */}
        <div className="flex gap-6 items-center">
          <Link to="/trade" className="flex items-center gap-1 hover:text-green-600 transition">
            <Gem className="w-4 h-4" />
            <span>Buy/Sell Minerals</span>
          </Link>
          <Link to="/pricing" className="flex items-center gap-1 hover:text-green-600 transition">
            <TrendingUp className="w-4 h-4" />
            <span>Metal Prices</span>
          </Link>
          <Link to="/black-mass-calculator" className="flex items-center gap-1 hover:text-green-600 transition">
            <Gem className="w-4 h-4" />
            <span>Black Mass Calculator</span>
          </Link>
          <Link to="/login" className="flex items-center gap-1 hover:text-green-600 transition">
            <LogIn className="w-4 h-4" />
            <span>Login</span>
          </Link>
        </div>
      </div>

      {/* Main Header Bar */}
      <motion.header
        className="transition-all duration-300"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img src="/assets/refnic.png" alt="Refnic Logo" className="h-auto w-40 object-contain" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-10">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-green-600 ${
                    location.pathname === item.path
                      ? 'text-green-600 border-b-2 border-green-600'
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-200 flex items-center space-x-2"
              >
                <Phone className="h-4 w-4" />
                <span>Get Quote</span>
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-green-600 bg-green-50'
                      : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.header>
    </div>
  );
};

export default Header;
