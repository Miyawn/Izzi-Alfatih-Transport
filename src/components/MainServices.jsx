// src/components/MainServices.jsx
import React from 'react';

function MainServices() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-blue-800">Our main services</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6 px-4">
        {/* Deliver Goods Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-1/2 max-w-sm">
          <img src="../../assets/deliver-goods.jpg" alt="Deliver Goods" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Deliver Goods</h3>
            <p className="text-gray-600">We will deliver your goods with care, quality, and class.</p>
          </div>
        </div>

        {/* Recovery Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-1/2 max-w-sm">
          <img src="../../assets/recovery.jpg" alt="Recovery" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Recovery</h3>
            <p className="text-gray-600">We also alleviate your emergency difficulties with our 24-hour recovery vehicle service.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainServices;
