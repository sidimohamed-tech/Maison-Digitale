import React from 'react';
import { CheckIcon, ClockIcon, PhoneIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import DevisForm from '../../components/DevisForm';

const OffreArtisans = () => {
  const inclus = [
    "Site vitrine 1-page responsive",
    "Formulaire de devis rapide",
    "Boutons appel/WhatsApp visibles",
    "Intégration HubSpot complète",
    "SEO local optimisé",
    "Galerie de réalisations",
    "Témoignages clients"
  ];

  const processSteps = [
    { day: "J1", title: "Kick-off sans appel", description: "Brief et contenus" },
    { day: "J2", title: "Design & copies", description: "Maquettes et textes" },
    { day: "J3", title: "Intégration & formulaires", description: "Développement et HubSpot" },
    { day: "J4", title: "Automations & QA", description: "Tests et automatisations" },
    { day: "J5", title: "Mise en ligne", description: "Livraison et formation" }
  ];

  const faq = [
    {
      question: "Le site fonctionne-t-il sur mobile ?",
      answer: "Oui, le site est entièrement responsive et optimisé pour tous les appareils (mobile, tablette, desktop)."
    },
    {
      question: "Puis-je modifier le contenu après livraison ?",
      answer: "Oui, nous vous formons à la gestion du contenu et vous avez accès à un panneau d'administration simple."
    },
    {
      question: "Les formulaires sont-ils sécurisés ?",
      answer: "Absolument. Tous les formulaires sont sécurisés, conformes RGPD et reliés directement à votre HubSpot."
    },
    {
      question: "Qu'est-ce qui est inclus dans le SEO local ?",
      answer: "Optimisation des balises, schema.org LocalBusiness, Google My Business, mots-clés locaux et structure technique."
    },
    {
      question: "Combien de révisions sont incluses ?",
      answer: "Deux itérations complètes sont incluses dans le prix pour s'assurer que le site correspond parfaitement à vos attentes."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              Site 1-page + devis rapide pour artisans
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto"
            >
              Captez les urgences et demandes qualifiées. Formulaire court relié à HubSpot, 
              bouton appel/WhatsApp, FAQ claire.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="flex items-center space-x-2 text-lg">
                <PhoneIcon className="h-6 w-6 text-green-600" />
                <span className="font-semibold text-gray-900">Urgence 24/7</span>
              </div>
              <div className="flex items-center space-x-2 text-lg">
                <ChatBubbleLeftRightIcon className="h-6 w-6 text-blue-600" />
                <span className="font-semibold text-gray-900">WhatsApp intégré</span>
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
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
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
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="bg-white p-8 rounded-xl inline-block mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">À partir de</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">1 200 €</div>
              <p className="text-gray-600">Site complet + intégrations</p>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Prêt à démarrer votre projet ?
            </h2>
            <a 
              href="#devis"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 text-lg"
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
              Parlez-nous de votre projet d'artisan
            </p>
          </div>
          <DevisForm prefilledNiche="artisans" />
        </div>
      </section>
    </div>
  );
};

export default OffreArtisans;