import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Gem, TrendingUp, LogIn, Calculator } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRecyclingOpen, setIsRecyclingOpen] = useState(false);
  const [isMediaOpen, setIsMediaOpen] = useState(false);
  const [isCriticalMineralsOpen, setIsCriticalMineralsOpen] = useState(false);
  const location = useLocation();
  const recyclingRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const criticalMineralsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (recyclingRef.current && !recyclingRef.current.contains(event.target as Node)) {
        setIsRecyclingOpen(false);
      }
      if (mediaRef.current && !mediaRef.current.contains(event.target as Node)) {
        setIsMediaOpen(false);
      }
      if (criticalMineralsRef.current && !criticalMineralsRef.current.contains(event.target as Node)) {
        setIsCriticalMineralsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [recyclingRef, mediaRef, criticalMineralsRef]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { 
      name: 'Lithium Recycling', 
      dropdown: [
        { name: 'Blackmass Recycling', path: '/recycling-process' },
        { name: 'Hydrometallurgical Process', path: '/hydromet' },
      ] 
    },
    { 
      name: 'Critical Minerals', 
      dropdown: [
        { name: 'Supply Chain', path: '/Supply-Chain' },
        { name: 'Buy/Sell Minerals', path: '/Trade' },
        { name: 'Metal Prices', path: '/Pricng' },
        { name: 'Black Mass Price Calculator', path: '/black-mass-calculator' },
      ] 
    },
   
    { 
      name: 'Media', 
      dropdown: [
        { name: 'Gallery', path: '/gallery' },
        { name: 'News', path: '/articles' },
      ] 
    },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[500] bg-white/80 backdrop-blur-md shadow-md">
      {/* Top Mini Header Bar */}
      <div className="hidden sm:flex text-gray-800 text-[12px] sm:text-[15px] font-medium tracking-wide px-4 py-2 justify-between items-center sm:px-6 lg:px-8 border-b border-gray-200">
        {/* content on the left */}
        <Link to="/" className="flex items-center space-x-2">
          
        </Link>

        {/* Right-side links with icons */}
        <div className="flex gap-2 sm:gap-6 items-center">
          <Link to="/trade" className="flex items-center gap-1 hover:text-green-600 transition">
            <Gem className="w-4 h-4" />
            <span className="hidden lg:inline">Buy/Sell Minerals</span>
          </Link>
          <Link to="/pricing" className="flex items-center gap-1 hover:text-green-600 transition">
            <TrendingUp className="w-4 h-4" />
            <span className="hidden lg:inline">Metal Prices</span>
          </Link>
          <Link to="/black-mass-calculator" className="flex items-center gap-1 hover:text-green-600 transition">
            <Calculator className="w-4 h-4" />
            <span className="hidden lg:inline">Black Mass Calculator</span>
          </Link>
          <Link to="/login" className="flex items-center gap-1 hover:text-green-600 transition">
            <LogIn className="w-4 h-4" />
            <span className="hidden lg:inline">Login</span>
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
                item.dropdown ? (
                  <div key={item.name} className="relative" ref={item.name === 'Lithium Recycling' ? recyclingRef : item.name === 'Critical Minerals' ? criticalMineralsRef : mediaRef}>
                    <button
                      onClick={() => {
                        if (item.name === 'Lithium Recycling') {
                          setIsRecyclingOpen(!isRecyclingOpen);
                        } else if (item.name === 'Critical Minerals') {
                          setIsCriticalMineralsOpen(!isCriticalMineralsOpen);
                        } else {
                          setIsMediaOpen(!isMediaOpen);
                        }
                      }}
                      className={`text-sm font-medium transition-colors duration-200 hover:text-green-600 flex items-center ${
                        item.dropdown.some(subItem => location.pathname === subItem.path)
                          ? 'text-green-600 border-b-2 border-green-600'
                          : 'text-gray-700'
                      }`}
                    >
                      {item.name}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    {((item.name === 'Lithium Recycling' && isRecyclingOpen) || (item.name === 'Critical Minerals' && isCriticalMineralsOpen) || (item.name === 'Media' && isMediaOpen)) && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white rounded-md shadow-lg">
                        <div className="py-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              onClick={() => {
                                if (item.name === 'Lithium Recycling') {
                                  setIsRecyclingOpen(false);
                                } else if (item.name === 'Critical Minerals') {
                                  setIsCriticalMineralsOpen(false);
                                } else {
                                  setIsMediaOpen(false);
                                }
                              }}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path || ''}
                    className={`text-sm font-medium transition-colors duration-200 hover:text-green-600 ${
                      location.pathname === item.path
                        ? 'text-green-600 border-b-2 border-green-600'
                        : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <a
                href="https://wa.me/+917417333936?text=Hi,%20I%20would%20like%20to%20become%20a%20Partner."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-200 flex items-center space-x-2"
              >
                <Phone className="h-4 w-4" />
                <span>Become a Partner</span>
              </a>
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
                item.dropdown ? (
                  <div key={item.name}>
                    <p className="block px-3 py-2 rounded-md text-base font-medium text-gray-500">{item.name}</p>
                    {item.dropdown.map(subItem => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        onClick={() => setIsOpen(false)}
                        className={`block pl-6 pr-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                          location.pathname === subItem.path
                            ? 'text-green-600 bg-green-50'
                            : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                ) : (
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
                )
              ))}
            </div>
          </motion.div>
        </div>
      </motion.header>
    </div>
  );
};

export default Header;
