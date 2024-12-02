// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServicesPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Our Services</h1>
        <p className="text-lg">We offer a variety of transport services to meet your needs, including logistics, shipping, and freight solutions.</p>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
