// src/components/Navbar.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > window.innerHeight); // Hero height boundary
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white bg-opacity-50 shadow-lg' : 'bg-transparent'
      }`}
    >
      {/* Topbar */}
      <div className="bg-white px-4 py-2 flex justify-between items-center text-sm bg-opacity-90">
        <div className="flex items-center space-x-4">
          <a href="tel:+6289637369338" className="text-black font-semibold">
            📞 +62 896 3736 9338
          </a>
          <a href="mailto:izzifatihtransport@email.com" className="text-black font-semibold">
            📧 izzialfatihtransport@gmail.com
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-black font-semibold">
            All weekdays at 08.00 - 17.00
          </a>
          <NavLink to="/track" className="text-blue-600 font-semibold">
            TRACK →
          </NavLink>
        </div>
      </div>

      {/* Navbar */}
      <div
        className="px-4 py-4 md:px-12 flex justify-between items-center transition-all duration-300"
      >
        <div className="flex items-center space-x-2">
          <img
            src="../src/assets/Logo2.png"
            alt="Izzi Alfatih Transport Logo"
            className="h-10"
          />
          <span className="text-2xl font-bold text-black">
            Izzi Alfatih Transport
          </span>
        </div>
        <nav className="hidden md:flex space-x-6 font-medium text-black">
          <NavLink to="/" className="hover:text-blue-500" activeClassName="text-blue-600">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-blue-500" activeClassName="text-blue-600">
            About
          </NavLink>
          <NavLink to="/services" className="hover:text-blue-500" activeClassName="text-blue-600">
            Services
          </NavLink>
          <NavLink to="/news" className="hover:text-blue-500" activeClassName="text-blue-600">
            News
          </NavLink>
          <NavLink to="/solutions" className="hover:text-blue-500" activeClassName="text-blue-600">
            Solutions
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
