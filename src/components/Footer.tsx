import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#5E7E9B] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">KidBooks</h3>
            <p className="text-gray-200 mb-4">
              Bringing magical stories to young minds and fostering a lifelong love of reading.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#FFDD94] transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#FFDD94] transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#FFDD94] transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-200 hover:text-[#FFDD94] transition-colors duration-300">Home</a></li>
              <li><a href="#" className="text-gray-200 hover:text-[#FFDD94] transition-colors duration-300">Books</a></li>
              <li><a href="#" className="text-gray-200 hover:text-[#FFDD94] transition-colors duration-300">Categories</a></li>
              <li><a href="#" className="text-gray-200 hover:text-[#FFDD94] transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-200 hover:text-[#FFDD94] transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-200 hover:text-[#FFDD94] transition-colors duration-300">Fairy Tales</a></li>
              <li><a href="#" className="text-gray-200 hover:text-[#FFDD94] transition-colors duration-300">Adventure</a></li>
              <li><a href="#" className="text-gray-200 hover:text-[#FFDD94] transition-colors duration-300">Educational</a></li>
              <li><a href="#" className="text-gray-200 hover:text-[#FFDD94] transition-colors duration-300">Bedtime Stories</a></li>
              <li><a href="#" className="text-gray-200 hover:text-[#FFDD94] transition-colors duration-300">Picture Books</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-1" />
                <span className="text-gray-200">123 Book Lane, Reading City, RC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="text-gray-200">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="text-gray-200">info@kidbooks.example</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-400 mt-10 pt-6 text-center text-gray-300 text-sm">
          <p>&copy; 2025 KidBooks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;