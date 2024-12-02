// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Story = () => {
  // State untuk story yang aktif
  const [currentStory, setCurrentStory] = useState(0);
  const stories = [
    {
      title: "Our Story Remains After the Harsh Storm", // Judul dinamis untuk story pertama
      quote: '"Berhasil bertahan setelah masa pandemi adalah prestasi yang harus diingat dalam sejarah perusahaan ini cik"',
      author: "Izzi Alfatih",
      position: "Direktur Utama IAT",
      image: "../src/assets/izi.jpg", // Ganti dengan path gambar
    },
    {
      title: "How Safety is Viewed from Our Principle", // Judul dinamis untuk story kedua
      quote: '"Keselamatan Kerja pegawai lebih berharga dari materi apa pun"',
      author: "Chukwu Diaberemaduabum",
      position: "Manager Sumber Rejo Forest",
      image: "../src/assets/izi.jpg", // Ganti dengan path gambar lainnya
    },
    {
      title: "La Kompe has Spoken", // Judul dinamis untuk story pertama
      quote: '"Untuk Lebih baik adalah berubah, jadi untuk menjadi sangat baik adalah dengan berubah lebih sering dari yang lain"',
      author: "La Kompe",
      position: "Driver",
      image: "../src/assets/izi.jpg", // Ganti dengan path gambar
    },
    {
      title: "Our Journey Through the Storm", // Judul dinamis untuk story pertama
      quote: '"Berhasil bertahan setelah masa pandemi adalah prestasi yang harus diingat dalam sejarah perusahaan ini"',
      author: "Izzi Alfatih",
      position: "Direktur Utama IAT",
      image: "../src/assets/izi.jpg", // Ganti dengan path gambar
    },
    {
      title: "Our Journey Through the Storm", // Judul dinamis untuk story pertama
      quote: '"Berhasil bertahan setelah masa pandemi adalah prestasi yang harus diingat dalam sejarah perusahaan ini"',
      author: "Izzi Alfatih",
      position: "Direktur Utama IAT",
      image: "../src/assets/izi.jpg", // Ganti dengan path gambar
    },
    // Tambahkan cerita lainnya di sini
  ];

  // Fungsi untuk berpindah cerita
  const goToNextStory = () => {
    setCurrentStory((prevStory) => (prevStory + 1) % stories.length);
  };

  const goToPrevStory = () => {
    setCurrentStory((prevStory) =>
      prevStory === 0 ? stories.length - 1 : prevStory - 1
    );
  };

  return (
    <section className="h-[500px] bg-blue-900 text-white text-center relative flex flex-col justify-center">
      {/* Judul Dinamis */}
      <h2 className="text-4xl font-semibold mb-6">{stories[currentStory].title}</h2>

      {/* Kontainer Kutipan */}
      <div className="flex flex-col items-center max-w-3xl mx-auto px-4">
        {/* Foto Profil (Kotak dengan Rounded Corner) */}
        <img
          src={stories[currentStory].image} // Gambar dinamis berdasarkan story yang aktif
          alt={stories[currentStory].author}
          className="w-24 h-24 rounded-lg mb-6 object-cover"
        />

        {/* Kutipan */}
        <blockquote className="text-xl italic font-light mb-6 leading-relaxed">
          {stories[currentStory].quote}
        </blockquote>

        {/* Nama dan Jabatan */}
        <p className="text-lg font-medium">{stories[currentStory].author} - {stories[currentStory].position}</p>
      </div>

      {/* Tombol Navigasi */}
      <div className="absolute inset-0 flex justify-between items-center px-6">
        {/* Tombol Kiri */}
        <button
          onClick={goToPrevStory}
          className="w-12 h-12 flex items-center justify-center px-6 py-2 border border-white text-white rounded hover:bg-white hover:text-blue-900 rounded-lg hover:scale-110 transform transition-all duration-300"
          aria-label="Previous"
        >
          &#x276E; {/* Panah Kiri */}
        </button>

        {/* Tombol Kanan */}
        <button
          onClick={goToNextStory}
          className="w-12 h-12 flex items-center justify-center px-6 py-2 border border-white text-white rounded hover:bg-white hover:text-blue-900 rounded-lg hover:scale-110 transform transition-all duration-300"
          aria-label="Next"
        >
          &#x276F; {/* Panah Kanan */}
        </button>
      </div>
    </section>
  );
};

export default Story;
