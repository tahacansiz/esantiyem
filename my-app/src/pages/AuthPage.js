import React from 'react';

function AuthPage() {
  return (
    <div className="auth-container">
      <div className="user-type-select">
        <button className="btn">Hizmet Alan</button>
        <button className="btn">Hizmet Veren</button>
      </div>
      <div className="auth-form">
        <input type="email" placeholder="E-posta" />
        <input type="password" placeholder="Şifre" />
      </div>
      <div className="auth-actions">
        <button className="btn">Kayıt Ol</button>
        <button className="btn">Giriş Yap</button>
      </div>
    </div>
  );
}

export default AuthPage;
