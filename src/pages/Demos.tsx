import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon } from '@heroicons/react/24/outline';

const Demos = () => {
  const demos = [
    {
      title: "Artisan Plombier",
      subtitle: "Urgence 24/7",
      description: "Site vitrine avec formulaire de devis rapide, boutons d'appel d'urgence et présentation des services.",
      image: "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Devis rapide", "Appel d'urgence", "Zone d'intervention", "Témoignages"],
      context: "Un plombier parisien souhaitait capter les urgences 24/7 et qualifier ses prospects.",
      solution: "Site 1-page avec formulaire court, boutons d'appel visibles et FAQ détaillée.",
      results: ["+150% de demandes qualifiées", "Temps de réponse < 2h", "Taux de conversion 12%"]
    },
    {
      title: "Salle de Réception",
      subtitle: "Configurateur de devis",
      description: "Landing page avec galerie immersive et configurateur automatique de devis événementiel.",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Galerie 360°", "Configurateur", "PDF automatique", "Calendrier dispo"],
      context: "Une salle de réception voulait automatiser ses devis et réduire les allers-retours.",
      solution: "Configurateur intelligent avec génération PDF automatique et calendrier de disponibilités.",
      results: ["80% de devis automatisés", "Gain de temps 5h/semaine", "Satisfaction client 95%"]
    },
    {
      title: "Coach Sportif",
      subtitle: "Prise de RDV automatisée",
      description: "Site professionnel avec système de réservation intégré et rappels automatiques.",
      image: "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Calendrier RDV", "Rappels SMS", "Programmes détaillés", "Témoignages vidéo"],
      context: "Un coach sportif perdait du temps en gestion administrative et relances clients.",
      solution: "Système de RDV automatisé avec rappels email/SMS et présentation des programmes.",
      results: ["90% de RDV confirmés", "Réduction no-show 70%", "Croissance CA +40%"]
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
            Nos réalisations
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Découvrez comment nos clients ont transformé leur présence digitale 
            et boosté leurs conversions en seulement 5 jours.
          </motion.p>
        </div>

        {/* Grille des démos */}
        <div className="space-y-20">
          {demos.map((demo, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={demo.image} 
                    alt={`Capture d'écran du site ${demo.title}`}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{demo.title}</h3>
                    <p className="text-sm opacity-90">{demo.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Contenu */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">{demo.title}</h2>
                    <p className="text-lg text-gray-600 mb-4">{demo.description}</p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {demo.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contexte */}
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-2">Contexte</h4>
                    <p className="text-gray-600 mb-4">{demo.context}</p>
                    
                    <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600">{demo.solution}</p>
                  </div>

                  {/* Résultats */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Résultats</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {demo.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="text-center p-4 bg-green-50 rounded-xl">
                          <div className="text-lg font-bold text-green-800">{result}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-20 bg-blue-50 p-12 rounded-xl"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Prêt pour des résultats similaires ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Rejoignez nos clients satisfaits et transformez votre activité en 5 jours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/#devis"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Obtenir un devis en 24h
            </a>
            <a 
              href="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              Discuter de mon projet
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Demos;