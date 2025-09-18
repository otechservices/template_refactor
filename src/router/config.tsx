
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Accueil from "../pages/accueil/page";
import Cape from "../pages/cape/page";
import Garderie from "../pages/garderie/page";
import VisiteTerrain from "../pages/visite-terrain/page";
import TableauBord from "../pages/tableau-bord/page";
import ControleCapesAutorises from "../pages/controle-capes-autorises/page";
import CentreDetail from "../pages/centre-detail/page";
import ListeMembres from "../pages/liste-membres/page";
import CapeRecommendations from "../pages/cape-recommendations/page";
import Requetes from "../pages/requetes/page";
import NouvelleRequeteCape from "../pages/nouvelle-requete-cape/page";
import NouvelleRequeteGarderie from "../pages/nouvelle-requete-garderie/page";
import Sanctions from "../pages/sanctions/page";
import Sessions from "../pages/sessions/page";
import Statistiques from "../pages/statistiques/page";
import AValider from "../pages/a-valider/page";
import ParcoursTraitement from "../pages/parcours-traitement/page";
import DossiersCapesInscrire from "../pages/dossiers-cape-inscrire/page";
import DossiersGarderieInscrire from "../pages/dossiers-garderie-inscrire/page";
import Layout from "../components/layout/Layout";
import AgrementsValider from "../pages/agrements-valider/page";
import CreationSession from "../pages/creation-session/page";
import CreationMembres from "../pages/creation-membres/page";
import GarderieRecommendations from "../pages/garderie-recommendations/page";
import GarderieReports from "../pages/garderie-reports/page";
import CapeReports from "../pages/cape-reports/page";
import CapeStats from "../pages/cape-stats/page";
import GarderieStats from "../pages/garderie-stats/page";
import CapeSearch from "../pages/cape-search/page";
import GarderieSearch from "../pages/garderie-search/page";
import Utilisateurs from "../pages/utilisateurs/page";
import Roles from "../pages/roles/page";
import Configuration from "../pages/configuration/page";
import Documentation from "../pages/documentation/page";
import Support from "../pages/support/page";
import Formation from "../pages/formation/page";
import TraitementDemande from "../pages/traitement-demande/page";
import Login from "../pages/login/page";

const routes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <TableauBord />
      },
      {
        path: 'accueil',
        element: <Accueil />
      },
      {
        path: 'cape',
        element: <Cape />
      },
      {
        path: 'garderie',
        element: <Garderie />
      },
      {
        path: 'visite-terrain',
        element: <VisiteTerrain />
      },
      {
        path: 'liste-membres',
        element: <ListeMembres />
      },
      {
        path: 'cape-recommendations',
        element: <CapeRecommendations />
      },
      {
        path: 'centre-detail/:id',
        element: <CentreDetail />
      },
      {
        path: 'controle-capes-autorises',
        element: <ControleCapesAutorises />
      },
      {
        path: 'requetes',
        element: <Requetes />
      },
      {
        path: 'nouvelle-requete-cape',
        element: <NouvelleRequeteCape />
      },
      {
        path: 'nouvelle-requete-garderie',
        element: <NouvelleRequeteGarderie />
      },
      {
        path: 'a-valider',
        element: <AValider />
      },
      {
        path: 'parcours-traitement',
        element: <ParcoursTraitement />
      },
      {
        path: 'dossiers-cape-inscrire',
        element: <DossiersCapesInscrire />
      },
      {
        path: 'dossiers-garderie-inscrire',
        element: <DossiersGarderieInscrire />
      },
      {
        path: 'traitement-demande/:id',
        element: <TraitementDemande />
      },
      {
        path: 'agrements-valider',
        element: <AgrementsValider />
      },
      {
        path: 'creation-session',
        element: <CreationSession />
      },
      {
        path: 'creation-membres',
        element: <CreationMembres />
      },
      {
        path: 'garderie-recommendations',
        element: <GarderieRecommendations />
      },
      {
        path: 'garderie-reports',
        element: <GarderieReports />
      },
      {
        path: 'cape-reports',
        element: <CapeReports />
      },
      {
        path: 'cape-stats',
        element: <CapeStats />
      },
      {
        path: 'garderie-stats',
        element: <GarderieStats />
      },
      {
        path: 'cape-search',
        element: <CapeSearch />
      },
      {
        path: 'garderie-search',
        element: <GarderieSearch />
      },
      {
        path: 'utilisateurs',
        element: <Utilisateurs />
      },
      {
        path: 'roles',
        element: <Roles />
      },
      {
        path: 'configuration',
        element: <Configuration />
      },
      {
        path: 'documentation',
        element: <Documentation />
      },
      {
        path: 'support',
        element: <Support />
      },
      {
        path: 'formation',
        element: <Formation />
      },
      {
        path: 'sanctions',
        element: <Sanctions />
      },
      {
        path: 'sessions',
        element: <Sessions />
      },
      {
        path: 'statistiques',
        element: <Statistiques />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
];

export default routes;
