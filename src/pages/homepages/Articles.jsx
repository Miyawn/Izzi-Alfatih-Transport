// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom'; // Pastikan Link diimpor

const Articles = () => {
  // Daftar artikel
  const allArticles = [
    { title: 'We Are Hiring', summary: 'Be One of Our Driver!', imgSrc: '../src/assets/Russel_biru.png', link: '/article/hiring' },
    { title: 'Remembrance Day', summary: 'We Honour those who gave their lives to serve our country', imgSrc: '../src/assets/remembrance.png', link: '/article/remembrance' },
    { title: 'Safety Comes First', summary: 'Keselamatan bukan sekedar Prioritas Cik', imgSrc: '../src/assets/Air_Products.png', link: '/article/safety' },
  ];

  // Setiap halaman menampilkan 3 artikel
  const articlesPerPage = 3;

  // Hitung indeks awal dan akhir artikel pada halaman saat ini
  const indexOfLastArticle = articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;

  // Ambil artikel yang akan ditampilkan pada halaman ini
  const currentArticles = allArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  return (
    <section id="articles" className="bg-blue-900 py-16">
      <div className="container mx-auto text-white">
        <h3 className="text-3xl font-bold text-center mb-10">Featured Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentArticles.map((article, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg shadow-lg overflow-hidden group relative"
            >
              <img
                src={article.imgSrc}
                alt={article.title}
                className="w-full h-55 object-cover transition-all duration-300 group-hover:grayscale"
              />
              {/* Tombol View More dengan Link */}
              <div className="absolute inset-0 flex items-center justify-center translate-y-[-12.5%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link
                  to={article.link} // Menambahkan link rute untuk setiap artikel
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
    </section>
  );
};

export default Articles;
