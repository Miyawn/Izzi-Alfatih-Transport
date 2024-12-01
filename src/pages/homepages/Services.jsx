// eslint-disable-next-line no-unused-vars
import React from 'react';

const Services = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center py-16"
      style={{ backgroundImage: 'url(/src/assets/schmitz.png)' }}
    >
      {/* Overlay untuk background dengan opacity */}
      <div className="absolute inset-0 bg-gray-400 opacity-55 z-0"></div>

      {/* Konten Utama */}
      <div className="container mx-auto px-4 relative z-10"> {/* z-10 untuk memastikan konten di atas overlay */}
        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl mb-12 text-black font-semibold">
          <span className="text-blue-900">Our main</span> services
        </h2>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 1 */}
          <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
            <img
              src="../src/assets/iatv8.png"
              alt="Deliver Goods"
              className="w-full h-100 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold">Deliver Goods</h3>
              <p className="mt-2">
                We will deliver your goods with care, quality, and class.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
            <img
              src="../src/assets/recovery.png"
              alt="Recovery"
              className="w-full h-100 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold">Recovery</h3>
              <p className="mt-2">
                We also alleviate your emergency difficulties with our 24-hour recovery vehicles service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
