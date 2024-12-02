// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import NewsPage from './pages/NewsPage';
import SolutionsPage from './pages/SolutionsPage';
import Track from './pages/Track';
import RequestRate from './pages/RequestRate';
import ArticlePost from './pages/ArticlePost';
import DeliverGoods from './pages/services/DeliverGoods';
import Recovery from './pages/services/Recovery';

function App() {
  return (
    <Router>
      <div>
        {/* Routing untuk halaman-halaman */}
        <Routes>
          {/* Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} /> 
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path='/solutions' element={<SolutionsPage />} />

          {/* Page Routes */}
          <Route path="/track" element={<Track />} />
          <Route path="/requestrate" element={<RequestRate />} />
          <Route path="/post" element={<ArticlePost />} />
          <Route path="/services/delivergoods" element={<DeliverGoods />} />
          <Route path="/services/recovery" element={<Recovery />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
