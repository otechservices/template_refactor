
import React, { useState } from 'react';
import Card from '../../components/base/Card';
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import Badge from '../../components/base/Badge';

export default function Configuration() {
  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { id: 'general', label: 'Général', icon: 'ri-settings-line' },
    { id: 'notifications', label: 'Notifications', icon: 'ri-notification-line' },
    { id: 'securite', label: 'Sécurité', icon: 'ri-shield-line' },
    { id: 'sauvegarde', label: 'Sauvegarde', icon: 'ri-database-line' },
    { id: 'integration', label: 'Intégrations', icon: 'ri-plug-line' }
  ];

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <span className="text-gray-700 hover:text-blue-600 font-medium">Paramètres</span>
          </li>
          <li>
            <div className="flex items-center">
              <i className="ri-arrow-right-s-line text-gray-400"></i>
              <span className="ml-1 text-gray-500 font-medium">Configuration</span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Menu de navigation */}
        <div className="lg:col-span-1">
          <Card>
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-left rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className={tab.icon}></i>
                  </div>
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </nav>
          </Card>
        </div>

        {/* Contenu */}
        <div className="lg:col-span-3">
          {/* Configuration générale */}
          {activeTab === 'general' && (
            <div className="space-y-6">
              <Card title="Configuration générale">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nom de l'organisation
                      </label>
                      <Input value="Ministère de la Femme, de la Famille et de l'Enfant" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nom du système
                      </label>
                      <Input value="Système CAPE" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Adresse
                    </label>
                    <Input value="Abidjan, Plateau - Boulevard de la République" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Téléphone principal
                      </label>
                      <Input value="+225 20 21 22 23" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email principal
                      </label>
                      <Input value="contact@cape.gov.ci" />
                    </div>
                  </div>
                  <Button variant="primary">
                    Sauvegarder les modifications
                  </Button>
                </div>
              </Card>

              <Card title="Paramètres système">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Fuseau horaire
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8">
                        <option value="Africa/Abidjan">GMT (Abidjan)</option>
                        <option value="UTC">UTC</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Langue par défaut
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8">
                        <option value="fr">Français</option>
                        <option value="en">English</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Session timeout (minutes)
                      </label>
                      <Input type="number" value="30" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Éléments par page
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Notifications */}
          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <Card title="Configuration des notifications">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">Notifications par email</div>
                      <div className="text-sm text-gray-600">Recevoir les alertes importantes par email</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">Notifications push</div>
                      <div className="text-sm text-gray-600">Notifications en temps réel dans le navigateur</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">Rapports quotidiens</div>
                      <div className="text-sm text-gray-600">Résumé quotidien des activités</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </Card>

              <Card title="Configuration SMTP">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Serveur SMTP
                      </label>
                      <Input placeholder="smtp.example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Port
                      </label>
                      <Input type="number" placeholder="587" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nom d'utilisateur
                      </label>
                      <Input placeholder="noreply@cape.gov.ci" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Mot de passe
                      </label>
                      <Input type="password" placeholder="••••••••" />
                    </div>
                  </div>
                  <Button variant="outline">
                    Tester la configuration
                  </Button>
                </div>
              </Card>
            </div>
          )}

          {/* Sécurité */}
          {activeTab === 'securite' && (
            <div className="space-y-6">
              <Card title="Politiques de sécurité">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Longueur minimale du mot de passe
                    </label>
                    <Input type="number" value="8" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Exigences du mot de passe
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                        <span className="ml-2 text-sm text-gray-700">Au moins une majuscule</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                        <span className="ml-2 text-sm text-gray-700">Au moins un chiffre</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="ml-2 text-sm text-gray-700">Au moins un caractère spécial</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Tentatives de connexion maximales
                    </label>
                    <Input type="number" value="5" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Durée de blocage (minutes)
                    </label>
                    <Input type="number" value="15" />
                  </div>
                </div>
              </Card>

              <Card title="Journal d'audit">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">Enregistrement des actions</div>
                      <div className="text-sm text-gray-600">Conserver un historique des actions utilisateurs</div>
                    </div>
                    <Badge variant="success">Actif</Badge>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Durée de conservation (jours)
                    </label>
                    <Input type="number" value="365" />
                  </div>
                  <Button variant="outline">
                    <div className="w-4 h-4 flex items-center justify-center mr-2">
                      <i className="ri-download-line"></i>
                    </div>
                    Exporter les logs
                  </Button>
                </div>
              </Card>
            </div>
          )}

          {/* Sauvegarde */}
          {activeTab === 'sauvegarde' && (
            <div className="space-y-6">
              <Card title="Sauvegarde automatique">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">Sauvegarde quotidienne</div>
                      <div className="text-sm text-gray-600">Sauvegarde automatique à 2h00 du matin</div>
                    </div>
                    <Badge variant="success">Actif</Badge>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Heure de sauvegarde
                    </label>
                    <Input type="time" value="02:00" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre de sauvegardes à conserver
                    </label>
                    <Input type="number" value="30" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="primary">
                      <div className="w-4 h-4 flex items-center justify-center mr-2">
                        <i className="ri-save-line"></i>
                      </div>
                      Sauvegarde manuelle
                    </Button>
                    <Button variant="outline">
                      <div className="w-4 h-4 flex items-center justify-center mr-2">
                        <i className="ri-upload-line"></i>
                      </div>
                      Restaurer
                    </Button>
                  </div>
                </div>
              </Card>

              <Card title="Historique des sauvegardes">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">Sauvegarde_20240120_0200.sql</div>
                      <div className="text-sm text-gray-600">20 Jan 2024, 02:00 - 245 MB</div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i className="ri-download-line"></i>
                        </div>
                      </Button>
                      <Button variant="ghost" size="sm">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i className="ri-upload-line"></i>
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">Sauvegarde_20240119_0200.sql</div>
                      <div className="text-sm text-gray-600">19 Jan 2024, 02:00 - 243 MB</div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i className="ri-download-line"></i>
                        </div>
                      </Button>
                      <Button variant="ghost" size="sm">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i className="ri-upload-line"></i>
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Intégrations */}
          {activeTab === 'integration' && (
            <div className="space-y-6">
              <Card title="Intégrations actives">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-green-200 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                        <div className="w-6 h-6 flex items-center justify-center">
                          <i className="ri-mail-line text-white"></i>
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Service Email</div>
                        <div className="text-sm text-gray-600">Envoi automatique d'emails</div>
                      </div>
                    </div>
                    <Badge variant="success">Connecté</Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <div className="w-6 h-6 flex items-center justify-center">
                          <i className="ri-message-line text-white"></i>
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Service SMS</div>
                        <div className="text-sm text-gray-600">Notifications par SMS</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Configurer
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                        <div className="w-6 h-6 flex items-center justify-center">
                          <i className="ri-cloud-line text-white"></i>
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Stockage Cloud</div>
                        <div className="text-sm text-gray-600">Sauvegarde externe</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Configurer
                    </Button>
                  </div>
                </div>
              </Card>

              <Card title="API Configuration">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Clé API publique
                    </label>
                    <div className="flex gap-2">
                      <Input value="pk_live_51234567890abcdef" readOnly />
                      <Button variant="outline" size="sm">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i className="ri-file-copy-line"></i>
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Clé API secrète
                    </label>
                    <div className="flex gap-2">
                      <Input type="password" value="sk_live_••••••••••••••••" readOnly />
                      <Button variant="outline" size="sm">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i className="ri-refresh-line"></i>
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                        <i className="ri-alert-line text-yellow-600"></i>
                      </div>
                      <div className="text-sm text-yellow-800">
                        <div className="font-medium mb-1">Attention</div>
                        <div>Ne partagez jamais votre clé API secrète. Elle donne un accès complet à votre système.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
