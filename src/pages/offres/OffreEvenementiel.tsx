import React from 'react';
import { CheckIcon, PhotoIcon, DocumentTextIcon, CogIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import DevisForm from '../../components/DevisForm';

const OffreEvenementiel = () => {
  const inclus = [
    "Présentation des capacités et équipements",
    "Galerie photos/vidéos professionnelle",
    "Configurateur de devis interactif",
    "Génération PDF automatique",
    "Formulaire de contact qualifié",
    "Témoignages et références",
    "Intégration réseaux sociaux"
  ];

  const processSteps = [
    { day: "J1", title: "Kick-off sans appel", description: "Brief et contenus" },
    { day: "J2", title: "Design & copies", description: "Maquettes et galerie" },
    { day: "J3", title: "Intégration & configurateur", description: "Développement et PDF" },
    { day: "J4", title: "Automations & QA", description: "Tests et automatisations" },
    { day: "J5", title: "Mise en ligne", description: "Livraison et formation" }
  ];

  const faq = [
    {
      question: "Comment fonctionne le configurateur de devis ?",
      answer: "Le client sélectionne date, nombre de personnes, type d'événement et services. Un PDF de devis est généré automatiquement."
    },
    {
      question: "Puis-je personnaliser les tarifs dans le configurateur ?",
      answer: "Oui, vous gérez tous vos tarifs et options via votre interface d'administration en temps réel."
    },
    {
      question: "La galerie peut-elle inclure des vidéos ?",
      answer: "Absolument. Nous intégrons photos haute qualité et vidéos de vos événements précédents."
    },
    {
      question: "Le PDF de devis est-il personnalisé ?",
      answer: "Oui, le PDF reprend votre identité visuelle avec logo, coordonnées et conditions commerciales."
    },
    {
      question: "Puis-je suivre les demandes de devis ?",
      answer: "Toutes les demandes sont centralisées dans HubSpot avec suivi automatique et relances programmées."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              LP + Configurateur devis pour l'Événementiel
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto"
            >
              Capacités, équipements, galerie, Configurateur devis (date, nb pers., budget) → envoi PDF auto.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="flex items-center space-x-2 text-lg">
                <PhotoIcon className="h-6 w-6 text-purple-600" />
                <span className="font-semibold text-gray-900">Galerie immersive</span>
              </div>
              <div className="flex items-center space-x-2 text-lg">
                <CogIcon className="h-6 w-6 text-blue-600" />
                <span className="font-semibold text-gray-900">Configurateur intelligent</span>
              </div>
              <div className="flex items-center space-x-2 text-lg">
                <DocumentTextIcon className="h-6 w-6 text-green-600" />
                <span className="font-semibold text-gray-900">PDF automatique</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ce qui est inclus
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inclus.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl"
              >
                <CheckIcon className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-900">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Délai & Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Délai & Process
            </h2>
            <p className="text-xl text-gray-600">
              Votre site livré en 5 jours ouvrés
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {step.day}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Questions fréquentes
            </h2>
          </div>
          <div className="space-y-6">
            {faq.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prix & CTA */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="bg-white p-8 rounded-xl inline-block mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">À partir de</h3>
              <div className="text-4xl font-bold text-purple-600 mb-2">1 400 €</div>
              <p className="text-gray-600">Site complet + configurateur</p>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Prêt à automatiser vos devis ?
            </h2>
            <a 
              href="#devis"
              className="inline-block bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 text-lg"
            >
              Obtenir un devis en 24h
            </a>
          </motion.div>
        </div>
      </section>

      {/* Formulaire Devis */}
      <section id="devis" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Devis en 24h
            </h2>
            <p className="text-xl text-gray-600">
              Parlez-nous de votre activité événementielle
            </p>
          </div>
          <DevisForm prefilledNiche="evenementiel" />
        </div>
      </section>
    </div>
  );
};

export default OffreEvenementiel;