import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { fetchHistoricalCoinData } from "../api/requests";
import { parseCurrencies, parseTimestamp } from "../utils/utils";

import { PureComponent } from "react";
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
  const isLoading = useSelector((state) => state.exchange.isLoading);

  const chartData = useSelector((state) => state.exchange.chartData);
  const setChartData = (e) => {
    dispatch({ type: "SET_CHART-DATA", payload: e });
  };

  const getData = () => {
    dispatch(
      fetchHistoricalCoinData(
        14,
        parseCurrencies(fromCurrency),
        parseCurrencies(toCurrency)
      )
    );
  };

  const parseChartData = () => {
    // const parsedData = chartData.map((element) => ({
    //   name: element[0],
    //   coin: element[1],
    // }));
    // console.log("ddd", parsedData);
    setChartData(
      chartData.map((element) => ({
        name: parseTimestamp(element[0]),
        Price: element[1],
      }))
    );
    console.log("chart", chartData);
  };

  // getData();
  console.log("render");
  if (!isLoading) parseChartData();
  console.log(isLoading);
  useEffect(() => {}, []);

  return (
    <div className="main-block__chart">
      {/* <button onClick={() => parseChartData()}>He</button> */}
      {isLoading ? (
        "loading"
      ) : (
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
            <Line
              type="monotone"
              dataKey="Price"
              stroke="#000000"
              //   activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
