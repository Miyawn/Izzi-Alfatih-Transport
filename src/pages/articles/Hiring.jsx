// src/pages/Safety.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Hiring = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[640px]">
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-100"
          src="../src/assets/bghiring.png"
          alt="Safety Image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#6a6a6a] to-[#faf9f6] opacity-25" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-[#012169] text-center">
            We Are Hiring!
          </h1>
        </div>
      </div>

      {/* "Keselamatan bukan sekedar prioritas" Section */}
      <div className="pt-24 pb-6">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-[#012169] mb-4">
            Be one of our Driver!
          </h2>
        </div>
      </div>

      {/* Connected Images */}
      <div className="w-full flex justify-center items-center">
        <img
          className="w-2/6 object-cover"
          src="../src/assets/day6.png"
          alt="Left Part of Connected Image"
        />
        <img
          className="w-2/6 object-cover"
          src="../src/assets/izi.jpg"
          alt="Right Part of Connected Image"
        />
      </div>

      {/* "Job Deskripsi dan Qualification */}
      <div className="container mx-auto px-6 py-16 grid grid-cols-2 gap-8">
        <div>
          <h3 className="text-4xl font-bold text-[#012169] mb-4 ">Job Description</h3>
          <p className="text-lg text-gray-700">
            Menjadi driver bukan berarti paksaan bukan pula untuk pelarian tapi <br />
            dunia seni panggilan hati nurani. Mengantar barang menggunakan <br />
            truk dengan berkelas dan gelek cik. 
          </p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-[#012169] mb-4 pl-20">Qualifications</h3>
          <p className="text-lg text-gray-700 pl-20">
            1. Pria usia maksimal 50 tahun <br />
            2. Penidikan minimal SLTA/SMK/Sederajat<br />
            3. Memiliki SIM B2<br />
            4. Memiliki sertifikat sekolah mengemudi<br />
            5. Memiliki nyali yang keras bre<br />
            6. Bisa bela diri<br />
            7. Bisa bahasa jawa dan bisa nimbrung sama driver driver jawa
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="container mx-auto px-6 py-16 flex items-center">
        <div className="w-1/2">
          <h3 className="text-4xl font-bold text-[#012169] mb-4 pb-4">
            Send your applications to:
          </h3>
          <p className="text-lg text-gray-700 font-medium">
            izzialfatihtransport@gmail.com <br />
            <p className="text-lg text-gray-700 font-normal italic">subject: Driver_NamaAnda_Domisili</p>
          </p>
        </div>
        <div className="w-1/2">
          <img
            className="rounded-lg shadow-lg"
            src="../src/assets/hiring4.png"
            alt="Together for Safety"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Hiring;
