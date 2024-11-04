// src/components/Footer.jsx
import React from 'react';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-10">
    <div className="container mx-auto text-center">
      <p>&copy; 2023 Izzi Alfatih Transport. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="#company">Company</a>
        <a href="#contact">Contact</a>
        <a href="#social-media">Social Media</a>
      </div>
    </div>
  </footer>
);

export default Footer;
