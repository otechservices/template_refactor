
import { RouteObject } from 'react-router-dom';
import Home from '../pages/home/page';
import Dashboard from '../pages/dashboard/page';
import ProjectGenerator from '../pages/project-generator/page';
import PmpSimulator from '../pages/pmp-simulator/page';
import PmpHistory from '../pages/pmp-history/page';
import PmpTraining from '../pages/pmp-training/page';
import PmpTest from '../pages/pmp-test/page';
import PmpResult from '../pages/pmp-result/page';
import Login from '../pages/login/page';
import Register from '../pages/register/page';
import Missions from '../pages/missions/page';
import Formations from '../pages/formations/page';
import Expertise from '../pages/expertise/page';
import Contact from '../pages/contact/page';
import NotFound from '../pages/NotFound';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/project-generator',
    element: <ProjectGenerator />,
  },
  {
    path: '/pmp-simulator',
    element: <PmpSimulator />,
  },
  {
    path: '/pmp-history',
    element: <PmpHistory />,
  },
  {
    path: '/pmp-training',
    element: <PmpTraining />,
  },
  {
    path: '/pmp-test',
    element: <PmpTest />,
  },
  {
    path: '/pmp-result',
    element: <PmpResult />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/missions',
    element: <Missions />,
  },
  {
    path: '/formations',
    element: <Formations />,
  },
  {
    path: '/expertise',
    element: <Expertise />,
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
