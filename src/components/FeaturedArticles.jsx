// src/components/FeaturedArticles.jsx
import React from 'react';

function FeaturedArticles() {
  const articles = [
    { title: 'Logistics Tips for Small Businesses', author: 'John Doe' },
    { title: 'The Future of Fleet Management', author: 'Jane Smith' },
    { title: 'How Technology is Transforming Logistics', author: 'David Johnson' },
  ];

  return (
    <section id="articles" className="my-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Featured Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div key={index} className="card shadow-lg p-6 bg-white">
            <h3 className="text-xl font-semibold">{article.title}</h3>
            <p className="text-sm text-gray-600">By {article.author}</p>
            <button className="btn btn-secondary mt-4">Read more</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedArticles;
