// eslint-disable-next-line no-unused-vars
import React from "react";

const TransportSolutions = () => {
  return (
    <section className="relative bg-cover bg-center py-16" style={{ backgroundImage: 'url(/src/assets/russell.png)' }}>
      {/* Overlay Layer */}
      <div className="absolute inset-0 bg-gray-700 opacity-75 z-0"></div>

      <div className="relative container mx-auto px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="flex flex-col items-start justify-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-medium text-white leading-snug">
              Transport solutions for all 
              <br />
              <span className="text-white font-bold">Roads</span>
            </h2>
            <p className="text-white leading-relaxed">
              In-time delivery and a well-operation give us an advantage
              <br /> and our expert working group connects all the links of the
              <br /> domestic demand.
            </p>
            <button className="px-6 py-2 border border-white text-white rounded hover:bg-white hover:text-blue-900 transition">
              Read More
            </button>
          </div>
          {/* Right Image */}
          <div>
            <img
              src="../src/assets/IAT_Scania.png"
              alt="Truck on the road"
              className="rounded shadow-md"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="../src/assets/Air_Products.png"
              alt="Truck with trailer"
              className="rounded shadow-md max-w-full h-auto"
            />
          </div>
          
          {/* Right Section */}
          <div className="flex flex-col items-start justify-center space-y-6 text-left lg:pl-20 xl:pl-32">
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-snug">
              Key <span className="font-medium">information</span> <br />
              for investors and financial <br/> community
            </h2>
            <p className="text-white leading-relaxed">
              Our operations are global, covering more than 160 countries <br />
              in approximately 1,000 locations.
            </p>
            <button className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransportSolutions;
