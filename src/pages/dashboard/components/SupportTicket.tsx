
import { useState } from 'react';

export default function SupportTicket() {
  const [activeTab, setActiveTab] = useState('nouveau');
  const [tickets, setTickets] = useState([
    {
      id: 'T-2024-001',
      sujet: 'Question sur dossier CAPE',
      statut: 'En cours',
      priorite: 'Normale',
      dateCreation: '2024-01-15',
      derniereReponse: '2024-01-16',
      messages: [
        {
          id: 1,
          auteur: 'Client',
          message: 'Bonjour, j\'aimerais savoir où en est mon dossier CAPE-2024-0123. Merci.',
          date: '2024-01-15 14:30',
          type: 'client'
        },
        {
          id: 2,
          auteur: 'Support',
          message: 'Bonjour, votre dossier est actuellement en cours de traitement par nos services. Nous vous tiendrons informé sous 48h.',
          date: '2024-01-16 09:15',
          type: 'support'
        }
      ]
    },
    {
      id: 'T-2024-002',
      sujet: 'Modification coordonnées',
      statut: 'Résolu',
      priorite: 'Faible',
      dateCreation: '2024-01-10',
      derniereReponse: '2024-01-12',
      messages: [
        {
          id: 1,
          auteur: 'Client',
          message: 'Je souhaite modifier mon adresse email dans mon profil.',
          date: '2024-01-10 16:20',
          type: 'client'
        },
        {
          id: 2,
          auteur: 'Support',
          message: 'Modification effectuée. Vous recevrez un email de confirmation.',
          date: '2024-01-12 10:30',
          type: 'support'
        }
      ]
    }
  ]);

  const [nouveauTicket, setNouveauTicket] = useState({
    sujet: '',
    categorie: '',
    priorite: 'normale',
    message: ''
  });

  const [ticketSelectionne, setTicketSelectionne] = useState<string | null>(null);
  const [nouvelleReponse, setNouvelleReponse] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNouveauTicketSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 1500));

    const nouveauId = `T-${new Date().getFullYear()}-${String(tickets.length + 1).padStart(3, '0')}`;
    const ticket = {
      id: nouveauId,
      sujet: nouveauTicket.sujet,
      statut: 'Ouvert',
      priorite: nouveauTicket.priorite === 'normale' ? 'Normale' : 
                nouveauTicket.priorite === 'urgente' ? 'Urgente' : 'Faible',
      dateCreation: new Date().toISOString().split('T')[0],
      derniereReponse: new Date().toISOString().split('T')[0],
      messages: [{
        id: 1,
        auteur: 'Client',
        message: nouveauTicket.message,
        date: new Date().toLocaleString('fr-FR'),
        type: 'client' as const
      }]
    };

    setTickets(prev => [ticket, ...prev]);
    setNouveauTicket({ sujet: '', categorie: '', priorite: 'normale', message: '' });
    setIsSubmitting(false);
    setActiveTab('mes-tickets');
  };

  const handleReponseSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketSelectionne || !nouvelleReponse.trim()) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));

    setTickets(prev => prev.map(ticket => {
      if (ticket.id === ticketSelectionne) {
        return {
          ...ticket,
          messages: [...ticket.messages, {
            id: ticket.messages.length + 1,
            auteur: 'Client',
            message: nouvelleReponse,
            date: new Date().toLocaleString('fr-FR'),
            type: 'client' as const
          }],
          derniereReponse: new Date().toISOString().split('T')[0],
          statut: 'En cours'
        };
      }
      return ticket;
    }));

    setNouvelleReponse('');
    setIsSubmitting(false);
  };

  const getStatutColor = (statut: string) => {
    switch (statut) {
      case 'Ouvert':
        return 'bg-blue-100 text-blue-800';
      case 'En cours':
        return 'bg-yellow-100 text-yellow-800';
      case 'Résolu':
        return 'bg-green-100 text-green-800';
      case 'Fermé':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPrioriteColor = (priorite: string) => {
    switch (priorite) {
      case 'Urgente':
        return 'bg-red-100 text-red-800';
      case 'Normale':
        return 'bg-blue-100 text-blue-800';
      case 'Faible':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Support</h1>
        <p className="text-gray-600">
          Créez un ticket de support ou consultez vos demandes existantes
        </p>
      </div>

      {/* Onglets */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('nouveau')}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'nouveau'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Nouveau ticket
          </button>
          <button
            onClick={() => setActiveTab('mes-tickets')}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'mes-tickets'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Mes tickets ({tickets.length})
          </button>
        </nav>
      </div>

      {/* Nouveau ticket */}
      {activeTab === 'nouveau' && (
        <div className="bg-white rounded-lg shadow-sm p-8">
          <form onSubmit={handleNouveauTicketSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet *
                </label>
                <input
                  type="text"
                  value={nouveauTicket.sujet}
                  onChange={(e) => setNouveauTicket(prev => ({ ...prev, sujet: e.target.value }))}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Résumez votre demande en quelques mots"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Catégorie *
                </label>
                <select
                  value={nouveauTicket.categorie}
                  onChange={(e) => setNouveauTicket(prev => ({ ...prev, categorie: e.target.value }))}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
                >
                  <option value="">Sélectionner une catégorie</option>
                  <option value="dossier-cape">Dossier CAPE</option>
                  <option value="dossier-garderie">Dossier Garderie</option>
                  <option value="compte">Problème de compte</option>
                  <option value="technique">Problème technique</option>
                  <option value="information">Demande d'information</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Priorité
              </label>
              <div className="flex space-x-4">
                {[
                  { value: 'faible', label: 'Faible' },
                  { value: 'normale', label: 'Normale' },
                  { value: 'urgente', label: 'Urgente' }
                ].map(option => (
                  <label key={option.value} className="flex items-center">
                    <input
                      type="radio"
                      name="priorite"
                      value={option.value}
                      checked={nouveauTicket.priorite === option.value}
                      onChange={(e) => setNouveauTicket(prev => ({ ...prev, priorite: e.target.value }))}
                      className="mr-2"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description détaillée *
              </label>
              <textarea
                value={nouveauTicket.message}
                onChange={(e) => setNouveauTicket(prev => ({ ...prev, message: e.target.value }))}
                required
                rows={6}
                maxLength={500}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Décrivez votre problème ou votre demande en détail..."
              />
              <p className="text-sm text-gray-500 mt-1">
                {nouveauTicket.message.length}/500 caractères
              </p>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
              >
                {isSubmitting && (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                )}
                <span>{isSubmitting ? 'Création...' : 'Créer le ticket'}</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Mes tickets */}
      {activeTab === 'mes-tickets' && (
        <div className="space-y-6">
          {tickets.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-customer-service-line text-2xl text-gray-400"></i>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun ticket</h3>
              <p className="text-gray-600">Vous n'avez pas encore créé de ticket de support.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Liste des tickets */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm">
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-900">Vos tickets</h3>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {tickets.map(ticket => (
                      <div
                        key={ticket.id}
                        onClick={() => setTicketSelectionne(ticket.id)}
                        className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                          ticketSelectionne === ticket.id ? 'bg-blue-50 border-r-2 border-blue-500' : ''
                        }`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <span className="text-sm font-medium text-gray-900">{ticket.id}</span>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatutColor(ticket.statut)}`}>
                            {ticket.statut}
                          </span>
                        </div>
                        <h4 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                          {ticket.sujet}
                        </h4>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{ticket.dateCreation}</span>
                          <span className={`px-2 py-1 rounded-full ${getPrioriteColor(ticket.priorite)}`}>
                            {ticket.priorite}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Détail du ticket */}
              <div className="lg:col-span-2">
                {ticketSelectionne ? (
                  <div className="bg-white rounded-lg shadow-sm">
                    {(() => {
                      const ticket = tickets.find(t => t.id === ticketSelectionne);
                      if (!ticket) return null;

                      return (
                        <>
                          <div className="p-6 border-b border-gray-200">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h3 className="text-lg font-semibold text-gray-900">{ticket.sujet}</h3>
                                <p className="text-sm text-gray-600">Ticket #{ticket.id}</p>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatutColor(ticket.statut)}`}>
                                  {ticket.statut}
                                </span>
                                <span className={`px-3 py-1 text-sm font-medium rounded-full ${getPrioriteColor(ticket.priorite)}`}>
                                  {ticket.priorite}
                                </span>
                              </div>
                            </div>
                            <div className="text-sm text-gray-600">
                              <p>Créé le {ticket.dateCreation} • Dernière réponse le {ticket.derniereReponse}</p>
                            </div>
                          </div>

                          <div className="p-6 max-h-96 overflow-y-auto">
                            <div className="space-y-4">
                              {ticket.messages.map(message => (
                                <div
                                  key={message.id}
                                  className={`flex ${message.type === 'client' ? 'justify-end' : 'justify-start'}`}
                                >
                                  <div className={`max-w-3/4 ${
                                    message.type === 'client'
                                      ? 'bg-blue-600 text-white'
                                      : 'bg-gray-100 text-gray-900'
                                  } rounded-lg p-4`}>
                                    <div className="flex items-center justify-between mb-2">
                                      <span className="text-sm font-medium">{message.auteur}</span>
                                      <span className={`text-xs ${
                                        message.type === 'client' ? 'text-blue-100' : 'text-gray-500'
                                      }`}>
                                        {message.date}
                                      </span>
                                    </div>
                                    <p className="text-sm">{message.message}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {ticket.statut !== 'Résolu' && ticket.statut !== 'Fermé' && (
                            <div className="p-6 border-t border-gray-200">
                              <form onSubmit={handleReponseSubmit} className="space-y-4">
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Votre réponse
                                  </label>
                                  <textarea
                                    value={nouvelleReponse}
                                    onChange={(e) => setNouvelleReponse(e.target.value)}
                                    rows={4}
                                    maxLength={500}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Tapez votre réponse..."
                                  />
                                  <p className="text-sm text-gray-500 mt-1">
                                    {nouvelleReponse.length}/500 caractères
                                  </p>
                                </div>
                                <div className="flex justify-end">
                                  <button
                                    type="submit"
                                    disabled={isSubmitting || !nouvelleReponse.trim()}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
                                  >
                                    {isSubmitting && (
                                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    )}
                                    <span>{isSubmitting ? 'Envoi...' : 'Envoyer'}</span>
                                  </button>
                                </div>
                              </form>
                            </div>
                          )}
                        </>
                      );
                    })()}
                  </div>
                ) : (
                  <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-message-3-line text-2xl text-gray-400"></i>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Sélectionnez un ticket</h3>
                    <p className="text-gray-600">Cliquez sur un ticket à gauche pour voir les détails et répondre.</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
