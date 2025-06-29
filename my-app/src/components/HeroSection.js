import React from 'react';

function HeroSection() {
  return (
    <section className="hero-section">
      <h1>Doğru hizmeti bulun</h1>
      <p className="subhead">Yerel uzmanlardan gelen teklifleri karşılaştırın</p>
      <div className="search-bar">
        <input type="text" placeholder="Hangi hizmete ihtiyacınız var?" />
        <button className="btn">Hizmet Ara</button>
      </div>
    </section>
  );
}

export default HeroSection;
