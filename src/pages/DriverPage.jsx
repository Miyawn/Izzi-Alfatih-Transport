// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DriverPage = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div className="relative w-full h-[1000px]">
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-100"
          src="../src/assets/kel5-4.jpg"
          alt="Safety Image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#292828] to-[#faf9f6] opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center">
            Our Professional & Skilled{' '}
            <span className="relative group">
              <span className="text-black group-hover:opacity-0 transition-opacity duration-300">
                Racist
              </span>
              <span className="absolute inset-0 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-6xl">
                Driver
              </span>
            </span>
          </h1>
        </div>
      </div>

      {/* Main Content Section */} 
      <div className="w-full py-16 px-6 bg-[#faf9f6]">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-[#012169]">Professionals and Specialists</h1>  
        </div>

        {/* Centered Grid Section */}
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 gap-6 max-w-6xl">
            {/* Item 1 */}
            <div className="flex bg-white p-6 shadow-lg">
              <div className="w-[50%] mr-6 relative">
                <img
                  className="w-full h-auto object-cover aspect-[3/4]"
                  src="../src/assets/izzidriver.jpg"
                  alt="Image 1"
                />
              </div>
              <div className="flex flex-col justify-center text-left">
                <div className="text-xl text-black">Muhammad Izzi Alfatih</div>
                <p className="text-lg text-gray-500">Age 20 - Cuing</p>
                <p className="text-lg text-gray-500">
                  Skill : <br />
                  1. Memancing <br />
                  2. Ngik Ngik <br />
                  3. Silat <br />
                  4. Survival <br />
                  5. Ultraman Gaia
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex bg-white p-6 shadow-lg">
              <div className="w-[50%] mr-6 relative">
                <img
                  className="w-full h-auto object-cover aspect-[3/4]"
                  src="../src/assets/safety3.jpg"
                  alt="Image 2"
                />
              </div>
              <div className="flex flex-col justify-center text-left">
                <div className="text-xl text-black">Tengku Rayhan Saputra</div>
                <p className="text-lg text-gray-500">Age 20 - Miyawn</p>
                <p className="text-lg text-gray-500">
                  Skill : <br />
                  1. Tuning Keyboard <br />
                  2. Bleyer Bleyer <br />
                  3. Lepas part motor bisa, masang kaga <br />
                  4. Yin Yang Overturn <br />
                  5. Midlaner
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex bg-white p-6 shadow-lg">
              <div className="w-[50%] mr-6 relative">
                <img
                  className="w-full h-auto object-cover aspect-[3/4]"
                  src="../src/assets/topikdriver.jpg"
                  alt="Image 3"
                />
              </div>
              <div className="flex flex-col justify-center text-left">
                <div className="text-xl text-black">Muhammad Taufiqqurrahman Angela</div>
                <p className="text-lg text-gray-500">Age 21 - Udin Petot</p>
                <p className="text-lg text-gray-500">
                  Skill : <br />
                  1. Smart Heart <br />
                  2. Loves Waves <br />
                  3. Puppet on a String <br />
                  4. Heartguard <br />
                  5. Wind of Nature
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex bg-white p-6 shadow-lg">
              <div className="w-[50%] mr-6 relative">
                <img
                  className="w-full h-auto object-cover aspect-[3/4]"
                  src="../src/assets/sepadriver.jpg"
                  alt="Image 4"
                />
              </div>
              <div className="flex flex-col justify-center text-left">
                <div className="text-xl text-black">Muhammad Sheva Mantovany</div>
                <p className="text-lg text-gray-500">Age 20 - Sheva Visual Studio Code</p>
                <p className="text-lg text-gray-500">
                  Skill : <br />
                  1. Rabona <br />
                  2. Flip-Flop <br />
                  3. Rainbow Flick <br />
                  4. Double Touch <br />
                  5. Night Vision
                </p>
              </div>
            </div>

            {/* Item 5 */}
            <div className="flex bg-white p-6 shadow-lg">
              <div className="w-[50%] mr-6 relative">
                <img
                  className="w-full h-auto object-cover aspect-[3/4]"
                  src="../src/assets/rubidriver.jpg"
                  alt="Image 5"
                />
              </div>
              <div className="flex flex-col justify-center text-left">
                <div className="text-xl text-black">Syahrubi Alam Bahari</div>
                <p className="text-lg text-gray-500">Age 20 - Cafe Racer</p>
                <p className="text-lg text-gray-500">
                  Skill : <br />
                  1. Nyupir 5 jam anti oleng <br />
                  2. Seset kanan <br />
                  3. Survival <br />
                  4. Kamen Rider Den O <br />
                  5. Ngopi anti jebol
                </p>
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
