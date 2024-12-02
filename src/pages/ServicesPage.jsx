// src/pages/DeliverGoods.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ServicesPage = () => {
  return (
    <div>
      <Navbar />
      {/* Services Section */}
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-4xl font-semibold text-center mb-10">Our Services</h1>
        <div className="grid gap-10">
          {/* Service Item */}
          <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="../../src/assets/delivergoods.png"
              alt="Truck"
              className="w-full lg:w-1/2 h-full object-cover"
            />
            <div className="p-8 lg:w-1/2">
              <h2 className="text-5xl font-bold mb-4 text-center mt-6">Deliver Goods</h2>
              <p className="text-xl font-semibold mb-4 text-center mt-6">
                We will deliver your goods with care, quality, and class.
              </p>
            </div>
          </div>
          {/* Another Service Item */}
          <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="../../src/assets/image 1.png"
              alt="Truck"
              className="w-full lg:w-1/2 h-full object-cover"
            />
            <div className="p-8 lg:w-1/2">
            <h2 className="text-5xl font-bold mb-4 text-center mt-6">Recovery</h2>
              <p className="text-xl font-semibold mb-4 text-center mt-6">
                We will deliver your goods with care, quality, and class.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ServicesPage;
