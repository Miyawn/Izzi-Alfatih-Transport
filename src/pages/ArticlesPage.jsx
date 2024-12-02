// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'; // Pastikan untuk impor Link jika ingin menghubungkan artikel ke halaman detail

const ArticlesPage = () => {
  // Daftar artikel
  const articles = [
    { title: 'We Are Hiring', summary: 'Be One of Our Driver!', imgSrc: '../src/assets/Russel_biru.png', link: '/article/hiring' },
    { title: 'Remembrance Day', summary: 'We Honour those who gave their lives to serve our country', imgSrc: '../src/assets/remembrance.png', link: '/article/remembrance' },
    { title: 'Safety Comes First', summary: 'Keselamatan bukan sekedar Prioritas Cik', imgSrc: '../src/assets/Air_Products.png', link: '/article/safety' },
    // Artikel lainnya bisa ditambahkan di sini
  ];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto pt-32 pb-16 text-center"> {/* Mengurangi padding vertikal */}
        <h1 className="text-3xl font-bold mb-4">Articles</h1>
      </div>

      {/* Articles Grid Section */}
      <div className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-white text-black rounded-lg shadow-lg overflow-hidden group relative">
              <img
                src={article.imgSrc}
                alt={article.title}
                className="w-full h-60 object-cover transition-all duration-300 group-hover:grayscale"
              />
              {/* Tombol View More */}
              <div className="absolute inset-0 flex items-center justify-center translate-y-[-12.5%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link
                  to={article.link} // Link ke halaman detail artikel
                  className="px-6 py-2 border border-white text-white rounded hover:bg-white hover:text-blue-900 transition"
                >
                  View More
                </Link>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold">{article.title}</h3>
                <p className="mt-2">{article.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ArticlesPage;
