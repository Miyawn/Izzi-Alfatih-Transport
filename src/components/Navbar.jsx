// src/components/Navbar.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > window.innerHeight); // Hero height boundary
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white bg-opacity-90 shadow-lg' : 'bg-transparent'
      }`}
    >
      {/* Topbar */}
      <div className="bg-white px-4 py-2 flex flex-wrap justify-between items-center text-sm bg-opacity-90">
        {/* Kontak - Tampilkan hanya ikon telepon dan email di mobile */}
        <div className="flex items-center space-x-4">
          <span className="text-black font-semibold flex items-center space-x-1">
            📞 <span className="hidden sm:inline">+62 896 3736 9338</span>
          </span>
          <span className="text-black font-semibold flex items-center space-x-1">
            📧 <span className="hidden sm:inline">izzialfatihtransport@gmail.com</span>
          </span>
        </div>

        {/* Waktu kerja dan tombol TRACK */}
        <div className="flex items-center space-x-4">
          {/* Waktu kerja hanya terlihat di desktop */}
          <span className="hidden sm:inline text-black font-semibold">
            All weekdays at 08.00 - 17.00
          </span>
          <NavLink
            to="/track"
            className="text-blue-600 font-semibold "
          >
            TRACK →
          </NavLink>
        </div>
      </div>


      {/* Navbar */}
      <div className="px-6 py-4 flex justify-between items-center transition-all duration-300">
        <div className="flex items-center space-x-2">
          <NavLink to="/" className="flex items-center space-x-2">
            <img
              src="../src/assets/Logo2.png"
              alt="Izzi Alfatih Transport Logo"
              className="h-10"
            />
            <span className="text-2xl font-bold text-black">Izzi Alfatih Transport</span>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 font-medium text-black">
          <NavLink to="/" className="hover:text-blue-500">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-blue-500">
            About
          </NavLink>
          <NavLink to="/services" className="hover:text-blue-500">
            Services
          </NavLink>
          <NavLink to="/article" className="hover:text-blue-500">
            Article
          </NavLink>
          <NavLink to="/driver" className="hover:text-blue-500">
            Driver
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <NavLink to="/" className="block hover:text-blue-500">
            Home
          </NavLink>
          <NavLink to="/about" className="block hover:text-blue-500">
            About
          </NavLink>
          <NavLink to="/services" className="block hover:text-blue-500">
            Services
          </NavLink>
          <NavLink to="/article" className="block hover:text-blue-500">
            Article
          </NavLink>
          <NavLink to="/driver" className="block hover:text-blue-500">
            Driver
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
