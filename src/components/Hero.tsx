import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#A8D8EA] to-[#CDEAC0]">
      {/* Desktop Layout */}
      <div className="hidden md:block relative min-h-screen">
        <div className="container mx-auto px-4 pt-16">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold text-[#5E7E9B] mb-6">
              Magical Stories
              <br />
              for Young Minds!
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-lg">
              Discover enchanting books that inspire imagination and creativity in children of all ages.
            </p>
            <button className="bg-[#FFB6B9] hover:bg-pink-400 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explore Books
            </button>
          </div>
        </div>

        {/* Age Groups - Desktop */}
        <div className="absolute top-0 right-0 bottom-0 w-2/3 flex">
          <div className="w-1/3 bg-[#FFB6B9] bg-opacity-20 relative flex items-center justify-center group">
            <div className="text-center">
              <div className="text-6xl font-bold text-white">0-1</div>
              <div className="text-2xl text-white mt-1">year</div>
            </div>
            <img 
              src="https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg" 
              alt="Baby reading"
              className="absolute bottom-0 w-48 h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          <div className="w-1/3 bg-[#CDEAC0] bg-opacity-20 relative flex items-center justify-center group">
            <div className="text-center">
              <div className="text-6xl font-bold text-white">1-3</div>
              <div className="text-2xl text-white mt-1">years</div>
            </div>
            <img 
              src="https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg" 
              alt="Toddler with book"
              className="absolute bottom-0 w-48 h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          <div className="w-1/3 bg-[#FFDD94] bg-opacity-20 relative flex items-center justify-center group">
            <div className="text-center">
              <div className="text-6xl font-bold text-white">3-18</div>
              <div className="text-2xl text-white mt-1">years</div>
            </div>
            <img 
              src="https://images.pexels.com/photos/8535230/pexels-photo-8535230.jpeg" 
              alt="Child reading"
              className="absolute bottom-0 w-48 h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#5E7E9B] mb-4">
              Magical Stories
              <br />
              for Young Minds!
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Discover enchanting books that inspire imagination and creativity in children of all ages.
            </p>
            <button className="bg-[#FFB6B9] hover:bg-pink-400 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explore Books
            </button>
          </div>
        </div>

        {/* Age Groups - Mobile */}
        <div className="space-y-4 px-4 pb-8">
          <div className="bg-[#FFB6B9] bg-opacity-20 rounded-lg p-6 flex items-center justify-between">
            <div className="text-center">
              <div className="text-4xl font-bold text-white">0-1</div>
              <div className="text-lg text-white">year</div>
            </div>
            <img 
              src="https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg" 
              alt="Baby reading"
              className="w-24 h-24 object-cover rounded-full border-2 border-white"
            />
          </div>
          <div className="bg-[#CDEAC0] bg-opacity-20 rounded-lg p-6 flex items-center justify-between">
            <div className="text-center">
              <div className="text-4xl font-bold text-white">1-3</div>
              <div className="text-lg text-white">years</div>
            </div>
            <img 
              src="https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg" 
              alt="Toddler with book"
              className="w-24 h-24 object-cover rounded-full border-2 border-white"
            />
          </div>
          <div className="bg-[#FFDD94] bg-opacity-20 rounded-lg p-6 flex items-center justify-between">
            <div className="text-center">
              <div className="text-4xl font-bold text-white">3-18</div>
              <div className="text-lg text-white">years</div>
            </div>
            <img 
              src="https://images.pexels.com/photos/8535230/pexels-photo-8535230.jpeg" 
              alt="Child reading"
              className="w-24 h-24 object-cover rounded-full border-2 border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;