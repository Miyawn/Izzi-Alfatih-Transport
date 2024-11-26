import React from "react";

const Anywhere = () => {
  return (
    <section
      className="relative py-16 bg-cover bg-center"
      style={{
        backgroundImage: 'url("../src/assets/izi.jpg")', // Ganti dengan file latar belakang Anda
      }}
    >
      {/* Overlay Layer */}
      <div className="absolute inset-0 bg-gray-100 bg-opacity-60 z-0"></div>

      <div className="relative container mx-auto px-6 z-10">
        {/* Heading */}
        <div className="relative text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-medium text-blue-900">
            Anywhere, Anytime, Anything You Want
          </h2>
          {/* Subheading: Geser ke kanan */}
          <p className="top-12 text-lg md:text-2xl text-red-600 font-medium mt-2 md:mt-4">
            It’s fine by us
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          {/* Image 1 */}
          <div className="col-span-1 rounded-xl overflow-hidden shadow-lg">
            <img
              src="../src/assets/scaniaaa.jpg" // Ganti dengan file gambar
              alt="Desert Road"
              className="object-cover"
              style={{ height: "700px", width: "2000px" }} // Atur tinggi dan lebar secara bebas
            />
          </div>
          {/* Image 2 */}
          <div className="col-span-1 rounded-xl overflow-hidden shadow-lg">
            <img
              src="../src/assets/720s.png" // Ganti dengan file gambar
              alt="Snowy Road"
              className="object-cover"
              style={{ height: "700px", width: "2000px" }} // Atur tinggi dan lebar secara bebas
            />
          </div>
          {/* Image 3 */}
          <div className="col-span-1 rounded-xl overflow-hidden shadow-lg">
            <img
              src="../src/assets/720s.png" // Ganti dengan file gambar
              alt="City Road"
              className="object-cover"
              style={{ height: "700px", width: "2000px" }} // Atur tinggi dan lebar secara bebas
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Anywhere;
