import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CrispChat from './components/CrispChat';
import CookieBanner from './components/CookieBanner';
import Home from './pages/Home';
import Offres from './pages/Offres';
import OffreArtisans from './pages/offres/OffreArtisans';
import OffreKineCoachs from './pages/offres/OffreKineCoachs';
import OffreEvenementiel from './pages/offres/OffreEvenementiel';
import OffreFormateurs from './pages/offres/OffreFormateurs';
import OffreRestaurants from './pages/offres/OffreRestaurants';
import Demos from './pages/Demos';
import APropos from './pages/APropos';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';
import Confidentialite from './pages/Confidentialite';
import Cookies from './pages/Cookies';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/offres" element={<Offres />} />
            <Route path="/offres/artisans" element={<OffreArtisans />} />
            <Route path="/offres/kine-coachs" element={<OffreKineCoachs />} />
            <Route path="/offres/evenementiel" element={<OffreEvenementiel />} />
            <Route path="/offres/formateurs" element={<OffreFormateurs />} />
            <Route path="/offres/restaurants" element={<OffreRestaurants />} />
            <Route path="/demos" element={<Demos />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/confidentialite" element={<Confidentialite />} />
            <Route path="/cookies" element={<Cookies />} />
          </Routes>
        </main>
        <Footer />
        <CrispChat />
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;