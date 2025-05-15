import React from 'react';
import { categories, getCategoryIcon } from '../data/categories';

const CategoryList: React.FC = () => {
  return (
    <section className="py-16 bg-[#F9F9F9]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#5E7E9B] mb-12">Explore Categories</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = getCategoryIcon(category.icon);
            
            return (
              <div 
                key={category.id} 
                className="bg-white rounded-lg p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              >
                <div className="bg-[#A8D8EA] p-4 rounded-full mb-4 group-hover:bg-[#FFB6B9] transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#5E7E9B] group-hover:text-[#FFB6B9] transition-colors duration-300">{category.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;