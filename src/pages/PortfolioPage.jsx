import React from "react";
import { Portfolio } from "../components/Portfolio";
import Chart from "../components/PortfolioChart";

export const PortfolioPage = () => {
  return (
    <main className="page">
      <Portfolio />
      <Chart />
    </main>
  );
};
