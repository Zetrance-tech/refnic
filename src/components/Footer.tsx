import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import logo from "/public/assets/refnic.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="REFNIC Logo"
              className="h-auto w-40 object-contain"
            />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Powering Sustainability Through Innovation. India's pioneer in lithium-ion battery recycling and consulting services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-green-400 transition-colors text-sm">Our Services</Link></li>
              <li><Link to="/recycling-process" className="text-gray-300 hover:text-green-400 transition-colors text-sm">Recycling Process</Link></li>
              <li><Link to="/supply-chain" className="text-gray-300 hover:text-green-400 transition-colors text-sm">Supply Chain</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-green-400 transition-colors text-sm">Gallery</Link></li>
              <li><Link to="/articles" className="text-gray-300 hover:text-green-400 transition-colors text-sm">Articles</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Battery Recycling Plants</li>
              <li className="text-gray-300">EPR Compliance</li>
              <li className="text-gray-300">E-waste Plant Setup</li>
              <li className="text-gray-300">Government Licensing</li>
              <li className="text-gray-300">Supply Chain Advisory</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">Noida, UP, India</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">+91-7417-333-936</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">info@refnic.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Refnic. All rights reserved. | Powering Sustainability Through Innovation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;