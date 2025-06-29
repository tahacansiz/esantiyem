import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CategoryGrid from '../components/CategoryGrid';
import ListingGrid from '../components/ListingGrid';
import CTASection from '../components/CTASection';

function HomePage() {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <HeroSection />
        <CategoryGrid />
        <ListingGrid />
        <CTASection />
      </div>
    </div>
  );
}

export default HomePage;
