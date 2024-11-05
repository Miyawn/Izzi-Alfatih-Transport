import React from 'react';

const Anywhere = () => {
  return (
    <section className="py-16 bg-blue-100">
      <h2 className="text-center text-3xl font-bold mb-8">Anywhere, Anytime, Anything You Want</h2>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
        <div className="bg-white rounded shadow p-4">
          <img src="/path/to/image3.jpg" alt="Image 1" className="w-full h-40 object-cover rounded" />
        </div>
        <div className="bg-white rounded shadow p-4">
          <img src="/path/to/image4.jpg" alt="Image 2" className="w-full h-40 object-cover rounded" />
        </div>
      </div>
    </section>
  );
};

export default Anywhere;
