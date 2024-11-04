// src/components/Services.jsx
import React from 'react';

const Services = () => (
  <section id="services" className="container mx-auto py-16">
    <h3 className="text-3xl font-bold text-center mb-10">Our main services</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="p-6 bg-gray-100 rounded-lg shadow">
        <img src="/service1.jpg" alt="Service 1" className="rounded mb-4"/>
        <h4 className="text-xl font-semibold">Service 1</h4>
        <p>Details about service 1</p>
      </div>
      <div className="p-6 bg-gray-100 rounded-lg shadow">
        <img src="/service2.jpg" alt="Service 2" className="rounded mb-4"/>
        <h4 className="text-xl font-semibold">Service 2</h4>
        <p>Details about service 2</p>
      </div>
    </div>
  </section>
);

export default Services;
