// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import WelcomeSection from './WelcomeSection';
import ServicesSection from './ServiceSection';
import ProjectSection from './ProjectSection';
import Subscription from './Subscription';
import Footer from './Footer';
import AboutUs from './AboutUs';  

import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ScrollToTopButton from './ScrollToTopButton';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<>
            <LandingPage />
            <WelcomeSection />
            <ServicesSection />
            <ProjectSection />
            <Subscription />
            <ScrollToTopButton />
          </>} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
