// src/App.jsx
import React from 'react';
// import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TransportSolutions from './components/TransportSolutions';
import Story from './components/Story';
import Articles from './components/Articles';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <Services />
      
      {/* Transport Solutions Section */}
      <TransportSolutions />

      {/* Anywhere */}
      <Anywhere />
      
      {/* Story Section */}
      <Story />
      
      {/* Articles Section */}
      <Articles />
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
