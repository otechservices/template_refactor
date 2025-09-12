
import { RouteObject } from 'react-router-dom';
import HomePage from '../pages/home/page';
import InscriptionCapePage from '../pages/inscription-cape/page';
import InscriptionGarderiePage from '../pages/inscription-garderie/page';
import CapeAutoriseesPage from '../pages/cape-autorises/page';
import GarderiesAutoriseesPage from '../pages/garderies-autorisees/page';
import DeliberationsCAPEPage from '../pages/deliberations-cape/page';
import DeliberationsGarderiePage from '../pages/deliberations-garderie/page';
import ContactPage from '../pages/contact/page';
import InformationPage from '../pages/information/page';
import SessionResultsPage from '../pages/session-results/page';
import FAQPage from '../pages/faq/page';
import AssistanceEnLignePage from '../pages/assistance-en-ligne/page';
import CandidatureProfessionnelPage from '../pages/candidature-professionnel/page';
import LoginPage from '../pages/auth/login/page';
import RegisterPage from '../pages/auth/register/page';
import DashboardPage from '../pages/dashboard/page';
import ActualitesPage from '../pages/actualites/page';
import ArticlePage from '../pages/actualites/article/page';
import NotFoundPage from '../pages/NotFound';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/inscription-cape',
    element: <InscriptionCapePage />
  },
  {
    path: '/inscription-garderie',
    element: <InscriptionGarderiePage />
  },
  {
    path: '/cape-autorises',
    element: <CapeAutoriseesPage />
  },
  {
    path: '/garderies-autorisees',
    element: <GarderiesAutoriseesPage />
  },
  {
    path: '/deliberations-cape',
    element: <DeliberationsCAPEPage />
  },
  {
    path: '/deliberations-garderie',
    element: <DeliberationsGarderiePage />
  },
  {
    path: '/contact',
    element: <ContactPage />
  },
  {
    path: '/information',
    element: <InformationPage />
  },
  {
    path: '/session-results',
    element: <SessionResultsPage />
  },
  {
    path: '/faq',
    element: <FAQPage />
  },
  {
    path: '/assistance-en-ligne',
    element: <AssistanceEnLignePage />
  },
  {
    path: '/candidature-professionnel',
    element: <CandidatureProfessionnelPage />
  },
  {
    path: '/auth/login',
    element: <LoginPage />
  },
  {
    path: '/auth/register',
    element: <RegisterPage />
  },
  {
    path: '/dashboard',
    element: <DashboardPage />
  },
  {
    path: '/actualites',
    element: <ActualitesPage />
  },
  {
    path: '/actualites/:id',
    element: <ArticlePage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
];

export default routes;