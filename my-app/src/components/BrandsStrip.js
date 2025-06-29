import React from 'react';

const brands = [1, 2, 3, 4];

function BrandsStrip() {
  return (
    <section className="brands-strip">
      <h3>Bize güvenen markalar</h3>
      <div className="brands-list">
        {brands.map((b) => (
          <img
            key={b}
            src={`https://via.placeholder.com/80x40?text=Logo+${b}`}
            alt="Marka logosu"
          />
        ))}
      </div>
    </section>
  );
}

export default BrandsStrip;
