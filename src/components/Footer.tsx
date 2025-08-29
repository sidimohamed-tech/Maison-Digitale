import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/assets/ChatGPT Image 29 août 2025, 21_55_32.png" 
                alt="Logo Maison Digitale"
                className="h-8 w-auto filter brightness-0 invert"
              />
              <span className="text-xl font-bold">Maison Digitale</span>
            </div>
            <p className="text-gray-300 mb-4">
              Sites web en 5 jours. Des sites clairs, rapides et orientés conversion.
            </p>
            <p className="text-sm text-gray-400">
              Formulaires reliés à HubSpot, emails/SMS de confirmation et analytics propres.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/offres" className="text-gray-300 hover:text-white transition-colors">Offres</Link></li>
              <li><Link to="/demos" className="text-gray-300 hover:text-white transition-colors">Démos</Link></li>
              <li><Link to="/a-propos" className="text-gray-300 hover:text-white transition-colors">À propos</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="font-semibold mb-4">Légal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/mentions-legales" className="text-gray-300 hover:text-white transition-colors">Mentions légales</Link></li>
              <li><Link to="/confidentialite" className="text-gray-300 hover:text-white transition-colors">Confidentialité</Link></li>
              <li><Link to="/cookies" className="text-gray-300 hover:text-white transition-colors">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Maison Digitale. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;