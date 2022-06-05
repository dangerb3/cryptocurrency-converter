import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrencies } from "../api/requests";
import { useEffect, useRef } from "react";
import { parseCurrencies } from "../utils/utils";

export const Exchange = () => {
  const dispatch = useDispatch();

  const toAmount = useSelector((state) => state.exchange.toAmount);
  const fromCurrency = useSelector((state) => state.exchange.fromCurrency);
  const toCurrency = useSelector((state) => state.exchange.toCurrency);

  const setFromCurrency = (e) => {
    dispatch({ type: "SET_VARS", payload: { fromCurrency: e } });
  };
  const setFromAmount = (e) => {
    dispatch({ type: "SET_VARS", payload: { fromAmount: e } });
  };
  const setToCurrency = (e) => {
    dispatch({ type: "SET_VARS", payload: { toCurrency: e } });
  };

  const preventRepeatCurrencies = () => {
    if (toRef.current.value === fromRef.current.value) {
      if (fromRef.current.value !== "USD") toRef.current.value = "USD";
      else if (fromRef.current.value !== "BTC") toRef.current.value = "BTC";
      else if (fromRef.current.value !== "ETH") toRef.current.value = "ETH";
    }
  };

  const toRef = useRef();
  const fromRef = useRef();
  const fromAmountRef = useRef();
  const toAmountRef = useRef();

  const convert = () => {
    setFromAmount(fromAmountRef.current.value);

    dispatch(fetchCurrencies(fromCurrency, toCurrency));
  };

  useEffect(() => {
    dispatch(fetchCurrencies(fromCurrency, toCurrency));

    preventRepeatCurrencies();
  }, []);
  return (
    <div className="page__main-block _container">
      <div className="main-block__body">
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
            ref={fromAmountRef}
            type="text"
            className="currencies__from"
            onChange={(e) => setFromAmount(e.target.value)}
            defaultValue={1}
          />
          <img src="img/exchange/1.svg" alt="exchange" />{" "}
          <select ref={toRef} onChange={(e) => setToCurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
          </select>
          <input
            ref={toAmountRef}
            type="text"
            value={toAmount}
            className="currencies__to"
            readOnly="readonly"
          />
          <button
            onClick={() => {
              convert();
            }}
            className="currencies__button button"
          >
            Convert
          </button>
        </div>
      </div>
    </div>
  );
};
