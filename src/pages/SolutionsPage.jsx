// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SolutionsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Our Solutions</h1>
        <p className="text-lg">We provide customized transport solutions for businesses of all sizes.</p>
      </div>
      <Footer />
    </div>
  );
};

export default SolutionsPage;
