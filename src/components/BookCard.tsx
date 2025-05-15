import React from 'react';
import { Book } from '../types';
import { Heart } from 'lucide-react';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative">
        <img 
          src={book.coverImage} 
          alt={book.title} 
          className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        
        {book.isNewArrival && (
          <div className="absolute top-3 left-3 bg-[#FFDD94] text-[#5E7E9B] text-xs font-bold px-3 py-1 rounded-full">
            New Arrival
          </div>
        )}
        
        {book.isFeatured && (
          <div className="absolute top-3 left-3 bg-[#FFB6B9] text-white text-xs font-bold px-3 py-1 rounded-full">
            Featured
          </div>
        )}
        
        <button className="absolute top-3 right-3 bg-white p-2 rounded-full opacity-70 hover:opacity-100 transition-opacity duration-300">
          <Heart className="w-4 h-4 text-[#FFB6B9]" />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-500">Age: {book.ageGroup}</span>
          <span className="text-sm font-bold text-[#FFB6B9]">${book.price.toFixed(2)}</span>
        </div>
        
        <h3 className="text-[#5E7E9B] font-bold text-lg mb-1 truncate group-hover:text-[#FFB6B9] transition-colors duration-300">
          {book.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3">
          by {book.author}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {book.category.slice(0, 2).map((cat, index) => (
            <span 
              key={index}
              className="bg-[#CDEAC0] text-[#5E7E9B] text-xs px-2 py-1 rounded-md"
            >
              {cat}
            </span>
          ))}
          {book.category.length > 2 && (
            <span className="text-gray-500 text-xs">+{book.category.length - 2}</span>
          )}
        </div>
        
        <button className="w-full bg-[#A8D8EA] hover:bg-[#5E7E9B] text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BookCard;