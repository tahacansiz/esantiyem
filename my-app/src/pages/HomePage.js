import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CategoryGrid from '../components/CategoryGrid';
import ListingGrid from '../components/ListingGrid';
import CTASection from '../components/CTASection';
import TestimonialsSection from '../components/TestimonialsSection';
import BrandsStrip from '../components/BrandsStrip';

function HomePage() {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <HeroSection />
        <CategoryGrid />
        <ListingGrid />
        <CTASection />
        <TestimonialsSection />
        <BrandsStrip />
      </div>
    </div>
  );
}

export default HomePage;
