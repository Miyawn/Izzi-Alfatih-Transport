// src/components/Header.jsx
import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Oregon Logistics</h1>
        <nav className="space-x-4">
          <a href="#services" className="text-gray-700">Services</a>
          <a href="#testimonials" className="text-gray-700">Testimonials</a>
          <a href="#articles" className="text-gray-700">Articles</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
