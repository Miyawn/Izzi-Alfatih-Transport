// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-12">
      <div className="container mx-auto text-center">
        <p>© 2024 Oregon Logistics. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="text-gray-400">Privacy Policy</a>
          <a href="#" className="text-gray-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
