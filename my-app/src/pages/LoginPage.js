import React from 'react';
import Navbar from '../components/Navbar';
import AuthForms from '../components/AuthForms';

function LoginPage() {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <AuthForms />
      </div>
    </div>
  );
}

export default LoginPage;
