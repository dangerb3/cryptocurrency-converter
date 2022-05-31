import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

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
    { name: "BTC", price: btcBalance },
    { name: "ETH", price: ethBalance },
    { name: "USD", price: usdBalance },
  ];

  useEffect(() => {}, [btcBalance, ethBalance, usdBalance]);

  return (
    <div className="portfolio-block__chart _container">
      <ResponsiveContainer>
        <BarChart
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
          <Bar fill="white" type="monotone" dataKey="price" stroke="#000000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
