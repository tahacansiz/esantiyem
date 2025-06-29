import React from 'react';
import './Marketplace.css';
import Navbar from './components/Navbar';
import SearchSection from './components/SearchSection';
import CategoryGrid from './components/CategoryGrid';
import ListingGrid from './components/ListingGrid';
import AuthForms from './components/AuthForms';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <SearchSection />
        <CategoryGrid />
        <ListingGrid />
        <AuthForms />
      </div>
    </div>
  );
}

export default App;
