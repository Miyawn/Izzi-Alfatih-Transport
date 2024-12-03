// src/pages/Track.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Track = () => {
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleTrack = () => {
    if (!trackingNumber.trim()) {
      alert('Please enter a valid tracking number.');
      return;
    }

    // Example functionality (replace with your logic)
    console.log(`Tracking Number: ${trackingNumber}`);
    alert(`Tracking your shipment: ${trackingNumber}`);
  };

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div className="relative w-full h-[640px]">
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-100"
          src="../src/assets/bghiring.png"
          alt="Safety Image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#6a6a6a] to-[#faf9f6] opacity-25" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-[#012169] text-center">
            Tracking
          </h1>
        </div>
      </div>
      <div className="w-full h-[940px] px-[92px] py-[132px] bg-[#faf9f6] flex-col justify-start items-start gap-[82px] inline-flex">
        {/* Section 1 */}
        <div className="self-stretch h-[190px] flex-col justify-start items-start gap-16 flex">
          <div className="self-stretch text-[#012169] text-6xl font-semibold font-['Graphik Trial'] leading-10">
            IAT Tracker cik
          </div>
          <div className="self-stretch text-black text-3xl font-normal font-['Graphik Trial']">
            Ini adalah solusi pengirim andalan jumlah besar dengan menggunakan moda transportasi darat (truk) dan laut antar kota/wilayah dengan tarif yang lebih ekonomis.
          </div>
        </div>
        {/* Section 2 */}
        <div className="w-[1553px] h-[404px] p-16 bg-[#012169] rounded-lg flex-col justify-start items-start gap-[58px] flex">
          <div className="self-stretch h-[86px] text-gray-50 text-3xl font-light font-['Graphik Trial'] pt-4">
            Track your shipment, enter your IAT reference number in the following format:
            <br />
            IAT-#######-20
          </div>
          <div className="justify-center items-center gap-[58px] inline-flex">
            <input
              type="text"
              placeholder="Input tracking number: IAT-#######-20"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="w-[1067px] border-b border-white bg-transparent text-gray-50 text-3xl font-light placeholder-gray-400 focus:outline-none"
            />
            <button
              onClick={handleTrack}
              className="w-[228px] h-16 px-4 py-3.5 rounded-lg border border-[#faf9f6] bg-[#faf9f6] text-[#012169] text-base font-semibold font-['Graphik Trial'] leading-tight hover:bg-[#e6e6e6] hover:text-[#000] transition"
            >
              TRACK
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Track;
