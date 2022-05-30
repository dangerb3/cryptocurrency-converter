import { useRoutes, Navigate } from "react-router-dom";
import { ExchangePage } from "../pages/ExchangePage";
import { PortfolioPage } from "../pages/PortfolioPage";

export function PublicRouter() {
  const routes = useRoutes([
    { path: "/exchange", element: <ExchangePage /> },
    { path: "/portfolio", element: <PortfolioPage /> },
    { path: "*", element: <Navigate to="/exchange" /> },
  ]);

  return routes;
}
