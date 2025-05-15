import React, { useState } from 'react';
import { Search, Menu, X, ShoppingCart, BookOpen } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <BookOpen className="w-8 h-8 text-[#FFB6B9]" />
            <span className="ml-2 text-2xl font-bold text-[#5E7E9B]">KidBooks</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-[#5E7E9B] hover:text-[#FFB6B9] transition-colors duration-300">Home</a>
            <a href="#" className="text-[#5E7E9B] hover:text-[#FFB6B9] transition-colors duration-300">Books</a>
            <a href="#" className="text-[#5E7E9B] hover:text-[#FFB6B9] transition-colors duration-300">Categories</a>
            <a href="#" className="text-[#5E7E9B] hover:text-[#FFB6B9] transition-colors duration-300">About Us</a>
          </div>
          
          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <button className="text-[#5E7E9B] hover:text-[#FFB6B9] transition-colors duration-300">
              <Search className="w-6 h-6" />
            </button>
            <button className="text-[#5E7E9B] hover:text-[#FFB6B9] transition-colors duration-300 relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-[#FFB6B9] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-[#5E7E9B]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 absolute left-0 right-0 z-10 transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-[#5E7E9B] hover:text-[#FFB6B9] transition-colors duration-300">Home</a>
              <a href="#" className="text-[#5E7E9B] hover:text-[#FFB6B9] transition-colors duration-300">Books</a>
              <a href="#" className="text-[#5E7E9B] hover:text-[#FFB6B9] transition-colors duration-300">Categories</a>
              <a href="#" className="text-[#5E7E9B] hover:text-[#FFB6B9] transition-colors duration-300">About Us</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;