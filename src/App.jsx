// src/App.jsx
import React from 'react';
import Hero from './components/Hero';
import MainServices from './components/MainServices';
import Testimonials from './components/Testimonials';
import FeaturedArticles from './components/FeaturedArticles';
import Footer from './components/Footer';
import Login from './components/login'
import Register from './components/register'

function App() {
  return (
    <div className="bg-gray-50 font-sans text-gray-700">
      {/* <Hero />
      <main className="container mx-auto px-4">
        <MainServices />
        <Testimonials />
        <FeaturedArticles />
      </main>
      <Footer /> */}
      {/* <Login/> */}
      <Register/>
    </div>
  );
}

export default App;
