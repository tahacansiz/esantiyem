import React from 'react';

const defaultListings = [
  {
    title: 'Banyo Tadilatı',
    description: 'Duşakabin, fayans ve lavabo yenilemesi yapılacak.'
  },
  {
    title: 'Elektrik Arızası',
    description: 'Evimdeki prizler çalışmıyor, kontrol edilmesi gerekiyor.'
  },
  {
    title: 'Parke Döşeme',
    description: 'Salon ve koridor için parke döşenecek.'
  },
  {
    title: 'Temizlik Hizmeti',
    description: 'Haftalık detaylı ev temizliği yapılacak.'
  }
];

function ListingGrid({ listings = defaultListings }) {
  return (
    <section className="latest-listings">
      {listings.map((item, idx) => (
        <div className="listing-card" key={idx}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <button className="btn">Teklif Ver</button>
        </div>
      ))}
    </section>
  );
}

export default ListingGrid;
