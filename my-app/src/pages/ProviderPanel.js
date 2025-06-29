import React from 'react';

function ProviderPanel() {
  return (
    <div>
      <form className="profile-form">
        <input type="text" placeholder="Uzmanlık" />
        <textarea placeholder="Açıklama" />
        <select>
          <option>Şehir</option>
        </select>
        <input type="file" />
        <button className="btn">Profili Kaydet</button>
      </form>

      <div className="open-jobs">
        <div className="job-card">
          Açık İlan 1 <button className="btn">Teklif Ver</button>
        </div>
        <div className="job-card">
          Açık İlan 2 <button className="btn">Teklif Ver</button>
        </div>
      </div>
    </div>
  );
}

export default ProviderPanel;
