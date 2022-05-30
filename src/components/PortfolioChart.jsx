import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { fetchHistoricalCoinData } from "../api/requests";
import { parseCurrencies, parseTimestamp } from "../utils/utils";

import { PureComponent } from "react";
import {
  LineChart,
  BarChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Bar,
} from "recharts";

export default function Chart() {
  const btcBalance = useSelector((state) => state.portfolio.btc);

  const ethBalance = useSelector((state) => state.portfolio.eth);

  const usdBalance = useSelector((state) => state.portfolio.usd);

  const chartData = [
    { name: "BTC", coin: btcBalance },
    { name: "ETH", coin: ethBalance },
    { name: "USD", coin: usdBalance },
  ];

  useEffect(() => {}, [btcBalance, ethBalance, usdBalance]);

  return (
    <div>
      <BarChart
        width={500}
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
        <Bar fill="white" type="monotone" dataKey="coin" stroke="#000000" />
      </BarChart>
    </div>
  );
}
