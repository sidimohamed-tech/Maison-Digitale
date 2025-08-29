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
  const [formData, setFormData] = useState<BriefFormData>({
    nom: "",
    societe: "",
    email: "",
    siteActuel: "",
    niche: "",
    objectif: "",
    delai: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const niches = [
    { value: "", label: "Sélectionnez votre secteur" },
    { value: "artisans", label: "Artisans" },
    { value: "kine-coachs", label: "Kiné/Ostéo & Coachs" },
    { value: "evenementiel", label: "Événementiel" },
    { value: "formateurs", label: "Formateurs/Infopreneurs" },
    { value: "restaurants", label: "Restaurants" },
    { value: "autre", label: "Autre" },
  ];

  const delais = [
    { value: "", label: "Sélectionnez votre délai" },
    { value: "urgent", label: "Urgent (< 1 semaine)" },
    { value: "1-2-semaines", label: "1-2 semaines" },
    { value: "1-mois", label: "Dans le mois" },
    { value: "flexible", label: "Flexible" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Validation
    if (!formData.nom || !formData.email || !formData.niche) {
      setError("Veuillez remplir tous les champs obligatoires.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulation d'envoi vers Make/HubSpot
      const response = await fetch("[WEBHOOK_URL]", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          type: "brief",
          page: "/contact",
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);

        // Tracking event
        if (window.dataLayer) {
          window.dataLayer.push({
            event: "brief_submit",
            event_category: "form",
            page: "/contact",
          });
        }
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
          {/* Coordonnées */}
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

          {/* Formulaire Brief Express */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            {isSubmitted ? (
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Merci !
                </h3>
                <p className="text-gray-600">
                  Nous avons bien reçu votre brief. Vous recevrez une réponse
                  sous 24h.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Brief express
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="nom"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      required
                      value={formData.nom}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="societe"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Société
                    </label>
                    <input
                      type="text"
                      id="societe"
                      name="societe"
                      value={formData.societe}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="siteActuel"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Site actuel ?
                    </label>
                    <input
                      type="url"
                      id="siteActuel"
                      name="siteActuel"
                      value={formData.siteActuel}
                      onChange={handleChange}
                      placeholder="https://..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="niche"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Secteur d'activité *
                    </label>
                    <select
                      id="niche"
                      name="niche"
                      required
                      value={formData.niche}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {niches.map((niche) => (
                        <option key={niche.value} value={niche.value}>
                          {niche.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="delai"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Délai souhaité
                    </label>
                    <select
                      id="delai"
                      name="delai"
                      value={formData.delai}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {delais.map((delai) => (
                        <option key={delai.value} value={delai.value}>
                          {delai.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="objectif"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Objectif principal
                  </label>
                  <input
                    type="text"
                    id="objectif"
                    name="objectif"
                    value={formData.objectif}
                    onChange={handleChange}
                    placeholder="Ex: Générer plus de leads, vendre en ligne, prendre des RDV..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Décrivez votre projet, vos besoins spécifiques..."
                  />
                </div>

                {error && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                    {error}
                  </div>
                )}

                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le brief"}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
