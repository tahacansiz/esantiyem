import React from 'react';

function HomePage() {
  return (
    <div>
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">Logo</div>
        <div className="menu-right">
          <select className="category-select">
            <option>Kategoriler</option>
          </select>
          <button className="btn">Giriş</button>
          <button className="btn">Kayıt</button>
        </div>
      </nav>

      {/* Search bar */}
      <div className="search-container">
        <input type="text" placeholder="Hangi hizmete ihtiyacınız var?" />
      </div>

      {/* Popular categories */}
      <div className="categories">
        <div className="category-card">Temizlik</div>
        <div className="category-card">Tadilat</div>
        <div className="category-card">Nakliyat</div>
        <div className="category-card">Daha Fazla</div>
      </div>

      {/* Latest listings */}
      <div className="latest-listings">
        <div className="listing-card">Son ilan 1</div>
        <div className="listing-card">Son ilan 2</div>
      </div>
    </div>
  );
}

export default HomePage;
