import React, { useState } from 'react';
import Card from '../../components/base/Card';
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import Badge from '../../components/base/Badge';

export default function CapeStats() {
  const [selectedPeriod, setSelectedPeriod] = useState('mensuel');
  const [selectedYear, setSelectedYear] = useState('2024');

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <span className="text-gray-700 hover:text-blue-600 font-medium">Statistiques</span>
          </li>
          <li>
            <div className="flex items-center">
              <i className="ri-arrow-right-s-line text-gray-400"></i>
              <span className="ml-1 text-gray-500 font-medium">CAPE</span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="space-y-6">
        {/* Filtres */}
        <Card>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Période:</span>
              <select 
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded text-sm pr-8"
              >
                <option value="mensuel">Mensuel</option>
                <option value="trimestriel">Trimestriel</option>
                <option value="annuel">Annuel</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Année:</span>
              <select 
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded text-sm pr-8"
              >
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
            </div>
            <Button variant="primary" size="sm">
              <div className="w-4 h-4 flex items-center justify-center mr-2">
                <i className="ri-refresh-line"></i>
              </div>
              Actualiser
            </Button>
          </div>
        </Card>

        {/* Statistiques globales */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-building-line text-blue-600"></i>
              </div>
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-1">28</div>
            <div className="text-sm text-gray-600">CAPE Actifs</div>
            <div className="text-xs text-green-600 mt-1">+12% vs mois dernier</div>
          </Card>
          <Card className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-group-line text-green-600"></i>
              </div>
            </div>
            <div className="text-3xl font-bold text-green-600 mb-1">1,245</div>
            <div className="text-sm text-gray-600">Enfants Accueillis</div>
            <div className="text-xs text-green-600 mt-1">+8% vs mois dernier</div>
          </Card>
          <Card className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-team-line text-purple-600"></i>
              </div>
            </div>
            <div className="text-3xl font-bold text-purple-600 mb-1">186</div>
            <div className="text-sm text-gray-600">Personnel Total</div>
            <div className="text-xs text-blue-600 mt-1">+3% vs mois dernier</div>
          </Card>
          <Card className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-award-line text-orange-600"></i>
              </div>
            </div>
            <div className="text-3xl font-bold text-orange-600 mb-1">156</div>
            <div className="text-sm text-gray-600">Agréments Délivrés</div>
            <div className="text-xs text-green-600 mt-1">+15% vs mois dernier</div>
          </Card>
        </div>

        {/* Graphiques de performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card title="Évolution des inscriptions">
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className="ri-line-chart-line text-blue-600"></i>
                  </div>
                </div>
                <div className="text-gray-600">Graphique des inscriptions mensuelles</div>
                <div className="text-sm text-gray-500 mt-2">
                  Tendance: +18% sur les 6 derniers mois
                </div>
              </div>
            </div>
          </Card>

          <Card title="Répartition par région">
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className="ri-pie-chart-line text-green-600"></i>
                  </div>
                </div>
                <div className="text-gray-600">Répartition géographique des CAPE</div>
                <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                  <div>Abidjan: 45%</div>
                  <div>Bouaké: 18%</div>
                  <div>Yamoussoukro: 12%</div>
                  <div>Autres: 25%</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Indicateurs de qualité */}
        <Card title="Indicateurs de qualité">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">94%</div>
              <div className="text-sm text-gray-600 mb-2">Taux de conformité</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{width: '94%'}}></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">87%</div>
              <div className="text-sm text-gray-600 mb-2">Satisfaction parents</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '87%'}}></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">92%</div>
              <div className="text-sm text-gray-600 mb-2">Taux de réussite</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{width: '92%'}}></div>
              </div>
            </div>
          </div>
        </Card>

        {/* Top 5 des CAPE */}
        <Card title="Top 5 des CAPE par performance">
          <div className="space-y-4">
            {[
              { nom: 'Centre Éducatif Espoir', score: 18.5, enfants: 67, personnel: 12 },
              { nom: 'École Maternelle Joie', score: 18.2, enfants: 52, personnel: 9 },
              { nom: 'Centre Les Petits Princes', score: 17.8, enfants: 45, personnel: 8 },
              { nom: 'École Maternelle Soleil', score: 17.5, enfants: 38, personnel: 7 },
              { nom: 'Centre Éducatif Avenir', score: 17.2, enfants: 41, personnel: 8 }
            ].map((cape, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-blue-600">{index + 1}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{cape.nom}</div>
                    <div className="text-sm text-gray-600">
                      {cape.enfants} enfants • {cape.personnel} personnel
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-green-600">{cape.score}/20</div>
                  <Badge variant="success">Excellent</Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Rapports mensuels */}
        <Card title="Résumé des rapports mensuels">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Soumissions de rapports</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Janvier 2024</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                    <span className="text-sm font-medium">95%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Décembre 2023</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '88%'}}></div>
                    </div>
                    <span className="text-sm font-medium">88%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Novembre 2023</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{width: '76%'}}></div>
                    </div>
                    <span className="text-sm font-medium">76%</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Activités reportées</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">1,245</div>
                  <div className="text-xs text-blue-800">Activités pédagogiques</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">328</div>
                  <div className="text-xs text-green-800">Activités récréatives</div>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">156</div>
                  <div className="text-xs text-purple-800">Formations personnel</div>
                </div>
                <div className="text-center p-3 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">89</div>
                  <div className="text-xs text-orange-800">Événements spéciaux</div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Actions */}
        <Card>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Actions rapides</h3>
            <div className="flex gap-3">
              <Button variant="outline">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-download-line"></i>
                </div>
                Exporter rapport
              </Button>
              <Button variant="primary">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-printer-line"></i>
                </div>
                Imprimer statistiques
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}