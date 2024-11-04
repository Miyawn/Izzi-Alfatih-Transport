// src/components/Hero.jsx
import React from 'react';

function Hero() {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/path-to-your-background-image.jpg)' }}>
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 bg-white bg-opacity-70 px-4 py-2 flex justify-between items-center text-sm">
        <div className="flex items-center space-x-4">
          <span>📞 +62 896 3736 9338</span>
          <span>📧 izzifatihtransport@email.com</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>All weekdays at 08.00 - 19.00</span>
          <a href="#" className="text-blue-600 font-semibold">TRACK & TRACE →</a>
        </div>
      </div>

      {/* Logo and Navigation */}
      <div className="absolute top-12 left-0 right-0 px-4 md:px-12 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/Logo1.png" alt="Izzi Alfatih Transport Logo" className="h-10" />
          <span className="text-2xl font-bold text-gray-800">Izzi Alfatih Transport</span>
        </div>
        <nav className="hidden md:flex space-x-6 text-gray-700">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#news" className="hover:text-blue-600">News</a>
          <a href="#solutions" className="hover:text-blue-600">Solutions</a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center text-center h-full text-white bg-gradient-to-r from-black via-transparent to-transparent">
        <h1 className="text-4xl md:text-5xl font-bold">
          Izzi Alfatih Transport is the <span className="text-blue-500">solution</span> to your <span className="text-blue-500">business’ success</span>
        </h1>
        <p className="mt-4 max-w-xl text-lg">
          Izzi Alfatih Transport is one of the UK’s leading logistics companies. We offer logistics services for your company that wants to move goods and transact with other companies. Izzi Alfatih Transport upholds quality and class.
        </p>
        <div className="flex space-x-4 mt-6">
          <button className="btn btn-outline btn-primary">TRACK</button>
          <button className="btn btn-outline btn-primary">REQUEST A RATE</button>
        </div>

        {/* Stats */}
        <div className="flex space-x-8 mt-12 text-gray-200">
          <div className="text-center">
            <h2 className="text-2xl font-bold">2021</h2>
            <p>Year Established</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold">51</h2>
            <p>Units in total</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold">31</h2>
            <p>Company Partners</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold">2156</h2>
            <p>Goods Delivered</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
