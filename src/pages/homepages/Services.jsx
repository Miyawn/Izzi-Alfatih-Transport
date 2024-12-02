// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom'; // Pastikan React Router digunakan

const Services = () => {
  const services = [
    {
      title: 'Deliver Goods',
      description: 'We will deliver your goods with care, quality, and class.',
      imgSrc: '../src/assets/iatv8.png',
      link: '/services/delivergoods',
    },
    {
      title: 'Recovery',
      description: '24-hour recovery vehicles service for emergencies.',
      imgSrc: '../src/assets/recovery.png',
      link: '/services/recovery',
    },
  ];

  return (
    <section
      className="relative bg-cover bg-center min-h-screen py-16"
      style={{ backgroundImage: 'url(/src/assets/schmitz.png)' }}
    >
      {/* Overlay untuk background dengan opacity */}
      <div className="absolute inset-0 bg-gray-400 opacity-55 z-0"></div>

      {/* Konten Utama */}
      <div className="container mx-auto px-4 relative z-10 items-center justify-center min-h-screen pt-48">
        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl mb-12 text-black font-semibold">
          <span className="text-blue-900">Our main</span> services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg shadow-lg overflow-hidden group relative"
            >
              <div className="relative">
                <img
                  src={service.imgSrc}
                  alt={service.title}
                  className="w-full h-80 object-cover transition-all duration-300 group-hover:grayscale"
                />
                {/* Tombol View More */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    to={service.link}
                    className="px-6 py-2 border border-white text-white rounded hover:bg-white hover:text-blue-900 transition"
                  >
                    View More
                  </Link>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
