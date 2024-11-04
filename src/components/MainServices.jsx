// src/components/MainServices.jsx
import React from 'react';

function MainServices() {
  const services = [
    { title: 'Warehouse Storage', description: 'Secure and organized storage solutions.' },
    { title: 'Fleet Management', description: 'Efficient fleet management services.' },
    { title: 'Logistics Planning', description: 'Comprehensive logistics planning.' },
  ];

  return (
    <section id="services" className="my-12 text-center">
      <h2 className="text-3xl font-bold mb-6">Our main services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="card shadow-lg p-6 bg-white">
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p>{service.description}</p>
            <button className="btn btn-primary mt-4">Read more</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MainServices;
