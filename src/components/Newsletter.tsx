import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };
  
  return (
    <section className="py-16 bg-[#FFDD94]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-[#5E7E9B] mb-4">Join Our Reading Club</h2>
            <p className="text-gray-700 mb-2">
              Subscribe to our newsletter to receive updates on new book releases, special offers, and reading recommendations for your child.
            </p>
            <p className="text-gray-700">
              Get a <span className="font-bold">10% discount</span> on your first order!
            </p>
          </div>
          
          <div className="md:w-1/2 max-w-md">
            {isSubscribed ? (
              <div className="bg-white p-6 rounded-lg shadow-md text-center animate-fadeIn">
                <div className="mb-4 text-[#5E7E9B] text-5xl">🎉</div>
                <h3 className="text-xl font-bold text-[#5E7E9B] mb-2">Thank You!</h3>
                <p className="text-gray-600">
                  You've been successfully subscribed to our newsletter.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <label htmlFor="email" className="block text-[#5E7E9B] font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A8D8EA]"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#FFB6B9] hover:bg-pink-400 text-white font-bold py-3 rounded-lg transition-colors duration-300"
                >
                  Subscribe Now
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;