// src/components/Footer.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';

const Footer = () => (
  <footer className="bg-gray-100 text-black py-10 border-t border-gray-300">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
      {/* Company Section */}
      <div id="company" className="space-y-2">
        <h4 className="font-bold text-lg">COMPANY</h4>
        <p>Jl. Downing No. 10</p>
        <p>City of Westminster London, SW1</p>
        <p>United Kingdom</p>
        {/* Tambahkan margin besar untuk jarak dengan Copyright */}
        <p
          className="text-sm text-gray-600"
          style={{ marginTop: '40px', paddingTop: '20px' }}
        >
          Copyright 2024 Izzi Alfatih Transport
        </p>
      </div>

      {/* Contact Section */}
      <div id="contact" className="space-y-2">
        <h4 className="font-bold text-lg">CONTACT</h4>
        <p>+62 896 3736 9338</p>
        <p>izzialfatihtransport@email.com</p>
      </div>

      {/* Social Media Section */}
      <div id="social-media" className="space-y-2">
        <h4 className="font-bold text-lg">SOCIAL MEDIA</h4>
        <div className="flex space-x-2">
          <div className="w-6 h-6 bg-gray-700"></div>
          <div className="w-6 h-6 bg-gray-700"></div>
          <div className="w-6 h-6 bg-gray-700"></div>
          <div className="w-6 h-6 bg-gray-700"></div>
          <div className="w-6 h-6 bg-gray-700"></div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
