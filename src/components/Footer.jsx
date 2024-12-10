// src/components/Footer.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';

const Footer = () => (
  <footer className="bg-gray-100 text-black py-10 border-t border-gray-300">
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pl-8 text-left">
      {/* Company Section */}
      <div id="company" className="space-y-2">
        <h4 className="font-bold text-lg">COMPANY</h4>
        <p>Jl. Downing No. 10</p>
        <p>City of Westminster London, SW1</p>
        <p>United Kingdom</p>
        {/* Tambahkan margin besar untuk jarak dengan Copyright */}
        <p
          className="text-sm text-gray-600"
          style={{ marginTop: '40px', paddingTop: '80px' }}
        >
          © Copyright 2024, <br /> Desain Web 2 : Izzi Alfatih Transport
        </p>
      </div>

      {/* Contact Section */}
      <div id="contact" className="space-y-2">
        <h4 className="font-bold text-lg">CONTACT</h4>
        <p>+62 896 3736 9338</p>
        <p>izzialfatihtransport@gmail.com</p>
      </div>

      {/* Social Media Section */}
      <div id="social-media" className="space-y-4">
        <h4 className="font-bold text-lg">SOCIAL MEDIA</h4>
        <div className="flex items-center space-x-2">
          <a
            href="https://www.instagram.com/ia.transport"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <img
              className="w-6 h-6"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
            />
            <p>@ia.transport</p>
          </a>
        </div>

        {/* Partner Section */}
        <h4 className="font-bold text-lg mt-6">PARTNER</h4>
        <div className="flex items-center space-x-2">
          <a
            href="https://www.instagram.com/twentysixx.idn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <img
              className="w-6 h-6"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
            />
            <p>@twentysixx.idn</p>
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <a
            href="https://www.instagram.com/kopidarihati.bpp2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <img
              className="w-6 h-6"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
            />
            <p>@kopidarihati.bpp2</p>
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <a
            href="https://www.instagram.com/kizikafuka477"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <img
              className="w-6 h-6"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
            />
            <p>@kizikafuka477</p>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
