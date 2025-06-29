import React from 'react';

function SearchSection() {
  return (
    <section className="search-container">
      <input type="text" placeholder="What service do you need?" />
      <p className="subtitle">Popular categories</p>
    </section>
  );
}

export default SearchSection;
