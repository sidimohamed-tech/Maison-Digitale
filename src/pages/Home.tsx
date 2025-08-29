import React from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon, ClockIcon, CogIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import DevisForm from '../components/DevisForm';

const Home = () => {
  const preuves = [
    { text: "Délai standard : 5 jours", icon: ClockIcon },
    { text: "Intégration HubSpot incluse", icon: CogIcon },
    { text: "RGPD & performance soignées", icon: ShieldCheckIcon }
  ];

  const packs = [
    {
      title: "Artisans",
      subtitle: "Site 1-page + Devis rapide",
      description: "Captez les urgences et demandes qualifiées",
      href: "/offres/artisans",
      price: "À partir de 1 200 €"
    },
    {
      title: "Kiné/Ostéo & coachs",
      subtitle: "Site + RDV + Rappels",
      description: "Spécialités, bio, prise de RDV automatisée",
      href: "/offres/kine-coachs",
      price: "À partir de 1 300 €"
    },
    {
      title: "Événementiel",
      subtitle: "LP + Configurateur devis",
      description: "Capacités, galerie, devis automatique",
      href: "/offres/evenementiel",
      price: "À partir de 1 400 €"
    },
    {
      title: "Formateurs/Infopreneurs",
      subtitle: "Page de vente + Paiement",
      description: "Promesse, programme, Stripe intégré",
      href: "/offres/formateurs",
      price: "À partir de 1 500 €"
    },
    {
      title: "Restaurants",
      subtitle: "Menu + Réservation/Commande",
      description: "Menu, photos, réservation en ligne",
      href: "/offres/restaurants",
      price: "À partir de 1 200 €"
    }
  ];

  const processSteps = [
    { day: "J1", title: "Kick-off sans appel", description: "Brief et contenus" },
    { day: "J2", title: "Design & copies", description: "Maquettes et textes" },
    { day: "J3", title: "Build & formulaires", description: "Développement et intégrations" },
    { day: "J4", title: "Automations & QA", description: "Tests et automatisations" },
    { day: "J5", title: "Mise en ligne", description: "Livraison et formation" }
  ];

  const demos = [
    {
      title: "Démo Artisan",
      subtitle: "Urgence 24/7",
      image: "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=400",
      href: "/demos"
    },
    {
      title: "Démo Événementiel",
      subtitle: "Salle + configurateur",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400",
      href: "/demos"
    }
  ];

  const faq = [
    {
      question: "Qu'inclut l'offre ?",
      answer: "Deux itérations, SEO de base, intégration HubSpot, emails/SMS transactionnels."
    },
    {
      question: "Hébergement ?",
      answer: "Au choix : Framer/Webflow ou hébergement statique."
    },
    {
      question: "RGPD ?",
      answer: "Formulaires minimisés, consentement, DPA avec nos prestataires."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Sites web en 5 jours
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Des sites clairs, rapides et orientés conversion. Formulaire relié à HubSpot, 
              emails/SMS de confirmation et analytics propres — sans bla-bla.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a 
                href="#devis"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200 text-lg"
              >
                Obtenir un devis en 24h
              </a>
              <Link 
                to="/demos"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-200 text-lg"
              >
                Voir nos démos
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Preuves rapides */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {preuves.map((preuve, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center space-x-3 p-6 bg-gray-50 rounded-xl"
              >
                <preuve.icon className="h-6 w-6 text-blue-600" />
                <span className="font-medium text-gray-900">{preuve.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos 5 packs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nos 5 packs
            </h2>
            <p className="text-xl text-gray-600">
              Chaque pack adapté à votre secteur d'activité
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packs.map((pack, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pack.title}</h3>
                <p className="text-blue-600 font-semibold mb-3">{pack.subtitle}</p>
                <p className="text-gray-600 mb-6">{pack.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">{pack.price}</span>
                  <Link 
                    to={pack.href}
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Découvrir l'offre →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process 5 jours */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Process "5 jours"
            </h2>
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

      {/* Démos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nos réalisations
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {demos.map((demo, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <img 
                  src={demo.image} 
                  alt={`Capture d'écran ${demo.title}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{demo.title}</h3>
                  <p className="text-gray-600 mb-4">{demo.subtitle}</p>
                  <Link 
                    to={demo.href}
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Voir la démo →
                  </Link>
                </div>
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

      {/* CTA Final */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Parlons de votre site. Livraison en 5 jours, devis en 24h.
          </h2>
          <a 
            href="#devis"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 text-lg"
          >
            Obtenir un devis en 24h
          </a>
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
              Parlez-nous de votre projet, nous vous répondons rapidement
            </p>
          </div>
          <DevisForm />
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Maison Digitale",
            "url": "https://www.maisondigitale.fr",
            "logo": "https://www.maisondigitale.fr/assets/logo.png",
            "description": "Agence de création de sites web livrés en 5 jours. Formulaires reliés à HubSpot, emails/SMS transactionnels, analytics clairs.",
            "sameAs": []
          })
        }}
      />
    </div>
  );
};

export default Home;