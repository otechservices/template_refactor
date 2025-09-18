
import React, { useState } from 'react';
import Card from '../../components/base/Card';
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import Badge from '../../components/base/Badge';

const mockTickets = [
  {
    id: 'TICK-001',
    titre: 'Problème de connexion au système',
    description: 'Impossible de se connecter depuis ce matin',
    statut: 'Ouvert',
    priorite: 'Haute',
    dateCreation: '2024-01-20 09:30',
    derniereReponse: '2024-01-20 10:45',
    assigneA: 'Support Technique'
  },
  {
    id: 'TICK-002',
    titre: 'Erreur lors de l\'export de données',
    description: 'Le fichier Excel généré est corrompu',
    statut: 'En cours',
    priorite: 'Moyenne',
    dateCreation: '2024-01-19 14:20',
    derniereReponse: '2024-01-20 08:15',
    assigneA: 'Équipe Développement'
  },
  {
    id: 'TICK-003',
    titre: 'Demande de formation utilisateur',
    description: 'Formation pour 5 nouveaux utilisateurs',
    statut: 'Résolu',
    priorite: 'Basse',
    dateCreation: '2024-01-18 11:00',
    derniereReponse: '2024-01-19 16:30',
    assigneA: 'Équipe Formation'
  }
];

export default function Support() {
  const [showNewTicket, setShowNewTicket] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <span className="text-gray-700 hover:text-blue-600 font-medium">Aide</span>
          </li>
          <li>
            <div className="flex items-center">
              <i className="ri-arrow-right-s-line text-gray-400"></i>
              <span className="ml-1 text-gray-500 font-medium">Support Technique</span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="space-y-6">
        {/* En-tête */}
        <Card>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-customer-service-line text-2xl text-blue-600"></i>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Support Technique</h1>
            <p className="text-gray-600 mb-6">
              Notre équipe est là pour vous aider. Créez un ticket ou consultez vos demandes existantes.
            </p>
            <Button variant="primary" onClick={() => setShowNewTicket(true)}>
              <div className="w-4 h-4 flex items-center justify-center mr-2">
                <i className="ri-add-line"></i>
              </div>
              Nouveau ticket
            </Button>
          </div>
        </Card>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-ticket-line text-blue-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">12</div>
            <div className="text-sm text-gray-600">Tickets ouverts</div>
          </Card>
          <Card className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-time-line text-orange-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">2h</div>
            <div className="text-sm text-gray-600">Temps de réponse moyen</div>
          </Card>
          <Card className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-check-line text-green-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">47</div>
            <div className="text-sm text-gray-600">Tickets résolus ce mois</div>
          </Card>
          <Card className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-star-line text-purple-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">4.8</div>
            <div className="text-sm text-gray-600">Satisfaction client</div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Mes tickets */}
          <div className="lg:col-span-2">
            <Card title="Mes tickets de support">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <select 
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8"
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                    >
                      <option value="">Tous les statuts</option>
                      <option value="Ouvert">Ouvert</option>
                      <option value="En cours">En cours</option>
                      <option value="Résolu">Résolu</option>
                      <option value="Fermé">Fermé</option>
                    </select>
                    <select 
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8"
                      value={selectedPriority}
                      onChange={(e) => setSelectedPriority(e.target.value)}
                    >
                      <option value="">Toutes les priorités</option>
                      <option value="Haute">Haute</option>
                      <option value="Moyenne">Moyenne</option>
                      <option value="Basse">Basse</option>
                    </select>
                  </div>
                  <Button variant="outline" size="sm">
                    <div className="w-4 h-4 flex items-center justify-center mr-2">
                      <i className="ri-refresh-line"></i>
                    </div>
                    Actualiser
                  </Button>
                </div>

                <div className="space-y-3">
                  {mockTickets.map((ticket) => (
                    <div key={ticket.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-sm text-gray-600">{ticket.id}</span>
                          <Badge 
                            variant={
                              ticket.statut === 'Ouvert' ? 'danger' :
                              ticket.statut === 'En cours' ? 'warning' :
                              ticket.statut === 'Résolu' ? 'success' : 'default'
                            }
                          >
                            {ticket.statut}
                          </Badge>
                          <Badge 
                            variant={
                              ticket.priorite === 'Haute' ? 'danger' :
                              ticket.priorite === 'Moyenne' ? 'warning' : 'default'
                            }
                          >
                            {ticket.priorite}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-600">
                          {ticket.dateCreation}
                        </div>
                      </div>
                      <h4 className="font-medium text-gray-900 mb-1">{ticket.titre}</h4>
                      <p className="text-sm text-gray-600 mb-2">{ticket.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>Assigné à: {ticket.assigneA}</span>
                        <span>Dernière réponse: {ticket.derniereReponse}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Contacts et ressources */}
          <div className="space-y-6">
            <Card title="Contacts d'urgence">
              <div className="space-y-4">
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-phone-line text-white"></i>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Support Urgent</div>
                      <div className="text-sm text-gray-600">Disponible 24h/24</div>
                    </div>
                  </div>
                  <div className="text-sm">
                    <div className="text-gray-900 font-medium">+225 20 21 22 23</div>
                    <div className="text-gray-600">urgence@cape.gov.ci</div>
                  </div>
                </div>

                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-mail-line text-white"></i>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Support Standard</div>
                      <div className="text-sm text-gray-600">Lun-Ven 8h-18h</div>
                    </div>
                  </div>
                  <div className="text-sm">
                    <div className="text-gray-900 font-medium">support@cape.gov.ci</div>
                    <div className="text-gray-600">Réponse sous 4h</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card title="Ressources utiles">
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <div className="w-5 h-5 flex items-center justify-center mr-3">
                    <i className="ri-book-line"></i>
                  </div>
                  Documentation
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <div className="w-5 h-5 flex items-center justify-center mr-3">
                    <i className="ri-question-answer-line"></i>
                  </div>
                  FAQ
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <div className="w-5 h-5 flex items-center justify-center mr-3">
                    <i className="ri-video-line"></i>
                  </div>
                  Tutoriels vidéo
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <div className="w-5 h-5 flex items-center justify-center mr-3">
                    <i className="ri-community-line"></i>
                  </div>
                  Forum communauté
                </Button>
              </div>
            </Card>

            <Card title="Statut du système">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Serveurs principaux</span>
                  <Badge variant="success">Opérationnel</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Base de données</span>
                  <Badge variant="success">Opérationnel</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Service email</span>
                  <Badge variant="warning">Maintenance</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">API externe</span>
                  <Badge variant="success">Opérationnel</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Modal Nouveau ticket */}
      {showNewTicket && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Nouveau ticket de support</h3>
              <button 
                onClick={() => setShowNewTicket(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-close-line"></i>
                </div>
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sujet
                </label>
                <Input placeholder="Décrivez brièvement votre problème" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Priorité
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8">
                  <option value="">Sélectionner une priorité</option>
                  <option value="Basse">Basse</option>
                  <option value="Moyenne">Moyenne</option>
                  <option value="Haute">Haute</option>
                  <option value="Urgente">Urgente</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Catégorie
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8">
                  <option value="">Sélectionner une catégorie</option>
                  <option value="Technique">Problème technique</option>
                  <option value="Compte">Problème de compte</option>
                  <option value="Formation">Demande de formation</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description détaillée
                </label>
                <textarea 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Décrivez votre problème en détail..."
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <Button variant="outline" onClick={() => setShowNewTicket(false)} className="flex-1">
                Annuler
              </Button>
              <Button variant="primary" className="flex-1">
                Créer le ticket
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
