
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/base/Card';
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import Badge from '../../components/base/Badge';

interface Cape {
  id: number;
  type: string;
  nom: string;
  nombresRecommandations: number;
  derniereMiseAJour: string;
}

interface Recommendation {
  id: number;
  titre: string;
  description: string;
  priorite: 'Haute' | 'Moyenne' | 'Basse';
  statut: 'En cours' | 'Terminée' | 'En attente';
  centreId: number;
  centreName: string;
  controlesEffectues: number;
  dateEmission: string;
  echeance: string;
}

interface Control {
  id: number;
  avis: string;
  constat: string;
  dateControle: string;
  inspecteur: string;
  score: number;
  statut: 'Conforme' | 'Non conforme' | 'À surveiller';
}

export default function CapeRecommendations() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('effectues');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCape, setSelectedCape] = useState<number | null>(null);

  // Données simulées pour les CAPE avec recommandations
  const capesWithRecommendations: Cape[] = [
    {
      id: 1,
      type: "CAPE Type A",
      nom: "Centre Éducatif Les Petits Princes",
      nombresRecommandations: 3,
      derniereMiseAJour: "15/01/2024"
    },
    {
      id: 2,
      type: "CAPE Type B", 
      nom: "Orphelinat Mère Brandis",
      nombresRecommandations: 5,
      derniereMiseAJour: "12/01/2024"
    },
    {
      id: 3,
      type: "CAPE Type A",
      nom: "Centre ASSAFWA",
      nombresRecommandations: 2,
      derniereMiseAJour: "10/01/2024"
    },
    {
      id: 4,
      type: "CAPE Type C",
      nom: "Orphelinat Saint Jean Paul II",
      nombresRecommandations: 4,
      derniereMiseAJour: "08/01/2024"
    },
    {
      id: 5,
      type: "CAPE Type B",
      nom: "Centre OHANA",
      nombresRecommandations: 1,
      derniereMiseAJour: "05/01/2024"
    }
  ];

  // Données simulées pour les recommandations
  const recommendations: Recommendation[] = [
    {
      id: 1,
      titre: "Amélioration des infrastructures sanitaires",
      description: "Rénover les toilettes et améliorer l'accès à l'eau potable",
      priorite: "Haute",
      statut: "En cours",
      centreId: 1,
      centreName: "Centre Éducatif Les Petits Princes",
      controlesEffectues: 2,
      dateEmission: "15/01/2024",
      echeance: "15/03/2024"
    },
    {
      id: 2,
      titre: "Formation du personnel éducatif",
      description: "Organiser une formation sur les nouvelles méthodes pédagogiques",
      priorite: "Moyenne",
      statut: "En attente",
      centreId: 2,
      centreName: "Orphelinat Mère Brandis",
      controlesEffectues: 1,
      dateEmission: "12/01/2024",
      echeance: "12/04/2024"
    },
    {
      id: 3,
      titre: "Mise à jour du matériel pédagogique",
      description: "Renouveler les livres et jeux éducatifs adaptés à l'âge des enfants",
      priorite: "Moyenne",
      statut: "Terminée",
      centreId: 1,
      centreName: "Centre Éducatif Les Petits Princes",
      controlesEffectues: 3,
      dateEmission: "10/01/2024",
      echeance: "10/03/2024"
    },
    {
      id: 4,
      titre: "Amélioration de la sécurité",
      description: "Installer des barrières de sécurité supplémentaires dans la cour",
      priorite: "Haute",
      statut: "En cours",
      centreId: 3,
      centreName: "Centre ASSAFWA",
      controlesEffectues: 1,
      dateEmission: "08/01/2024",
      echeance: "08/02/2024"
    },
    {
      id: 5,
      titre: "Amélioration de l'alimentation",
      description: "Diversifier les menus et améliorer la qualité nutritionnelle",
      priorite: "Moyenne",
      statut: "En cours",
      centreId: 4,
      centreName: "Orphelinat Saint Jean Paul II",
      controlesEffectues: 2,
      dateEmission: "05/01/2024",
      echeance: "05/04/2024"
    },
    {
      id: 6,
      titre: "Mise en conformité électrique",
      description: "Réviser l'installation électrique pour la sécurité",
      priorite: "Haute",
      statut: "En attente",
      centreId: 2,
      centreName: "Orphelinat Mère Brandis",
      controlesEffectues: 0,
      dateEmission: "03/01/2024",
      echeance: "03/03/2024"
    }
  ];

  // Données simulées pour les contrôles
  const controlsEffectues: Control[] = [
    {
      id: 1,
      avis: "Conforme aux normes",
      constat: "Centre bien géré, personnel compétent, enfants épanouis",
      dateControle: "15/01/2024",
      inspecteur: "Dr. KOUASSI Marie",
      score: 85,
      statut: "Conforme"
    },
    {
      id: 2,
      avis: "Amélioration nécessaire",
      constat: "Quelques infrastructures à rénover, formation du personnel recommandée",
      dateControle: "12/01/2024",
      inspecteur: "M. TRAORE Ibrahim",
      score: 72,
      statut: "À surveiller"
    },
    {
      id: 3,
      avis: "Excellent travail",
      constat: "Centre exemplaire respectant toutes les normes en vigueur",
      dateControle: "10/01/2024",
      inspecteur: "Mme ADJOVI Fatima",
      score: 92,
      statut: "Conforme"
    },
    {
      id: 4,
      avis: "Non conforme",
      constat: "Problèmes de sécurité détectés, mise en conformité urgente requise",
      dateControle: "08/01/2024",
      inspecteur: "Dr. COULIBALY Jean",
      score: 58,
      statut: "Non conforme"
    }
  ];

  // Filtrage des recommandations par centre sélectionné
  const filteredRecommendations = selectedCape 
    ? recommendations.filter(rec => rec.centreId === selectedCape)
    : recommendations;

  const getControleData = (tabType: string) => {
    switch (tabType) {
      case 'effectues':
        return controlsEffectues;
      case 'enregistrements':
        return controlsEffectues.slice(0, 2); // Simulation
      case 'transmettre':
        return controlsEffectues.slice(2, 3); // Simulation
      default:
        return [];
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Fil d'ariane */}
      <nav className="mb-6">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span 
            className="cursor-pointer hover:text-blue-600"
            onClick={() => navigate('/cape')}
          >
            CAPE
          </span>
          <i className="ri-arrow-right-s-line text-gray-400"></i>
          <span className="text-blue-600">Liste des recommandations</span>
        </div>
      </nav>

      {/* Statistiques en en-tête */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card className="text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">{capesWithRecommendations.length}</div>
          <div className="text-sm text-gray-600">CAPE avec recommandations</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-orange-600 mb-2">{recommendations.length}</div>
          <div className="text-sm text-gray-600">Recommandations totales</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">
            {recommendations.filter(r => r.statut === 'Terminée').length}
          </div>
          <div className="text-sm text-gray-600">Recommandations terminées</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-red-600 mb-2">
            {recommendations.filter(r => r.statut === 'En cours').length}
          </div>
          <div className="text-sm text-gray-600">En cours de traitement</div>
        </Card>
      </div>

      {/* Section CAPE avec recommandations */}
      <Card className="mb-6">
        <div className="bg-blue-900 text-white p-4 -mx-6 -mt-6 mb-6">
          <h2 className="text-lg font-semibold">Liste des CAPE avec recommandations</h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              {capesWithRecommendations.length} élément(s)
            </div>
            <div className="w-64">
              <Input
                placeholder="Rechercher un centre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon="ri-search-line"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Sélection</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Type CAPE</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Nom du centre</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Recommandations</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Dernière MAJ</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {capesWithRecommendations.map((cape) => (
                  <tr key={cape.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <input 
                        type="radio" 
                        name="selectedCape" 
                        checked={selectedCape === cape.id}
                        onChange={() => setSelectedCape(cape.id)}
                        className="text-blue-600"
                      />
                    </td>
                    <td className="px-4 py-3 text-sm">{cape.type}</td>
                    <td className="px-4 py-3 text-sm font-medium">{cape.nom}</td>
                    <td className="px-4 py-3">
                      <Badge variant="warning" className="text-sm">
                        {cape.nombresRecommandations}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">{cape.derniereMiseAJour}</td>
                    <td className="px-4 py-3">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => navigate(`/centre-detail/${cape.id}`)}
                      >
                        Consulter
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>

      {/* Section Liste des recommandations */}
      <Card className="mb-6">
        <div className="bg-blue-900 text-white p-4 -mx-6 -mt-6 mb-6">
          <h2 className="text-lg font-semibold">
            Liste des recommandations
            {selectedCape && ` - ${capesWithRecommendations.find(c => c.id === selectedCape)?.nom}`}
          </h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <Button 
                variant={selectedCape ? "primary" : "outline"}
                size="sm"
                disabled={!selectedCape}
              >
                Consulter les recommandations
              </Button>
              {selectedCape && (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setSelectedCape(null)}
                >
                  Voir toutes
                </Button>
              )}
            </div>
            <div className="text-sm text-gray-600">
              {filteredRecommendations.length} élément(s)
            </div>
          </div>
          
          <div className="space-y-4">
            {filteredRecommendations.map((recommendation) => (
              <div key={recommendation.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-1">{recommendation.titre}</h4>
                    <p className="text-sm text-gray-600 mb-2">{recommendation.description}</p>
                    <p className="text-xs text-blue-600">{recommendation.centreName}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge variant={
                      recommendation.priorite === 'Haute' ? 'destructive' :
                      recommendation.priorite === 'Moyenne' ? 'warning' : 'secondary'
                    }>
                      {recommendation.priorite}
                    </Badge>
                    <Badge variant={
                      recommendation.statut === 'Terminée' ? 'success' :
                      recommendation.statut === 'En cours' ? 'warning' : 'default'
                    }>
                      {recommendation.statut}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-2">
                  <span>Contrôles effectués: {recommendation.controlesEffectues}</span>
                  <span>Échéance: {recommendation.echeance}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Section Liste des contrôles */}
      <Card>
        <div className="bg-blue-900 text-white p-4 -mx-6 -mt-6 mb-6">
          <h2 className="text-lg font-semibold">Liste des contrôles</h2>
        </div>
        <div className="space-y-4">
          {/* Navigation par onglets */}
          <div className="flex space-x-1">
            <button
              onClick={() => setActiveTab('effectues')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'effectues'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Contrôles effectués ({controlsEffectues.length})
            </button>
            <button
              onClick={() => setActiveTab('enregistrements')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'enregistrements'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Mes enregistrements ({getControleData('enregistrements').length})
            </button>
            <button
              onClick={() => setActiveTab('transmettre')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'transmettre'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              À transmettre ({getControleData('transmettre').length})
            </button>
          </div>

          {/* Contenu de l'onglet actif */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Date</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Inspecteur</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Avis</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Constat</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Score</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Statut</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {getControleData(activeTab).map((control) => (
                  <tr key={control.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">{control.dateControle}</td>
                    <td className="px-4 py-3 text-sm">{control.inspecteur}</td>
                    <td className="px-4 py-3 text-sm font-medium">{control.avis}</td>
                    <td className="px-4 py-3 text-sm">{control.constat}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`font-medium ${
                        control.score >= 80 ? 'text-green-600' :
                        control.score >= 60 ? 'text-orange-600' : 'text-red-600'
                      }`}>
                        {control.score}%
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <Badge variant={
                        control.statut === 'Conforme' ? 'success' :
                        control.statut === 'À surveiller' ? 'warning' : 'destructive'
                      }>
                        {control.statut}
                      </Badge>
                    </td>
                  </tr>
                ))}
                {getControleData(activeTab).length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
                      Aucune donnée disponible pour cet onglet
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </Card>

      {/* Footer */}
      <div className="mt-8 text-center text-sm text-gray-500">
        Copyright © 2024 CAPE - Système de gestion des centres d'accueil préscolaire
      </div>
    </div>
  );
}
