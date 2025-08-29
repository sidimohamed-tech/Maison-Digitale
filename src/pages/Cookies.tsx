import React from 'react';
import { motion } from 'framer-motion';

const Cookies = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique des cookies</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Qu'est-ce qu'un cookie ?</h2>
              <p className="text-gray-700 mb-4">
                Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la visite d'un site web. Il permet de reconnaître votre navigateur et de collecter certaines informations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types de cookies utilisés</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cookies essentiels</h3>
                <p className="text-gray-700 mb-2">Ces cookies sont nécessaires au fonctionnement du site :</p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li><strong>Session :</strong> maintien de la session utilisateur</li>
                  <li><strong>Sécurité :</strong> protection contre les attaques CSRF</li>
                  <li><strong>Préférences :</strong> mémorisation de vos choix (langue, etc.)</li>
                </ul>
                <p className="text-gray-700 text-sm italic">
                  Ces cookies ne nécessitent pas votre consentement.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cookies analytiques</h3>
                <p className="text-gray-700 mb-2">Ces cookies nous aident à comprendre l'utilisation du site :</p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li><strong>Google Analytics 4 :</strong> statistiques de fréquentation</li>
                  <li><strong>Plausible :</strong> analytics respectueux de la vie privée</li>
                </ul>
                <p className="text-gray-700 text-sm italic">
                  Ces cookies nécessitent votre consentement.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cookies marketing</h3>
                <p className="text-gray-700 mb-2">Ces cookies permettent le suivi publicitaire :</p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li><strong>Meta Pixel :</strong> publicités Facebook/Instagram</li>
                  <li><strong>TikTok Pixel :</strong> publicités TikTok</li>
                </ul>
                <p className="text-gray-700 text-sm italic">
                  Ces cookies sont désactivés par défaut et nécessitent votre consentement.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cookies tiers</h3>
                <p className="text-gray-700 mb-2">Services externes intégrés :</p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li><strong>Crisp :</strong> widget de chat en direct</li>
                  <li><strong>HubSpot :</strong> formulaires et tracking</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Durée de conservation</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li><strong>Cookies de session :</strong> supprimés à la fermeture du navigateur</li>
                <li><strong>Cookies persistants :</strong> 13 mois maximum</li>
                <li><strong>Consentement cookies :</strong> 13 mois</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Gestion de vos préférences</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Via notre bannière</h3>
                <p className="text-gray-700 mb-4">
                  Lors de votre première visite, une bannière vous permet de choisir quels cookies accepter. Vous pouvez modifier vos préférences à tout moment en cliquant sur le lien "Gérer les cookies" en bas de page.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Via votre navigateur</h3>
                <p className="text-gray-700 mb-2">Vous pouvez configurer votre navigateur pour :</p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Accepter ou refuser tous les cookies</li>
                  <li>Être averti avant l'acceptation d'un cookie</li>
                  <li>Supprimer les cookies existants</li>
                </ul>
                
                <p className="text-gray-700 mb-2">Liens d'aide par navigateur :</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li><a href="https://support.google.com/chrome/answer/95647" className="text-blue-600 hover:text-blue-700" target="_blank" rel="noopener noreferrer">Chrome</a></li>
                  <li><a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies-preferences" className="text-blue-600 hover:text-blue-700" target="_blank" rel="noopener noreferrer">Firefox</a></li>
                  <li><a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" className="text-blue-600 hover:text-blue-700" target="_blank" rel="noopener noreferrer">Safari</a></li>
                  <li><a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-blue-600 hover:text-blue-700" target="_blank" rel="noopener noreferrer">Edge</a></li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Opt-out spécifiques</h2>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Google Analytics</h3>
                <p className="text-gray-700 mb-2">
                  Vous pouvez désactiver Google Analytics en installant le module complémentaire : 
                  <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:text-blue-700 ml-1" target="_blank" rel="noopener noreferrer">
                    Google Analytics Opt-out
                  </a>
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Plausible Analytics</h3>
                <p className="text-gray-700">
                  Plausible ne collecte aucune donnée personnelle et respecte le Do Not Track. Aucune action spécifique n'est nécessaire.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Conséquences du refus</h2>
              <p className="text-gray-700 mb-4">
                Le refus des cookies peut entraîner :
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Impossibilité d'utiliser certaines fonctionnalités</li>
                <li>Perte de vos préférences à chaque visite</li>
                <li>Affichage répété de la bannière de consentement</li>
                <li>Expérience utilisateur dégradée</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
              <p className="text-gray-700">
                Pour toute question relative aux cookies :<br />
                Email : contact@maisondigitale.fr<br />
                Téléphone : [Numéro de téléphone]
              </p>
              <p className="text-gray-700 mt-4 text-sm">
                <em>Dernière mise à jour : [Date]</em>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cookies;