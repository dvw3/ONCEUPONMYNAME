import React from 'react';

const AgeSelector: React.FC = () => {
  const ageGroups = [
    { id: 1, range: '0-2', label: 'Toddlers', color: '#A8D8EA' },
    { id: 2, range: '3-5', label: 'Preschool', color: '#FFDD94' },
    { id: 3, range: '6-8', label: 'Early Readers', color: '#FFB6B9' },
    { id: 4, range: '9-12', label: 'Middle Grade', color: '#CDEAC0' },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#5E7E9B] mb-8">Find Books by Age</h2>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {ageGroups.map((age) => (
            <div 
              key={age.id}
              style={{ backgroundColor: age.color }}
              className="flex flex-col items-center justify-center w-36 h-36 md:w-48 md:h-48 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <span className="text-xl md:text-2xl font-bold text-white">{age.range}</span>
              <span className="text-sm md:text-base text-white mt-2">{age.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgeSelector;