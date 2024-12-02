// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DriverPage = () => {
  return (
    <div>
      <Navbar />

      {/* Background Gradient and Image Section */}
      <div className="w-[1920px] h-[640px] relative">
        <div className="w-[1920px] h-[640px] left-0 top-0 absolute bg-gradient-to-t from-[#6a6a6a] to-[#faf9f6]" />
        <img className="w-[1920px] h-[640px] left-0 top-0 absolute opacity-20" src="https://via.placeholder.com/1920x640" />
      </div>

      {/* Main Content Section */}
      <div className="w-full py-16 px-6 bg-[#faf9f6]">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-[#012169]">Professionals and Specialists</h1>
          <p className="text-lg mt-4">We remember those who lost their lives on active service in all conflicts; from the beginning of the First World War right up to the present day. We also remember all those who have served and their families.</p>
        </div>

        {/* Centered Grid Section */}
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 gap-6 max-w-6xl">
            {/* Item 1 */}
            <div className="flex bg-white p-6 shadow-lg">
              <img className="w-[50%] h-auto object-cover mr-6" src="https://via.placeholder.com/585x780" alt="Image 1" />
              <div className="flex flex-col justify-center text-left">
                <div className="text-xl text-black">Izzi Alfatih</div>
                <p className="text-lg text-gray-500">Age 16 - Cuing</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex bg-white p-6 shadow-lg">
              <img className="w-[50%] h-auto object-cover mr-6" src="../src/assets/any2.png" alt="Image 2" />
              <div className="flex flex-col justify-center text-left">
                <div className="text-xl text-black">Tengku Rayhan Saputra</div>
                <p className="text-lg text-gray-500">Age 45 - Roblox</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex bg-white p-6 shadow-lg">
              <img className="w-[50%] h-auto object-cover mr-6" src="https://via.placeholder.com/585x780" alt="Image 3" />
              <div className="flex flex-col justify-center text-left">
                <div className="text-xl text-black">Muhammad Taufiqqurrahman</div>
                <p className="text-lg text-gray-500">Age 47 - Udin Petot</p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex bg-white p-6 shadow-lg">
              <img className="w-[50%] h-auto object-cover mr-6" src="https://via.placeholder.com/585x780" alt="Image 4" />
              <div className="flex flex-col justify-center text-left">
                <div className="text-xl text-black">Sheva Mantovany</div>
                <p className="text-lg text-gray-500">Age 33 - Beni</p>
              </div>
            </div>

            {/* Item 5 */}
            <div className="flex bg-white p-6 shadow-lg">
              <img className="w-[50%] h-auto object-cover mr-6" src="https://via.placeholder.com/585x780" alt="Image 5" />
              <div className="flex flex-col justify-center text-left">
                <div className="text-xl text-black">Syahrubi Alam Gaharu</div>
                <p className="text-lg text-gray-500">Age 37 - Cafe Racer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DriverPage;
