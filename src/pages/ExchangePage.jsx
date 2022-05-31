import React from "react";
import Chart from "../components/ExchangeChart";
import { Exchange } from "../components/Exchange";

export const ExchangePage = () => {
  return (
    <main className="page">
      <Exchange />
      <Chart />
    </main>
  );
};
