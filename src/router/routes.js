import { useRoutes, Navigate } from "react-router-dom";
import { Exchange } from "../pages/Exchange";
import { Portfolio } from "../pages/Portfolio";

export function PublicRouter() {
  const routes = useRoutes([
    { path: "/exchange", element: <Exchange /> },
    { path: "/portfolio", element: <Portfolio /> },
    { path: "*", element: <Navigate to="/exchange" /> },
  ]);

  return routes;
}
