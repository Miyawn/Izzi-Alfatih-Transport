// src/pages/Remembrance.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Remembrance = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div className="relative w-full h-[640px]">
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-100"
          src="../src/assets/bgremem.png"
          alt="Safety Image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#6a6a6a] to-[#faf9f6] opacity-25" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-[#012169] text-center">
            Remembrance Day
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-20 py-16 bg-[#faf9f6] flex flex-col items-center">
        {/* Title */}
        <h2 className="text-center text-[#012169] text-5xl font-bold">
          11th November Every Year
        </h2>
        {/* Description */}
        <p className="text-center text-black text-xl font-normal mb-16 mt-12 leading-snug">
          We remember those who lost their lives on active service in all conflicts; from the <br />
          beginning of the First World War right up to the present day. We also remember <br />
          all those who have served and their families.
        </p>
        {/* Images */}
        <div className="flex flex-wrap justify-center gap-6">
          <img
            className="w-[40%] h-[435px] object-cover"
            src="../src/assets/alf34pl.png"
            alt="Image 1"
          />
          <img
            className="w-[40%] h-[435px] object-cover"
            src="../src/assets/remem2.png"
            alt="Image 2"
          />
          <img
            className="w-[40%] h-[435px] object-cover"
            src="../src/assets/remembrance.png"
            alt="Image 3"
          />
          <img
            className="w-[40%] h-[435px] object-cover"
            src="../src/assets/poppi.png"
            alt="Image 4"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Remembrance;
