import React from 'react';

const Services = () => {
  return (
    <section className="relative bg-cover bg-center h-screen flex items-center" style={{ backgroundImage: 'url(/src/assets/IAT_Scania.png)' }}>
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      
      <h2 className="text-center text-3xl font-bold mb-8">Our main services</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div className="bg-white text-black p-6 rounded shadow">
          <img src="../src/assets/IAT_Scania.png" alt="Service 1" className="w-full h-40 object-cover rounded mb-4" />
          <h3 className="text-xl font-bold">Service 1</h3>
          <p>Service 1 description goes here.</p>
        </div>
        <div className="bg-white text-black p-6 rounded shadow">
          <img src="../src/assets/Honka.png" alt="Service 2" className="w-full h-40 object-cover rounded mb-4" />
          <h3 className="text-xl font-bold">Service 2</h3>
          <p>Service 2 description goes here.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
