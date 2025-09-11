
import { RouteObject } from 'react-router-dom';
import Home from '../pages/home/page';
import Actualites from '../pages/actualites/page';
import DecouvrirDangbo from '../pages/decouvrir-dangbo/page';
import Municipalite from '../pages/municipalite/page';
import Services from '../pages/services/page';
import Documentation from '../pages/documentation/page';
import Projets from '../pages/projets/page';
import Contact from '../pages/contact/page';
import NotFound from '../pages/NotFound';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/actualites',
    element: <Actualites />,
  },
  {
    path: '/decouvrir-dangbo',
    element: <DecouvrirDangbo />,
  },
  {
    path: '/municipalite',
    element: <Municipalite />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/documentation',
    element: <Documentation />,
  },
  {
    path: '/projets',
    element: <Projets />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
