import React, { useEffect } from 'react';

const CrispChat = () => {
  useEffect(() => {
    // Configuration Crisp
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "[CRISP_WEBSITE_ID]"; // À remplacer par l'ID réel

    // Chargement du script Crisp
    const script = document.createElement('script');
    script.src = 'https://client.crisp.chat/l.js';
    script.async = true;
    document.head.appendChild(script);

    // Tracking de l'ouverture du chat
    window.$crisp.push(['on', 'chat:opened', () => {
      // Tracking event
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'chat_open',
          event_category: 'engagement',
          event_label: 'crisp_chat'
        });
      }
    }]);

    return () => {
      // Nettoyage si nécessaire
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
};

export default CrispChat;