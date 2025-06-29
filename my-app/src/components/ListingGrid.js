import React from 'react';

const defaultListings = [
  {
    icon: '🛁',
    title: 'Banyo Tadilatı',
    description: 'Duşakabin, fayans ve lavabo yenilemesi yapılacak.'
  },
  {
    icon: '💡',
    title: 'Elektrik Arızası',
    description: 'Evimdeki prizler çalışmıyor, kontrol edilmesi gerekiyor.'
  },
  {
    icon: '🪚',
    title: 'Parke Döşeme',
    description: 'Salon ve koridor için parke döşenecek.'
  },
  {
    icon: '🧹',
    title: 'Temizlik Hizmeti',
    description: 'Haftalık detaylı ev temizliği yapılacak.'
  }
];

function ListingGrid({ listings = defaultListings }) {
  return (
    <section className="latest-listings">
      {listings.map((item, idx) => (
        <div className="listing-card" key={idx}>
          <h3 className="listing-title">{item.icon} {item.title}</h3>
          <p>{item.description}</p>
          <div className="card-footer">
            <button className="btn">Teklif Ver</button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ListingGrid;
