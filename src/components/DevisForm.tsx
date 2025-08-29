import React, { useEffect } from "react";

const DevisForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js-eu1.hsforms.net/forms/embed/146812609.js";
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Demande de devis
      </h2>
      {/* Formulaire HubSpot intégré */}
      <div
        className="hs-form-frame"
        data-region="eu1"
        data-form-id="3436dc14-f097-42cf-97a4-405398667343"
        data-portal-id="146812609"
      ></div>
    </div>
  );
};

export default DevisForm;
