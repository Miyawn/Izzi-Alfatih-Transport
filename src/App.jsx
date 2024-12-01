// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import LoginForm from './auth/Login';
import RegisterForm from './auth/Register';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import NewsPage from './pages/NewsPage';
import SolutionsPage from './pages/SolutionsPage';

function App() {
  return (
    <Router>
      <div>
        {/* Routing untuk halaman-halaman */}
        <Routes>
          {/* Auth */}
          <Route path='/Login' element={<LoginForm />} />
          <Route path='/Register' element={<RegisterForm />} />

          {/* Home */}
          <Route path="/" element={<Home />} />
          
          {/* Pages About */}
          <Route path="/About" element={<AboutPage />} /> 

          {/* Pages Services */}
          <Route path='/Services' element={<ServicesPage />} />

          {/* Pages News */}
          <Route path='/News' element={<NewsPage />} />

          {/* Pages Solutions */}
          <Route path='/Solutions' element={<SolutionsPage />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
