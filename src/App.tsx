import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import RecyclingProcess from './pages/RecyclingProcess';
import SupplyChain from './pages/SupplyChain';
import Gallery from './pages/Gallery';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import Contact from './pages/Contact';
import Trade from './pages/Trade';
import Pricing from './pages/Pricing';
import BlackMassCalculator from './pages/BlackMassCalculator';
import LoginPage from './pages/Login';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/recycling-process" element={<RecyclingProcess />} />
            <Route path="/supply-chain" element={<SupplyChain />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:slug" element={<ArticleDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/trade" element={<Trade />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/black-mass-calculator" element={<BlackMassCalculator />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
