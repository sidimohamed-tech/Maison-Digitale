import React from 'react';
import { motion } from 'framer-motion';
import { ClockIcon, CogIcon, ChartBarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const APropos = () => {
  const outils = [
    { name: "Bolt", description: "Développement rapide et moderne" },
    { name: "HubSpot", description: "CRM et automatisation marketing" },
    { name: "Make", description: "Intégrations et workflows" },
    { name: "Plausible", description: "Analytics respectueux de la vie privée" },
    { name: "Stripe", description: "Paiements sécurisés" },
    { name: "Crisp", description: "Support client en temps réel" }
  ];

  const valeurs = [
    {
      icon: ClockIcon,
      title: "Rapidité",
      description: "5 jours pour livrer un site complet, sans compromis sur la qualité."
    },
    {
      icon: CogIcon,
      title: "Simplicité",
      description: "Des solutions claires et efficaces, sans complexité inutile."
    },
    {
      icon: ChartBarIcon,
      title: "Performance",
      description: "Sites optimisés pour la conversion et les Core Web Vitals."
    },
    {
      icon: ShieldCheckIcon,
      title: "Conformité",
      description: "RGPD, accessibilité et bonnes pratiques respectées."
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
            À propos de Maison Digitale
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Nous créons des sites web performants pour les TPE/PME et indépendants, 
            livrés en 5 jours avec toutes les intégrations nécessaires.
          </motion.p>
        </div>

        {/* Mission */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="bg-blue-50 p-12 rounded-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Notre mission</h2>
            <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
              Démocratiser l'accès à des sites web professionnels pour les petites entreprises. 
              Nous croyons que chaque entrepreneur mérite une présence digitale de qualité, 
              sans les délais et la complexité habituels du web.
            </p>
          </div>
        </motion.section>

        {/* Méthode */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Notre méthode</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valeurs.map((valeur, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <valeur.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{valeur.title}</h3>
                <p className="text-gray-600">{valeur.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Outils */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Nos outils</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outils.map((outil, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{outil.name}</h3>
                <p className="text-gray-600">{outil.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Engagement */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="bg-gray-50 p-12 rounded-xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre engagement</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">5 jours</div>
                <p className="text-gray-600">Délai de livraison garanti</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">24h</div>
                <p className="text-gray-600">Réponse à votre devis</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
                <p className="text-gray-600">Itérations incluses</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Visuel simple */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-12 rounded-xl text-white">
            <h2 className="text-3xl font-bold mb-4">Prêt à démarrer ?</h2>
            <p className="text-xl mb-8 opacity-90">
              Rejoignez les entrepreneurs qui ont choisi la simplicité et l'efficacité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#devis"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200"
              >
                Obtenir un devis en 24h
              </a>
              <a 
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors duration-200"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default APropos;