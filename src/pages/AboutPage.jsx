import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg">We are Izzi Alfatih Transport, committed to providing reliable transport solutions.</p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
