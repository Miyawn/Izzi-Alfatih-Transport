// src/components/Hero.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';

function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center" 
      style={{ backgroundImage: 'url(/src/assets/Russel_biru.png)' }}
    >

      {/* Background Layer dengan Opacity */}
      <div className="absolute inset-0 bg-gray-100 opacity-65 z-0"></div>

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
