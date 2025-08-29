import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Offres = () => {
  const offres = [
    {
      title: "Artisans",
      subtitle: "Site 1-page + Devis rapide",
      description: "Captez les urgences et demandes qualifiées : bouton appel/WhatsApp, formulaire court relié à HubSpot, FAQ claire.",
      price: "À partir de 1 200 €",
      href: "/offres/artisans",
      features: [
        "Site vitrine 1-page optimisé",
        "Formulaire de devis rapide",
        "Boutons appel/WhatsApp",
        "Intégration HubSpot",
        "SEO local optimisé"
      ]
    },
    {
      title: "Kiné/Ostéo & Coachs",
      subtitle: "Site + RDV + Rappels",
      description: "Spécialités/douleurs, bio, RDV (Cal.com/Calendly), rappels email/SMS, disclaimer santé.",
      price: "À partir de 1 300 €",
      href: "/offres/kine-coachs",
      features: [
        "Présentation des spécialités",
        "Système de prise de RDV",
        "Rappels automatiques",
        "Bio et certifications",
        "Disclaimer santé"
      ]
    },
    {
      title: "Événementiel",
      subtitle: "LP + Configurateur devis",
      description: "Capacités, équipements, galerie, Configurateur devis (date, nb pers., budget) → envoi PDF auto.",
      price: "À partir de 1 400 €",
      href: "/offres/evenementiel",
      features: [
        "Galerie photos/vidéos",
        "Configurateur de devis",
        "Génération PDF automatique",
        "Présentation des capacités",
        "Formulaire de contact"
      ]
    },
    {
      title: "Formateurs/Infopreneurs",
      subtitle: "Page de vente + Paiement",
      description: "Promesse, programme, preuves, Stripe Checkout, emails d'abandon (J+1/J+3).",
      price: "À partir de 1 500 €",
      href: "/offres/formateurs",
      features: [
        "Page de vente optimisée",
        "Intégration Stripe",
        "Emails d'abandon",
        "Témoignages et preuves",
        "Programme détaillé"
      ]
    },
    {
      title: "Restaurants",
      subtitle: "Menu + Réservation/Commande",
      description: "Menu, photos, horaires, carte, réservation/commande (Stripe Links), rappel jour-J.",
      price: "À partir de 1 200 €",
      href: "/offres/restaurants",
      features: [
        "Menu interactif",
        "Système de réservation",
        "Commande en ligne",
        "Galerie photos plats",
        "Rappels automatiques"
      ]
    }
  ];

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
            Nos offres
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Chaque pack est spécialement conçu pour votre secteur d'activité, 
            avec les fonctionnalités essentielles pour convertir vos visiteurs en clients.
          </motion.p>
        </div>

        {/* Grille des offres */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {offres.map((offre, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{offre.title}</h2>
                <p className="text-blue-600 font-semibold text-lg mb-3">{offre.subtitle}</p>
                <p className="text-gray-600 mb-4">{offre.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Inclus dans cette offre :</h3>
                <ul className="space-y-2">
                  {offre.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <span className="text-lg font-semibold text-gray-900">{offre.price}</span>
                <Link 
                  to={offre.href}
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  Demander un devis
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 bg-blue-50 p-12 rounded-xl"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Votre secteur n'est pas listé ?
          </h2>
          <p className="text-gray-600 mb-6">
            Contactez-nous pour une solution sur mesure adaptée à vos besoins spécifiques.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Nous contacter
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Offres;