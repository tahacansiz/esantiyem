import React from 'react';

function SeekerPanel() {
  return (
    <div>
      <form className="publish-form">
        <input type="text" placeholder="Başlık" />
        <textarea placeholder="Açıklama" />
        <select>
          <option>Kategori</option>
        </select>
        <select>
          <option>Şehir</option>
        </select>
        <button className="btn">İlan Yayınla</button>
      </form>

      <div className="job-list">
        <div className="job-card">Teklif Gelen İş 1</div>
        <div className="job-card">Teklif Gelen İş 2</div>
      </div>
    </div>
  );
}

export default SeekerPanel;
