import React from 'react';
import { motion } from 'framer-motion';

const Confidentialite = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique de confidentialité</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 mb-4">
                Maison Digitale s'engage à protéger la confidentialité de vos données personnelles. Cette politique explique comment nous collectons, utilisons et protégeons vos informations conformément au Règlement Général sur la Protection des Données (RGPD).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Responsable du traitement</h2>
              <p className="text-gray-700">
                <strong>Maison Digitale</strong><br />
                [Adresse complète]<br />
                Email : contact@maisondigitale.fr<br />
                Téléphone : [Numéro de téléphone]
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Données collectées</h2>
              <p className="text-gray-700 mb-4">Nous collectons les données suivantes :</p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li><strong>Données d'identification :</strong> nom, prénom, société</li>
                <li><strong>Données de contact :</strong> adresse email, numéro de téléphone</li>
                <li><strong>Données professionnelles :</strong> secteur d'activité, besoins spécifiques</li>
                <li><strong>Données de navigation :</strong> adresse IP, cookies, pages visitées</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Base légale et finalités</h2>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Intérêt légitime</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Répondre à vos demandes de devis et de contact</li>
                  <li>Améliorer nos services et notre site web</li>
                  <li>Analyser l'utilisation de notre site</li>
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Consentement</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Envoi de communications marketing (newsletters, offres)</li>
                  <li>Utilisation de cookies non essentiels</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Exécution du contrat</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Livraison de nos services</li>
                  <li>Facturation et suivi client</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Partage des données</h2>
              <p className="text-gray-700 mb-4">Nous partageons vos données avec :</p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li><strong>HubSpot :</strong> CRM et automatisation marketing (DPA signé)</li>
                <li><strong>Make :</strong> Automatisation des workflows (DPA signé)</li>
                <li><strong>Brevo :</strong> Envoi d'emails transactionnels (DPA signé)</li>
                <li><strong>Crisp :</strong> Support client en temps réel (DPA signé)</li>
              </ul>
              <p className="text-gray-700">
                Tous nos prestataires sont situés dans l'UE ou disposent de garanties appropriées pour les transferts internationaux.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Durée de conservation</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li><strong>Prospects :</strong> 3 ans après le dernier contact</li>
                <li><strong>Clients :</strong> 10 ans après la fin du contrat (obligations comptables)</li>
                <li><strong>Données de navigation :</strong> 13 mois maximum</li>
                <li><strong>Cookies :</strong> selon leur type (voir politique cookies)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Vos droits</h2>
              <p className="text-gray-700 mb-4">Vous disposez des droits suivants :</p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
                <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
                <li><strong>Droit à l'effacement :</strong> supprimer vos données</li>
                <li><strong>Droit à la limitation :</strong> limiter le traitement</li>
                <li><strong>Droit à la portabilité :</strong> récupérer vos données</li>
                <li><strong>Droit d'opposition :</strong> vous opposer au traitement</li>
                <li><strong>Droit de retrait du consentement :</strong> à tout moment</li>
              </ul>
              <p className="text-gray-700">
                Pour exercer vos droits, contactez-nous à : contact@maisondigitale.fr
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sécurité</h2>
              <p className="text-gray-700">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre la perte, l'utilisation abusive, l'accès non autorisé, la divulgation, l'altération ou la destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Réclamations</h2>
              <p className="text-gray-700">
                Si vous estimez que le traitement de vos données ne respecte pas la réglementation, vous pouvez introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) : <a href="https://www.cnil.fr" className="text-blue-600 hover:text-blue-700">www.cnil.fr</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
              <p className="text-gray-700">
                Pour toute question relative à cette politique de confidentialité :<br />
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

export default Confidentialite;