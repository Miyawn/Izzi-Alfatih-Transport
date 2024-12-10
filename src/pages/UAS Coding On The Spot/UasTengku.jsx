import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// src/pages/UasTengku.jsx

const UasTengku = () => {
    const [selectedProfile, setSelectedProfile] = useState(null);
  
    // Data anggota tim
    const teamMembers = [
      {
        id: 1,
        name: 'Muhammad Izzi Alfatih',
        role: 'UI/UX Designer',
        skills: ['Illustrator', 'Design', 'Figma'],
        photo: '../src/assets/izzidriver.jpg',
        description: 'Desainer UI/UX dengan fokus pada user experience yang optimal.',
        instagram: 'https://www.instagram.com/izzialfatih',
      },
      {
        id: 2,
        name: 'Tengku Rayhan Saputra',
        role: 'Frontend Developer, UI/UX Designer',
        skills: ['React', 'Figma', 'JavaScript', 'Tailwind'],
        photo: '../src/assets/safety3.jpg',
        description: 'Seorang pengembang frontend yang gemar membuat desain interaktif dan responsif.',
        instagram: 'https://www.instagram.com/tengkurayhann',
      },
      {
        id: 3,
        name: 'Muhammad Taufiqqurrahman',
        role: 'UI/UX Designer',
        skills: ['Illustrator', 'Design', 'Figma'],
        photo: '../src/assets/topikdriver.jpg',
        description: 'Desainer UI/UX dengan fokus pada user experience yang optimal.',
        instagram: 'https://www.instagram.com/mhmdtaufiq18_',
      },
      {
        id: 4,
        name: 'Syahrubi Alam Bahari',
        role: 'Project Manager',
        skills: ['Figma', 'Office', 'Prototyping'],
        photo: '../src/assets/rubidriver.jpg',
        description: 'Seorang QA yang teliti dalam menguji aplikasi untuk memastikan kualitasnya.',
        instagram: 'https://www.instagram.com/rubicoyyy',
      },
      {
        id: 5,
        name: 'Muhammad Sheva Mantovany',
        role: 'UI/UX Designer',
        skills: ['Illustrator', 'Design', 'Figma'],
        photo: '../src/assets/sepadriver.jpg',
        description: 'Desainer UI/UX dengan fokus pada user experience yang optimal.',
        instagram: 'https://www.instagram.com/shevalerrr',
      },
    ];
    
  
    return (
      <div>
        <Navbar />
        {/* Hero Section - Background image for the header */}
        <div className="bg-white w-full h-96 bg-cover bg-center" style={{ backgroundImage: 'url(../src/assets/kel5-4.jpg)' }}>
          <div className="flex items-center justify-center w-full h-full bg-white bg-opacity-50 text-white">
            <h1 className="text-4xl font-bold text-black">Meet the Developers</h1>
          </div>
        </div>
  
        {/* Profil Section */}
        <div className="w-full mx-auto py-16 px-6 space-y-8 bg-gray-100">
          {/* Baris Pertama - Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-4">
            {teamMembers.slice(0, 3).map((member) => (
              <div key={member.id} className="bg-white shadow-lg rounded-lg overflow-hidden group relative h-96 w-full lg:w-[500px] mx-auto">
                <img className="w-full h-56 object-cover" src={member.photo} alt={member.name} />
                <div className="p-6 text-center">
                  <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <p className="text-gray-800 mb-4">Skills: {member.skills.join(', ')}</p>
                  <div className="absolute inset-0 flex items-center justify-center translate-y-[-20%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => setSelectedProfile(member)}
                      className="px-6 py-2 border border-white text-white rounded hover:bg-white hover:text-blue-900 transition"
                    >
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Baris Kedua - Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-48">
            {teamMembers.slice(3).map((member) => (
              <div key={member.id} className="bg-white shadow-lg rounded-lg overflow-hidden group relative h-96 w-full lg:w-[500px] mx-auto">
                <img className="w-full h-56 object-cover" src={member.photo} alt={member.name} />
                <div className="p-6 text-center">
                  <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <p className="text-gray-800 mb-4">Skills: {member.skills.join(', ')}</p>
                  <div className="absolute inset-0 flex items-center justify-center translate-y-[-20%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => setSelectedProfile(member)}
                      className="px-6 py-2 border border-white text-white rounded hover:bg-white hover:text-blue-900 transition"
                    >
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

  
        {/* Modal */}
        {selectedProfile && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-lg w-full">
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">{selectedProfile.name}</h2>
                <p className="text-gray-600 mb-4">{selectedProfile.description}</p>
                {selectedProfile.instagram && (
                  <a
                    href={selectedProfile.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-500 hover:text-blue-700 transition"
                  >
                    <img
                      className="w-6 h-6 mr-2"
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                      alt="Instagram"
                    />
                    Instagram
                  </a>
                )}
                <button
                  onClick={() => setSelectedProfile(null)}
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

  
        <Footer />
      </div>
    );
};
  
export default UasTengku;
