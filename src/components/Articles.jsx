// src/components/Articles.jsx
import React from 'react';

const Articles = () => (
  <section id="articles" className="container mx-auto py-16">
    <h3 className="text-3xl font-bold text-center mb-10">Featured Articles</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="p-6 bg-white rounded-lg shadow">
        <img src="/article1.jpg" alt="Article 1" className="rounded mb-4"/>
        <h4 className="text-xl font-semibold">Article 1</h4>
        <p>Summary of article 1</p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow">
        <img src="/article2.jpg" alt="Article 2" className="rounded mb-4"/>
        <h4 className="text-xl font-semibold">Article 2</h4>
        <p>Summary of article 2</p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow">
        <img src="/article3.jpg" alt="Article 3" className="rounded mb-4"/>
        <h4 className="text-xl font-semibold">Article 3</h4>
        <p>Summary of article 3</p>
      </div>
    </div>
  </section>
);

export default Articles;
