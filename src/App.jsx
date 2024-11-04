// src/App.jsx
import React from 'react';
import Header from './components/Header';
import MainServices from './components/MainServices';
import Testimonials from './components/Testimonials';
import FeaturedArticles from './components/FeaturedArticles';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-50 font-sans text-gray-700">
      <Header />
      <main className="container mx-auto px-4">
        <section className="my-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Oregon logistics is the solution to your business goals</h1>
          <p className="text-lg text-gray-600">Reliable, cost-effective, and efficient logistics services.</p>
          <div className="flex justify-center space-x-8 mt-4">
            <div className="text-center">
              <h2 className="text-2xl font-semibold">2.5M</h2>
              <p>Shipments handled</p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-semibold">745K</h2>
              <p>Vehicles</p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-semibold">37K</h2>
              <p>Clients</p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-semibold">$1.5B</h2>
              <p>Revenue</p>
            </div>
          </div>
        </section>
        <MainServices />
        <Testimonials />
        <FeaturedArticles />
      </main>
      <Footer />
    </div>
  );
}

export default App;
