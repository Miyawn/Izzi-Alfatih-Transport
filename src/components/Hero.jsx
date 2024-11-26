// src/components/Hero.jsx
import React from 'react';

function Hero() {
  return (
    <section className="relative bg-cover bg-center h-screen flex items-center" style={{ backgroundImage: 'url(/src/assets/Russel_biru.png)' }}>
      
      {/* Background Layer dengan Opacity */}
      <div className="absolute inset-0 bg-gray-100 opacity-65 z-0"></div>
      

      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 bg-white bg-opacity-70 px-4 py-2 flex justify-between items-center text-sm z-10">
        <div className="flex items-center space-x-4">
          <a href="#" className="text-black font-semibold">📞 +62 896 3736 9338</a>
          <a href="#" className="text-black font-semibold">📧 izzifatihtransport@email.com</a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-black font-semibold">All weekdays at 08.00 - 19.00</a>
          <a href="#" className="text-blue-600 font-semibold">TRACK & TRACE →</a>
        </div>
      </div>

      {/* Logo and Navigation */}
      <div className="absolute top-12 left-0 right-0 px-4 md:px-12 flex justify-between items-center z-10">
        <div className="flex items-center space-x-2">
          <img src='../src/assets/Logo2.png' alt="Izzi Alfatih Transport Logo" className="h-10" />
          <span className="text-2xl font-bold text-black">Izzi Alfatih Transport</span>
        </div>
        <nav className="hidden md:flex space-x-6 text-black">
          <a href="#home" className="hover:text-blue-500">Home</a>
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#services" className="hover:text-blue-500">Services</a>
          <a href="#news" className="hover:text-blue-500">News</a>
          <a href="#solutions" className="hover:text-blue-500">Solutions</a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container max-w-full mx-auto flex items-center justify-between h-full pl-12 z-0"> {/* Menambah z-index */}
        {/* Left Side: Text and Buttons */}
        <div className="w-full md:w-1/2 text-left text-black">
          <h1 className="text-4xl md:text-5xl font-medium leading-tight">
            Izzi Alfatih Transport 
            <br />
            is the <span className="text-black font-bold">solution</span> to your 
            <br />
            <span className="text-blue-900 font-bold">business’ success!</span>
          </h1>
          <p className="mt-5 max-w text-lg font-normal">
            Izzi Alfatih Transport is one of the UK’s leading logistics companies. 
            <br />
            We offer logistics services for your company that wants to move goods
            <br />
            and transact with other companies. Izzi Alfatih Transport upholds 
            <br />
            quality and class.
          </p>
          <div className="flex space-x-4 mt-6">
            <button className="btn btn-outline border-blue-900 text-blue-900">TRACK</button>
            <button className="btn btn-outline border-blue-900 text-blue-900">REQUEST A RATE</button>
          </div>
        </div>


        {/* Right Side: Truck Image */}
        <div className="hidden md:flex md:w-1/2 justify-right overflow-hidden z-0"> {/* Menambah z-index */}
          <img
              src="/src/assets/Truk_Stolpi.png"
              alt="Truck"
              className="h-auto"
              style={{ width: '250%', maxWidth: 'none', transform: 'translateX(10%)', clipPath: 'inset(0 0 0 0)' }}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="absolute bottom-8 w-full flex justify-around text-blue-900 font-semibold text-center px-4 z-10">
        <div>
          <p>Year Established</p>
          <h2 className="text-2xl font-bold">2021</h2>
        </div>
        <div>
          <p>Units in total</p>
          <h2 className="text-2xl font-bold">51</h2>
        </div>
        <div>
          <p>Company Partners</p>
          <h2 className="text-2xl font-bold">31</h2>
        </div>
        <div>
          <p>Goods Delivered</p>
          <h2 className="text-2xl font-bold">2156</h2>
        </div>
      </div>
    </section>
  );
}

export default Hero;
