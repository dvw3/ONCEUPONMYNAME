import React from 'react';
import { books } from '../data/books';
import BookCard from './BookCard';

const FeaturedBooks: React.FC = () => {
  const featuredBooks = books.filter(book => book.isFeatured);
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-[#5E7E9B]">Featured Books</h2>
          <a href="#" className="text-[#FFB6B9] font-semibold hover:underline">View All</a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;