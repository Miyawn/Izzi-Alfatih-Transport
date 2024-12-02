// src/pages/Remembrance.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Recovery = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div className="relative w-full h-[640px]">
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-100"
          src="../src/assets/bgrecov.png"
          alt="Safety Image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#6a6a6a] to-[#faf9f6] opacity-25" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-[#012169] text-center">
            Recovery
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-20 py-16 bg-[#faf9f6]">
        {/* Title */}
        <h2 className="text-[#012169] text-5xl font-bold mb-4 ml-6">
          Apa sih ini cik?
        </h2>
        {/* Description */}
        <h3 className="text-black text-2xl font-light mb-12 mt-12 leading-snug ml-6">
          Kita bisa menyelamatkan kendaraan anda yang sedang mogok atau pun kecelakaan berat karena skill <br />
          mengemudi anda rendah cik
        </h3>
        <h2 className="text-[#012169] text-5xl font-bold mt-20 mb-16 ml-6">
          Recovery Documentations
        </h2>
        {/* Images */}
        <div className="flex flex-wrap justify-center gap-6 mt-24">
          <img
            className="w-[40%] h-[435px] object-cover"
            src="../src/assets/reco1.png"
            alt="Image 1"
          />
          <img
            className="w-[40%] h-[435px] object-cover"
            src="../src/assets/reco2.png"
            alt="Image 2"
          />
          <img
            className="w-[40%] h-[435px] object-cover"
            src="../src/assets/reco3.png"
            alt="Image 3"
          />
          <img
            className="w-[40%] h-[435px] object-cover"
            src="../src/assets/reco4.png"
            alt="Image 4"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Recovery;
