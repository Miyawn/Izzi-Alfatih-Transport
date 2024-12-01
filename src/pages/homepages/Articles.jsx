// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Articles = () => {
  // Daftar artikel
  const allArticles = [
    { title: 'Article 1', summary: 'Summary of article 1', imgSrc: '../src/assets/Russel_biru.png' },
    { title: 'Article 2', summary: 'Summary of article 2', imgSrc: '../src/assets/seago.png' },
    { title: 'Article 3', summary: 'Summary of article 3', imgSrc: '../src/assets/Air_Products.png' },
    { title: 'Article 4', summary: 'Summary of article 4', imgSrc: '../src/assets/Russel_biru.png' },
    { title: 'Article 5', summary: 'Summary of article 5', imgSrc: '../src/assets/seago.png' },
    { title: 'Article 6', summary: 'Summary of article 6', imgSrc: '../src/assets/Air_Products.png' },
    { title: 'Article 7', summary: 'Summary of article 7', imgSrc: '../src/assets/Russel_biru.png' },
    { title: 'Article 8', summary: 'Summary of article 8', imgSrc: '../src/assets/seago.png' },
    { title: 'Article 9', summary: 'Summary of article 9', imgSrc: '../src/assets/Air_Products.png' },
  ];

  // Setiap halaman menampilkan 3 artikel
  const articlesPerPage = 3;

  // State untuk halaman saat ini
  const [currentPage, setCurrentPage] = useState(1);

  // Hitung indeks awal dan akhir artikel pada halaman saat ini
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;

  // Ambil artikel yang akan ditampilkan pada halaman ini
  const currentArticles = allArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  // Fungsi untuk pindah ke halaman berikutnya atau sebelumnya
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
              {/* Tombol View More */}
              <div className="absolute inset-0 flex items-center justify-center translate-y-[-12.5%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="px-6 py-2 border border-white text-white rounded hover:bg-white hover:text-blue-900 transition">
                  View More
                </button>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold">{article.title}</h3>
                <p className="mt-2">{article.summary}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => paginate(currentPage - 1)}
            className={`px-4 py-2 mx-2 border rounded ${
              currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''
            }`}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="flex items-center justify-center px-4 py-2 mx-2">
            Page {currentPage}
          </span>
          <button
            onClick={() => paginate(currentPage + 1)}
            className={`px-4 py-2 mx-2 border rounded ${
              indexOfLastArticle >= allArticles.length
                ? 'cursor-not-allowed opacity-50'
                : ''
            }`}
            disabled={indexOfLastArticle >= allArticles.length}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Articles;
