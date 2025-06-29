import React from 'react';
import './App.css';
import './Marketplace.css';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import SeekerPanel from './pages/SeekerPanel';
import ProviderPanel from './pages/ProviderPanel';

function App() {
  return (
    <div>
      <HomePage />
      <AuthPage />
      <SeekerPanel />
      <ProviderPanel />
      <a href="https://reactjs.org">Learn React</a>
    </div>
  );
}

export default App;
