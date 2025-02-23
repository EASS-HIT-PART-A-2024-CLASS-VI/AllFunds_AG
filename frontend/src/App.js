// src/App.js
import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import FundsPage from './components/pages/FundsPage';
import AdvisorPage from './components/pages/AdvisorPage';
import ComparisonPage from './components/pages/ComparisonPage';
import ManagementPage from './components/pages/ManagementPage';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'funds':
        return <FundsPage />;
      case 'comparison':
        return <ComparisonPage />;
      case 'advisor':
        return <AdvisorPage />;
      case 'management':
        return <ManagementPage />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;