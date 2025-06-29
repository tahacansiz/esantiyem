import React, { useState } from 'react';

function AuthForms() {
  const [type, setType] = useState('login');

  return (
    <section className="auth-container">
      <div className="user-type-select">
        <button className="btn" onClick={() => setType('login')}>Giriş Yap</button>
        <button className="btn" onClick={() => setType('register')}>Kaydol</button>
      </div>
      {type === 'login' ? (
        <form className="auth-form">
          <input type="email" placeholder="E-posta" />
          <input type="password" placeholder="Şifre" />
          <div className="auth-actions">
            <button className="btn" type="submit">Giriş Yap</button>
          </div>
        </form>
      ) : (
        <form className="auth-form">
          <input type="text" placeholder="İsim" />
          <input type="email" placeholder="E-posta" />
          <input type="password" placeholder="Şifre" />
          <div className="auth-actions">
            <button className="btn" type="submit">Kaydol</button>
          </div>
        </form>
      )}
    </section>
  );
}

export default AuthForms;
