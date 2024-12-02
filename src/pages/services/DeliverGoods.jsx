// src/pages/Remembrance.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const DeliverGoods = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div className="relative w-full h-[640px]">
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-100"
          src="../src/assets/bgdeliv.png"
          alt="Safety Image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#6a6a6a] to-[#faf9f6] opacity-25" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-[#012169] text-center">
            Deliver Goods
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-20 py-16 bg-[#faf9f6]">
        {/* Title */}
        <h2 className="text-[#012169] text-5xl font-bold mb-4 ml-6">
          Apa sih ini kleng?
        </h2>
        {/* Description */}
        <h3 className="text-black text-2xl font-light mb-12 mt-12 leading-snug ml-6">
          Ini adalah solusi pengirim andalan jumlah besar dengan menggunakan moda transportasi darat (truk) <br />
          dan laut antar kota/wilayah dengan tarif yang lebih ekonomis.
        </h3>
        <h2 className="text-[#012169] text-5xl font-bold mb-12 ml-6">
          HGVs Documentations
        </h2>
        {/* Images */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <img
            className="w-[40%] h-[435px] object-cover"
            src="../src/assets/dego1.png"
            alt="Image 1"
          />
          <img
            className="w-[40%] h-[435px] object-cover"
            src="../src/assets/dego2.png"
            alt="Image 2"
          />
          <img
            className="w-[40%] h-[435px] object-cover"
            src="../src/assets/dego3.png"
            alt="Image 3"
          />
          <img
            className="w-[40%] h-[435px] object-cover"
            src="../src/assets/dego4.png"
            alt="Image 4"
          />
          <img
            className="w-[40%] h-[435px] object-cover"
            src="../src/assets/dego5.png"
            alt="Image 5"
          />
          <img
            className="w-[40%] h-[435px] object-cover"
            src="../src/assets/dego6.png"
            alt="Image 6"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DeliverGoods;
