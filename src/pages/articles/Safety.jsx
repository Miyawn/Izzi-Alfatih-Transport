// src/pages/Safety.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Safety = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[640px]">
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-100"
          src="../src/assets/bgsafety.png"
          alt="Safety Image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#6a6a6a] to-[#faf9f6] opacity-25" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-[#012169] text-center">
            Safety Comes First
          </h1>
        </div>
      </div>

      {/* "Keselamatan bukan sekedar prioritas" Section */}
      <div className="pt-24 pb-6">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-[#012169] mb-4">
            Keselamatan bukan sekedar prioritas
          </h2>
        </div>
      </div>

      {/* Connected Images */}
      <div className="w-full flex justify-center items-center">
        <img
          className="w-2/6 object-cover"
          src="../src/assets/seago.png"
          alt="Left Part of Connected Image"
        />
        <img
          className="w-2/6 object-cover"
          src="../src/assets/seago.png"
          alt="Right Part of Connected Image"
        />
      </div>

      {/* "Komitmen Kami" dan "Mengapa Penting?" Section */}
      <div className="container mx-auto px-6 py-16 grid grid-cols-2 gap-8">
        <div>
          <h3 className="text-4xl font-bold text-[#012169] mb-4 ">Komitmen Kami</h3>
          <p className="text-lg text-gray-700">
            Kami percaya setiap perjalanan harus dimulai dengan rasa peduli dan <br />
             tanggung jawab. Mulai dari memastikan truk kami memenuhi standar <br />
              keselamatan tertinggi hingga melatih pengemudi dengan teknik <br />
               berkendara defensif, kami selalu mengutamakan keselamatan.
          </p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-[#012169] mb-4 pl-20">Mengapa Penting?</h3>
          <p className="text-lg text-gray-700 pl-20">
            1. Melindungi nyawa di jalan.<br />
            2. Menjaga barang kiriman agar aman dan sampai tepat waktu.<br />
            3. Membangun kepercayaan dengan klien dan masyarakat.
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="container mx-auto px-6 py-16 flex items-center">
        <div className="w-1/2">
          <h3 className="text-4xl font-bold text-[#012169] mb-4">
            Bersama Kita Citakan Jalan yang <br />
            Lebih Aman!
          </h3>
          <p className="text-lg text-gray-700">
            Jika Anda memiliki semangat untuk keselamatan dan kerja sama tim, <br />
            bergabunglah dengan kami sebagai pengemudi atau mitra. Bersama- <br />
            sama, kita dapat memastikan setiap perjalanan lebih aman dan sukses. <br />
            Utamakan keselamatan, berkendaralah dengan bijak, dan selalu ingat <br />
            bahwa keselamatan lebih penting daripada kecepatan!
          </p>
        </div>
        <div className="w-1/2">
          <img
            className="rounded-lg shadow-lg"
            src="../src/assets/safety4.png"
            alt="Together for Safety"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Safety;
