import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrencies } from "../api/requests";
import { useEffect, useRef } from "react";
import { parseCurrencies } from "../utils/utils";
import Chart from "../components/ExchangeChart";

export const Exchange = () => {
  const dispatch = useDispatch();
  const fromAmount = useSelector((state) => state.exchange.fromAmount);
  //   console.log(state);
  const toAmount = useSelector((state) => state.exchange.toAmount);
  const fromCurrency = useSelector((state) => state.exchange.fromCurrency);
  //   console.log(state);
  const toCurrency = useSelector((state) => state.exchange.toCurrency);
  const chartData = useSelector((state) => state.exchange.chartData);

  const setFromCurrency = (e) => {
    console.log("currency", e);
    dispatch({ type: "SET_VARS", payload: { fromCurrency: e } });
    console.log("state", fromCurrency);
    // preventRepeatCurrencies();
  };
  const setFromAmount = (e) => {
    dispatch({ type: "SET_VARS", payload: { fromAmount: e } });
  };
  const setToCurrency = (e) => {
    dispatch({ type: "SET_VARS", payload: { toCurrency: e } });
  };
  const setToAmount = (e) => {
    const am = { toAmount: e };

    dispatch({ type: "SET_VARS", payload: am });
  };

  const preventRepeatCurrencies = () => {
    if ((toRef.current.value = fromRef.current.value)) {
      if (fromRef.current.value !== "ETH") toRef.current.value = "ETH";
      else if (fromRef.current.value !== "BTC") toRef.current.value = "BTC";
      else if (fromRef.current.value !== "USD") toRef.current.value = "USD";
    }
  };

  const toRef = useRef();
  const fromRef = useRef();

  const convert = () => {
    // if (fromCurrency === toCurrency) {
    //   setToCurrency(fromCurrency);
    //   return;
    // }
    console.log(toRef.current.value);

    dispatch(
      fetchCurrencies(
        parseCurrencies(fromCurrency),
        parseCurrencies(toCurrency)
      )
    );

    console.log("h", chartData);
    // console.log(fromCurrency);
    // toRef.current.value = toAmount;
  };

  useEffect(() => {
    dispatch(
      fetchCurrencies(
        parseCurrencies(fromCurrency),
        parseCurrencies(toCurrency)
      )
    );
  }, []);
  return (
    <div className="page__main-block _container">
      <div className="main-block__body">
        <h1 className="main-block__text">Please choose currencies </h1>
        <div className="main-block__currencies">
          <select
            ref={fromRef}
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
            <option value="USD">USD</option>
          </select>
          <input
            type="text"
            value={fromAmount}
            className="currencies__from"
            onChange={(e) => setFromAmount(e.target.value)}
          />
          <img src="img/exchange/1.svg" alt="exchange" />{" "}
          <select ref={toRef} onChange={(e) => setToCurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
          </select>
          <input
            type="text"
            value={toAmount}
            className="currencies__to"
            //   onChange={(e) => setToAmount(e.target.value)}
            readOnly="readonly"
          />
          <button
            onClick={() => {
              convert();
            }}
            className="currencies__button button"
            //   disabled={
            //     { ...fromCurrency } === { ...toCurrency } ? true : false
            //   }
          >
            Convert
          </button>
        </div>
      </div>
    </div>
  );
};
