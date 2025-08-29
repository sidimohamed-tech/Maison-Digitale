import React from 'react';
import { motion } from 'framer-motion';

const MentionsLegales = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Mentions légales</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Éditeur du site</h2>
              <p className="text-gray-700 mb-4">
                <strong>Maison Digitale</strong><br />
                [Forme juridique]<br />
                [Adresse complète]<br />
                [Code postal] [Ville]<br />
                France
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Téléphone :</strong> [Numéro de téléphone]<br />
                <strong>Email :</strong> contact@maisondigitale.fr
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Numéro SIRET :</strong> [Numéro SIRET]<br />
                <strong>TVA Intracommunautaire :</strong> [Numéro TVA]
              </p>
              <p className="text-gray-700">
                <strong>Directeur de la publication :</strong> [Nom du directeur]
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hébergement</h2>
              <p className="text-gray-700">
                Ce site est hébergé par :<br />
                <strong>[Nom de l'hébergeur]</strong><br />
                [Adresse de l'hébergeur]<br />
                [Code postal] [Ville]<br />
                [Pays]<br />
                Téléphone : [Numéro de téléphone de l'hébergeur]
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Propriété intellectuelle</h2>
              <p className="text-gray-700 mb-4">
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p className="text-gray-700">
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Responsabilité</h2>
              <p className="text-gray-700 mb-4">
                Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.
              </p>
              <p className="text-gray-700">
                Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email, à l'adresse contact@maisondigitale.fr, en décrivant le problème de la manière la plus précise possible.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Liens hypertextes</h2>
              <p className="text-gray-700 mb-4">
                Les sites internet peuvent offrir des liens vers d'autres sites internet ou d'autres ressources disponibles sur Internet. Maison Digitale ne dispose d'aucun moyen pour contrôler les sites en connexion avec ses sites internet.
              </p>
              <p className="text-gray-700">
                Maison Digitale ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit. Elle ne peut être tenue pour responsable de tout dommage, de quelque nature que ce soit, résultant du contenu de ces sites ou sources externes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Droit applicable</h2>
              <p className="text-gray-700">
                Tant le présent site que les modalités et conditions de son utilisation sont régis par le droit français, quel que soit le lieu d'utilisation. En cas de contestation éventuelle, et après l'échec de toute tentative de recherche d'une solution amiable, les tribunaux français seront seuls compétents pour connaître de ce litige.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
              <p className="text-gray-700">
                Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter :
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Par email : contact@maisondigitale.fr</li>
                <li>Par téléphone : [Numéro de téléphone]</li>
                <li>Par courrier à l'adresse mentionnée ci-dessus</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MentionsLegales;