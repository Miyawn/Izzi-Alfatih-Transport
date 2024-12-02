// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ArticlesPage from './pages/ArticlesPage';
import DriverPage from './pages/DriverPage';
import Track from './pages/Track';
import RequestRate from './pages/RequestRate';
import DeliverGoods from './pages/services/DeliverGoods';
import Recovery from './pages/services/Recovery';
import Hiring from './pages/articles/Hiring';
import Remembrance from './pages/articles/Remembrance';
import Safety from './pages/articles/Safety';

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
          <Route path='/article' element={<ArticlesPage />} />
          <Route path='/driver' element={<DriverPage />} />

          {/* Page Routes */}
          <Route path="/track" element={<Track />} />
          <Route path="/requestrate" element={<RequestRate />} />
          <Route path="/services/delivergoods" element={<DeliverGoods />} />
          <Route path="/services/recovery" element={<Recovery />} />

          {/* Page Articles */}
          <Route path="/article/hiring" element={<Hiring />} />
          <Route path="/article/remembrance" element={<Remembrance />} />
          <Route path="/article/safety" element={<Safety />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
