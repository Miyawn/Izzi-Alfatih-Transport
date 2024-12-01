// src/pages/ArticlePost.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ArticlePost = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-semibold">Article Post Page</h1>
        <p>Content for the Article Post page will go here.</p>
      </div>
      <Footer />
    </div>
  );
};

export default ArticlePost;
