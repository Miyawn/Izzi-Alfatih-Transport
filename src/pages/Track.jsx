// src/pages/Track.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Track = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-semibold">Track Page</h1>
        <p>Content for the Track page will go here.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Track;
