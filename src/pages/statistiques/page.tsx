
import React, { useState } from 'react';
import Card from '../../components/base/Card';
import Button from '../../components/base/Button';
import Badge from '../../components/base/Badge';

export default function Statistiques() {
  const [selectedPeriod, setSelectedPeriod] = useState('mensuel');
  const [selectedType, setSelectedType] = useState('cape');

  const statsGenerales = {
    cape: {
      inscrits: 45,
      autorises: 38,
      enAttente: 7,
      rejetes: 2
    },
    garderie: {
      inscrits: 28,
      autorises: 22,
      enAttente: 4,
      rejetes: 2
    }
  };

  const statsRegionales = [
    { region: 'Littoral', cape: 12, garderie: 8, total: 20 },
    { region: 'Atlantique', cape: 9, garderie: 6, total: 15 },
    { region: 'Ouémé', cape: 8, garderie: 5, total: 13 },
    { region: 'Zou', cape: 6, garderie: 4, total: 10 },
    { region: 'Borgou', cape: 3, garderie: 3, total: 6 }
  ];

  const evolutionMensuelle = [
    { mois: 'Janvier', nouvelles: 8, approuvees: 12, rejetes: 2 },
    { mois: 'Février', nouvelles: 6, approuvees: 9, rejetes: 1 },
    { mois: 'Mars', nouvelles: 10, approuvees: 8, rejetes: 3 },
    { mois: 'Avril', nouvelles: 12, approuvees: 15, rejetes: 1 },
    { mois: 'Mai', nouvelles: 9, approuvees: 11, rejetes: 2 }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* En-tête */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Tableau de bord statistiques</h1>
        <div className="flex gap-3">
          <select 
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm pr-8"
          >
            <option value="mensuel">Mensuel</option>
            <option value="trimestriel">Trimestriel</option>
            <option value="annuel">Annuel</option>
          </select>
          <Button variant="outline">
            <div className="w-4 h-4 flex items-center justify-center mr-2">
              <i className="ri-download-line"></i>
            </div>
            Exporter
          </Button>
        </div>
      </div>

      {/* Vue d'ensemble */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">73</div>
          <div className="text-sm text-gray-600">Total Établissements</div>
          <div className="text-xs text-gray-500 mt-1">+5 ce mois</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">60</div>
          <div className="text-sm text-gray-600">Agréments Accordés</div>
          <div className="text-xs text-gray-500 mt-1">82% du total</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-orange-600 mb-2">11</div>
          <div className="text-sm text-gray-600">En Attente</div>
          <div className="text-xs text-gray-500 mt-1">15% du total</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-red-600 mb-2">2</div>
          <div className="text-sm text-gray-600">Rejetés</div>
          <div className="text-xs text-gray-500 mt-1">3% du total</div>
        </Card>
      </div>

      {/* Filtres par type */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
        <button
          onClick={() => setSelectedType('cape')}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
            selectedType === 'cape'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          CAPE
        </button>
        <button
          onClick={() => setSelectedType('garderie')}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
            selectedType === 'garderie'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Garderie
        </button>
        <button
          onClick={() => setSelectedType('global')}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
            selectedType === 'global'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Vue globale
        </button>
      </div>

      {/* Statistiques détaillées */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Répartition par statut">
          <div className="space-y-4">
            {selectedType !== 'global' && (
              <>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                  <span className="font-medium text-blue-900">Inscrits</span>
                  <span className="text-2xl font-bold text-blue-600">
                    {selectedType === 'cape' ? statsGenerales.cape.inscrits : statsGenerales.garderie.inscrits}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                  <span className="font-medium text-green-900">Autorisés</span>
                  <span className="text-2xl font-bold text-green-600">
                    {selectedType === 'cape' ? statsGenerales.cape.autorises : statsGenerales.garderie.autorises}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded">
                  <span className="font-medium text-orange-900">En attente</span>
                  <span className="text-2xl font-bold text-orange-600">
                    {selectedType === 'cape' ? statsGenerales.cape.enAttente : statsGenerales.garderie.enAttente}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-red-50 rounded">
                  <span className="font-medium text-red-900">Rejetés</span>
                  <span className="text-2xl font-bold text-red-600">
                    {selectedType === 'cape' ? statsGenerales.cape.rejetes : statsGenerales.garderie.rejetes}
                  </span>
                </div>
              </>
            )}
            {selectedType === 'global' && (
              <>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                  <span className="font-medium text-blue-900">CAPE</span>
                  <span className="text-2xl font-bold text-blue-600">{statsGenerales.cape.inscrits}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                  <span className="font-medium text-green-900">Garderies</span>
                  <span className="text-2xl font-bold text-green-600">{statsGenerales.garderie.inscrits}</span>
                </div>
              </>
            )}
          </div>
        </Card>

        <Card title="Répartition régionale">
          <div className="space-y-3">
            {statsRegionales.map((region) => (
              <div key={region.region} className="flex items-center justify-between p-3 border border-gray-200 rounded">
                <span className="font-medium">{region.region}</span>
                <div className="flex gap-4 text-sm">
                  <span className="text-blue-600">CAPE: {region.cape}</span>
                  <span className="text-green-600">Garderie: {region.garderie}</span>
                  <span className="font-bold">Total: {region.total}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Évolution temporelle */}
      <Card title="Évolution mensuelle des demandes">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Mois</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Nouvelles demandes</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Approuvées</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Rejetées</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Taux d'approbation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {evolutionMensuelle.map((mois) => (
                <tr key={mois.mois} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium">{mois.mois}</td>
                  <td className="px-4 py-3 text-sm">
                    <Badge variant="default">{mois.nouvelles}</Badge>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <Badge variant="success">{mois.approuvees}</Badge>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <Badge variant="danger">{mois.rejetes}</Badge>
                  </td>
                  <td className="px-4 py-3 text-sm font-medium text-green-600">
                    {Math.round((mois.approuvees / (mois.approuvees + mois.rejetes)) * 100)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Indicateurs de performance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Temps moyen de traitement">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">18</div>
            <div className="text-sm text-gray-600">jours</div>
            <div className="text-xs text-green-600 mt-1">-2 jours vs mois dernier</div>
          </div>
        </Card>

        <Card title="Taux de satisfaction">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">94%</div>
            <div className="text-sm text-gray-600">satisfaction</div>
            <div className="text-xs text-green-600 mt-1">+3% vs mois dernier</div>
          </div>
        </Card>

        <Card title="Visites de terrain">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">42</div>
            <div className="text-sm text-gray-600">visites réalisées</div>
            <div className="text-xs text-blue-600 mt-1">8 planifiées</div>
          </div>
        </Card>
      </div>
    </div>
  );
}
