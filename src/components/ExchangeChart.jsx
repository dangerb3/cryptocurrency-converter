import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchHistoricalCoinData } from "../api/requests";
import { parseCurrencies } from "../utils/utils";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Chart() {
  const dispatch = useDispatch();
  const fromCurrency = useSelector((state) => state.exchange.fromCurrency);
  const toCurrency = useSelector((state) => state.exchange.toCurrency);
  const chartData = useSelector((state) => state.exchange.chartData);

  const getData = () => {
    dispatch(fetchHistoricalCoinData(14, fromCurrency, toCurrency));
  };

  useEffect(() => {
    getData();
    console.log(chartData);
  }, [fromCurrency, toCurrency]);

  return (
    <div className="main-block__chart _container">
      <ResponsiveContainer>
        <LineChart
          width={1000}
          height={300}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Price" stroke="#000000" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
