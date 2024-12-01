// src/components/Hero.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link dari react-router-dom

function Hero() {
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      const rect = heroSection.getBoundingClientRect();

      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setInView(true);
      } else {
        setInView(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative bg-cover bg-center h-screen flex items-center"
      style={{ backgroundImage: 'url(/src/assets/Russel_biru.png)' }}
    >
      <div className="absolute inset-0 bg-gray-100 opacity-65 z-0"></div>

      <div className="container max-w-full mx-auto flex items-center justify-between h-full pl-12 z-0">
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
            <Link to="/track">
              <button className="btn btn-outline border-blue-900 text-blue-900">TRACK</button>
            </Link>
            <Link to="/requestrate">
              <button className="btn btn-outline border-blue-900 text-blue-900">REQUEST A RATE</button>
            </Link>
          </div>
        </div>

        <div className="hidden md:flex md:w-1/2 justify-right overflow-hidden z-0">
          <motion.img
            src="/src/assets/Truk_Stolpi.png"
            alt="Truck"
            className="h-auto"
            initial={{ x: '100%' }}
            animate={{ x: inView ? '0%' : '100%' }}
            transition={{ type: 'spring', stiffness: 50, damping: 25 }}
            style={{ width: '250%', maxWidth: 'none', clipPath: 'inset(0 0 0 0)' }}
          />
        </div>
      </div>

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
