import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrencies } from "../api/requests";
import { useEffect, useRef } from "react";
import { parseCurrencies } from "../utils/utils";
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
