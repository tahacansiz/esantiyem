import React from 'react';

function HeroSection() {
  return (
    <section className="hero-section">
      <h1>Find the right service</h1>
      <p className="subhead">Compare offers from local professionals</p>
      <div className="search-bar">
        <input type="text" placeholder="What service do you need?" />
        <button className="btn">Find Service</button>
      </div>
    </section>
  );
}

export default HeroSection;
