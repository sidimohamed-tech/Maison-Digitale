import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

interface BriefFormData {
  nom: string;
  societe: string;
  email: string;
  siteActuel: string;
  niche: string;
  objectif: string;
  delai: string;
  message: string;
}

const Contact = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js-eu1.hsforms.net/forms/embed/146812609.js";
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Contactez-nous
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Parlons de votre projet. Nous vous répondons sous 24h avec une
            proposition adaptée.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-blue-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Nos coordonnées
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <EnvelopeIcon className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a
                      href="mailto:contact@maisondigitale.fr"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      sidimed.sidimed.147@hotmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <ChatBubbleLeftRightIcon className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                    <a
                      href="https://wa.me/33123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700"
                    >
                      +33 6 46 13 92 65
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Chat en direct :</strong> Le widget Crisp est
                  disponible sur toutes les pages pour une réponse immédiate.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            {/* Formulaire HubSpot intégré */}
            <div
              className="hs-form-frame"
              data-region="eu1"
              data-form-id="3436dc14-f097-42cf-97a4-405398667343"
              data-portal-id="146812609"
            ></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
