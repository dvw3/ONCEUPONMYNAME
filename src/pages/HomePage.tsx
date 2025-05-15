import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CategoryList from '../components/CategoryList';
import FeaturedBooks from '../components/FeaturedBooks';
import NewArrivals from '../components/NewArrivals';
import AgeSelector from '../components/AgeSelector';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CategoryList />
      <FeaturedBooks />
      <AgeSelector />
      <NewArrivals />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomePage;