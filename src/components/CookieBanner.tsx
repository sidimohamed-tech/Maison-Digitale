import React, { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
    // Activer GA4 et autres trackers ici
    initializeTracking();
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  const initializeTracking = () => {
    // Initialisation GA4
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 mr-4">
            <p className="text-sm text-gray-600">
              Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic. 
              <a href="/cookies" className="text-blue-600 hover:text-blue-700 underline ml-1">
                En savoir plus
              </a>
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={declineCookies}
              className="text-sm text-gray-600 hover:text-gray-800 px-3 py-1 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Refuser
            </button>
            <button
              onClick={acceptCookies}
              className="text-sm bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Accepter
            </button>
            <button
              onClick={declineCookies}
              className="text-gray-400 hover:text-gray-600 p-1"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;