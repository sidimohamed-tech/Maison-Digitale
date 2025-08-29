import React from 'react';
import { CheckIcon, CreditCardIcon, EnvelopeIcon, TrophyIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import DevisForm from '../../components/DevisForm';

const OffreFormateurs = () => {
  const inclus = [
    "Page de vente optimisée pour la conversion",
    "Intégration Stripe Checkout complète",
    "Emails d'abandon automatiques (J+1/J+3)",
    "Section témoignages et preuves sociales",
    "Programme détaillé et bénéfices",
    "FAQ spécialisée formation",
    "Garantie et politique de remboursement"
  ];

  const processSteps = [
    { day: "J1", title: "Kick-off sans appel", description: "Brief et contenus" },
    { day: "J2", title: "Design & copies", description: "Page de vente optimisée" },
    { day: "J3", title: "Intégration & paiement", description: "Stripe et automatisations" },
    { day: "J4", title: "Emails & QA", description: "Séquences d'abandon et tests" },
    { day: "J5", title: "Mise en ligne", description: "Livraison et formation" }
  ];

  const faq = [
    {
      question: "Comment fonctionne l'intégration Stripe ?",
      answer: "Paiement sécurisé en un clic, gestion automatique des factures, remboursements et abonnements si nécessaire."
    },
    {
      question: "Que sont les emails d'abandon ?",
      answer: "Si un visiteur commence un achat sans finaliser, il reçoit automatiquement des emails de relance à J+1 et J+3."
    },
    {
      question: "Puis-je vendre plusieurs formations ?",
      answer: "Oui, nous pouvons créer une page par formation ou une page catalogue selon vos besoins."
    },
    {
      question: "Les témoignages sont-ils intégrés ?",
      answer: "Nous intégrons vos témoignages existants et créons une section dédiée aux preuves sociales."
    },
    {
      question: "Y a-t-il un suivi des ventes ?",
      answer: "Toutes les ventes sont trackées dans HubSpot avec analytics détaillés et rapports de conversion."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              Page de vente + Paiement pour Formateurs/Infopreneurs
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto"
            >
              Promesse, programme, preuves, Stripe Checkout, emails d'abandon (J+1/J+3).
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="flex items-center space-x-2 text-lg">
                <TrophyIcon className="h-6 w-6 text-orange-600" />
                <span className="font-semibold text-gray-900">Conversion optimisée</span>
              </div>
              <div className="flex items-center space-x-2 text-lg">
                <CreditCardIcon className="h-6 w-6 text-green-600" />
                <span className="font-semibold text-gray-900">Paiement Stripe</span>
              </div>
              <div className="flex items-center space-x-2 text-lg">
                <EnvelopeIcon className="h-6 w-6 text-blue-600" />
                <span className="font-semibold text-gray-900">Emails d'abandon</span>
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
              Votre page de vente livrée en 5 jours ouvrés
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
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
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
      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="bg-white p-8 rounded-xl inline-block mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">À partir de</h3>
              <div className="text-4xl font-bold text-orange-600 mb-2">1 500 €</div>
              <p className="text-gray-600">Page de vente + paiement</p>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Prêt à vendre vos formations en ligne ?
            </h2>
            <a 
              href="#devis"
              className="inline-block bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 text-lg"
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
              Parlez-nous de vos formations à vendre
            </p>
          </div>
          <DevisForm prefilledNiche="formateurs" />
        </div>
      </section>
    </div>
  );
};

export default OffreFormateurs;