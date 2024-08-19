// src/App.js
import React from 'react';
import Navbar from './Navbar';
import LandingPage from '../src/LandingPage';
import WelcomeSection from '../src/WelcomeSection';
import ServicesSection from '../src/ServiceSection';
import ProjectSection from '../src/ProjectSection';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <WelcomeSection />
      <ServicesSection />
      <ProjectSection />
    </div>
  );
}

export default App;
