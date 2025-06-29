import React from 'react';

const defaultListings = [
  {
    title: 'Build a website',
    description: 'Need a modern website for my business.'
  },
  {
    title: 'Design a logo',
    description: 'Looking for a fresh logo concept.'
  },
  {
    title: 'Write blog articles',
    description: 'Require weekly posts on technology.'
  }
];

function ListingGrid({ listings = defaultListings }) {
  return (
    <section className="latest-listings">
      {listings.map((item, idx) => (
        <div className="listing-card" key={idx}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <button className="btn">Make Offer</button>
        </div>
      ))}
    </section>
  );
}

export default ListingGrid;
