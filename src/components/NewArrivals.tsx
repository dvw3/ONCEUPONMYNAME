import React from 'react';
import { books } from '../data/books';
import BookCard from './BookCard';

const NewArrivals: React.FC = () => {
  const newArrivals = books.filter(book => book.isNewArrival);
  
  return (
    <section className="py-16 bg-[#F9F9F9]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-[#5E7E9B]">New Arrivals</h2>
          <a href="#" className="text-[#FFB6B9] font-semibold hover:underline">View All</a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newArrivals.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;