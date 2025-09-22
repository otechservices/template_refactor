
import type { RouteObject } from "react-router-dom";
import Login from "../pages/login/page";
import Dashboard from "../pages/dashboard/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
];

export default routes;
