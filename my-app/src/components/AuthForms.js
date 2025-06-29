import React, { useState } from 'react';

function AuthForms() {
  const [type, setType] = useState('login');

  return (
    <section className="auth-container">
      <div className="user-type-select">
        <button className="btn" onClick={() => setType('login')}>Login</button>
        <button className="btn" onClick={() => setType('register')}>Register</button>
      </div>
      {type === 'login' ? (
        <form className="auth-form">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className="auth-actions">
            <button className="btn" type="submit">Login</button>
          </div>
        </form>
      ) : (
        <form className="auth-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className="auth-actions">
            <button className="btn" type="submit">Register</button>
          </div>
        </form>
      )}
    </section>
  );
}

export default AuthForms;
