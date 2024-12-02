// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Konten Utama */}
      <div>
        {/* Section Siapa Kita */}
        <div className="relative bg-[#faf9f6] h-[640px] flex items-center justify-center">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover bg-gray-100 opacity-35 z-0"
            src="../src/assets/Russel_biru.png"
            alt="Background"
          />
          <div className="absolute text-center">
            <h1 className="text-[#012169] text-6xl font-semibold">Siapa Kita? 😎🤙</h1>
          </div>
        </div>

        {/* Misi Kami */}
        <div className="bg-[#faf9f6] py-16">
          <div className="container mx-auto grid grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-[#012169] text-5xl font-bold mb-4">Misi Kami</h2>
              <p className="text-black text-xl font-semibold leading-snug">
                1. Menyelesaikan tantangan logistik yang dihadapi pelanggan <br />
                kami.<br />
                2. Mempertahankan posisi sebagai pemimpin dalam industri <br />
                transportasi.<br />
                3. Membangun reputasi sebagai perusahaan yang dikenal luas <br />
                dan terpercaya.<br />
                4. Meningkatkan keahlian dan pengalaman kami dalam sektor <br />
                transportasi.<br />
                5. Menjadi perusahaan yang tercatat di bursa saham.
              </p>
            </div>
            <div>
              <img
                className="w-full h-auto rounded-lg"
                src="../src/assets/transinsular.png"
                alt="Misi Kami"
              />
            </div>
          </div>
        </div>

        {/* Visi Kami dan Nilai Inti */}
        <div className="bg-[#faf9f6] py-16">
          <div className="container mx-auto grid grid-cols-2 gap-32">
            <div>
              <h2 className="text-[#012169] text-5xl font-bold mb-4">Visi Kami</h2>
              <p className="text-black text-xl font-medium leading-relaxed">
                Perusahaan transportasi yang terpadu dengan tujuan melayani <br />
                kebutuhan logistik pelanggan kami dan menyediakan pelayanan <br />
                terbaik untuk para pelanggan.
              </p>
            </div>
            <div>
              <h2 className="text-[#012169] text-5xl font-bold mb-4">Nilai Inti Kami</h2>
              <p className="text-black text-xl font-medium leading-relaxed">
                Seluruh insan Izzi Alfatih Transport menerapkan 5 hal ini:<br />
                1. Sigma<br />
                2. Kerja sama<br />
                3. Tangguh<br />
                4. Berkelas<br />
                5. Istirahat
              </p>
            </div>
          </div>
        </div>

        {/* Sejarah Kami */}
        <div className="bg-[#faf9f6] py-16">
          <h2 className="text-[#012169] text-4xl font-bold text-left mb-8 pl-48">Sejarah Kami</h2>
          <div className="container mx-auto grid grid-cols-3 gap-8">
            <img
              className="w-full h-auto rounded-lg border-2 border-[#012169]"
              src="../src/assets/r23.png"
              alt="History 1"
            />
            <img
              className="w-full h-auto rounded-lg border-2 border-[#012169]"
              src="../src/assets/r24.png"
              alt="History 2"
            />
            <img
              className="w-full h-auto rounded-lg border-2 border-[#012169]"
              src="../src/assets/r25.png"
              alt="History 3"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;
