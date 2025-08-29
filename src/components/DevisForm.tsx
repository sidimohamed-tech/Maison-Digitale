import React, { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

interface FormData {
  nom: string;
  societe: string;
  email: string;
  telephone: string;
  niche: string;
  budget: string;
  urgence: string;
  message: string;
  consentement: boolean;
  marketing: boolean;
}

const DevisForm = ({ prefilledNiche = '' }: { prefilledNiche?: string }) => {
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    societe: '',
    email: '',
    telephone: '',
    niche: prefilledNiche,
    budget: '',
    urgence: '',
    message: '',
    consentement: false,
    marketing: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const niches = [
    { value: '', label: 'Sélectionnez votre secteur' },
    { value: 'artisans', label: 'Artisans' },
    { value: 'kine-coachs', label: 'Kiné/Ostéo & Coachs' },
    { value: 'evenementiel', label: 'Événementiel' },
    { value: 'formateurs', label: 'Formateurs/Infopreneurs' },
    { value: 'restaurants', label: 'Restaurants' }
  ];

  const budgets = [
    { value: '', label: 'Sélectionnez votre budget' },
    { value: '≤1k', label: '≤ 1 000 €' },
    { value: '1-1.5k', label: '1 000 - 1 500 €' },
    { value: '1.5-2k', label: '1 500 - 2 000 €' },
    { value: '2k+', label: '2 000 € +' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Validation
    if (!formData.nom || !formData.email || !formData.niche || !formData.consentement) {
      setError('Veuillez remplir tous les champs obligatoires.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulation d'envoi vers Make/HubSpot
      const response = await fetch('[WEBHOOK_URL]', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type: 'devis',
          page: window.location.pathname
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        
        // Tracking event
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'lead_submit',
            event_category: 'form',
            page: window.location.pathname,
            niche: formData.niche,
            budget: formData.budget,
            urgence: formData.urgence
          });
        }
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-sm text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckIcon className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Merci !</h3>
        <p className="text-gray-600">
          Vous recevrez une réponse sous 24h.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
            Nom *
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            required
            value={formData.nom}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="societe" className="block text-sm font-medium text-gray-700 mb-2">
            Société
          </label>
          <input
            type="text"
            id="societe"
            name="societe"
            value={formData.societe}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
            Téléphone
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="niche" className="block text-sm font-medium text-gray-700 mb-2">
            Secteur d'activité *
          </label>
          <select
            id="niche"
            name="niche"
            required
            value={formData.niche}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {niches.map(niche => (
              <option key={niche.value} value={niche.value}>
                {niche.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
            Budget
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {budgets.map(budget => (
              <option key={budget.value} value={budget.value}>
                {budget.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Urgence
        </label>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="urgence"
              value="oui"
              checked={formData.urgence === 'oui'}
              onChange={handleChange}
              className="mr-2"
            />
            Oui
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="urgence"
              value="non"
              checked={formData.urgence === 'non'}
              onChange={handleChange}
              className="mr-2"
            />
            Non
          </label>
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Décrivez votre projet..."
        />
      </div>

      <div className="mt-6 space-y-3">
        <label className="flex items-start">
          <input
            type="checkbox"
            name="consentement"
            required
            checked={formData.consentement}
            onChange={handleChange}
            className="mt-1 mr-3"
          />
          <span className="text-sm text-gray-600">
            J'accepte la <a href="/confidentialite" className="text-blue-600 hover:text-blue-700">politique de confidentialité</a> *
          </span>
        </label>

        <label className="flex items-start">
          <input
            type="checkbox"
            name="marketing"
            checked={formData.marketing}
            onChange={handleChange}
            className="mt-1 mr-3"
          />
          <span className="text-sm text-gray-600">
            J'accepte de recevoir des informations par email/SMS
          </span>
        </label>
      </div>

      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
          {error}
        </div>
      )}

      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          {isSubmitting ? 'Envoi en cours...' : 'Obtenir mon devis'}
        </button>
      </div>
    </form>
  );
};

export default DevisForm;