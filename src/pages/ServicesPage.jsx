// src/pages/DeliverGoods.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom"; // Make sure to import Link

const ServicesPage = () => {
  return (
    <div>
      <Navbar />
      {/* Services Section */}
      <div className="container mx-auto py-40 px-6">
        <h1 className="text-4xl font-semibold mb-10 text-left"><span className="text-blue-900 font-bold">Our</span> <span className="text-black">Services </span></h1>
        <div className="grid gap-10">
          {/* Service Item 1 */}
          <div className="relative flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden group">
            <img
              src="../../src/assets/iatv8.png"
              alt="Truck"
              className="w-full lg:w-1/2 h-full object-cover group-hover:grayscale transition-all duration-300"
            />
            <div className="p-8 lg:w-1/2">
              <h2 className="text-5xl font-bold mb-4 text-center mt-6 text-black">Deliver Goods</h2>
              <p className="text-xl font-semibold mb-4 text-center mt-6 text-black">
                We will deliver your goods with care, quality, and class.
              </p>
              {/* Hover button */}
              <div className="absolute inset-0 flex items-center justify-start pl-72 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link
                  to="/services/delivergoods" // Update the link to the appropriate service detail page
                  className="px-12 py-2 border border-white text-white rounded hover:bg-white hover:text-blue-900 transition"
                >
                  View More
                </Link>
              </div>
            </div>
          </div>
          {/* Service Item 2 */}
          <div className="relative flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden group">
            <img
              src="../../src/assets/alf34pl.png"
              alt="Truck"
              className="w-full lg:w-1/2 h-full object-cover group-hover:grayscale transition-all duration-300"
            />
            <div className="p-8 lg:w-1/2">
              <h2 className="text-5xl font-bold mb-4 text-center mt-6 text-black">Recovery</h2>
              <p className="text-xl font-semibold mb-4 text-center mt-6 text-black">
                We will recover your goods with utmost care.
              </p>
              {/* Hover button */}
              <div className="absolute inset-0 flex items-center justify-start pl-72 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link
                  to="/services/recovery" // Update the link to the appropriate service detail page
                  className="px-12 py-2 border border-white text-white rounded hover:bg-white hover:text-blue-900 transition"
                >
                  View More
                </Link>
              </div>
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
