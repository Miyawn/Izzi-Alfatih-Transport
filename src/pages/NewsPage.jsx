// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NewsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Latest News</h1>
        <p className="text-lg">Stay updated with the latest news and updates from Izzi Alfatih Transport.</p>
      </div>
      <Footer />
    </div>
  );
};

export default NewsPage;
