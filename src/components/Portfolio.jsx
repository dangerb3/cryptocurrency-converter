import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import Chart from "../components/PortfolioChart";
import { convertCurrency } from "../api/requests";
import { parseCurrencies } from "../utils/utils";

export const Portfolio = () => {
  const dispatch = useDispatch();

  const btcBalance = useSelector((state) => state.portfolio.btc);

  const setBtcBalance = (e) => {
    dispatch({ type: "BTC_CHANGE", payload: e });
  };

  const ethBalance = useSelector((state) => state.portfolio.eth);

  const setEthBalance = (e) => {
    dispatch({ type: "ETH_CHANGE", payload: e });
  };

  const usdBalance = useSelector((state) => state.portfolio.usd);

  const setUsdBalance = (e) => {
    dispatch({ type: "USD_CHANGE", payload: e });
  };

  const btcRef = useRef();
  const ethRef = useRef();
  const usdRef = useRef();
  const totalRef = useRef();

  const calculateTotal = async () => {
    const btcPrice = await convertCurrency(
      parseCurrencies("BTC"),
      parseCurrencies("USD")
    );
    const ethPrice = await convertCurrency(
      parseCurrencies("ETH"),
      parseCurrencies("USD")
    );

    totalRef.current.value =
      btcBalance * btcPrice + ethBalance * ethPrice + usdBalance;
  };

  useEffect(() => {
    calculateTotal();
    btcRef.current.value = btcBalance;
    ethRef.current.value = ethBalance;
    usdRef.current.value = usdBalance;
  }, [btcBalance, ethBalance, usdBalance]);
  return (
    <div className="page__portfolio-block _container">
      <div className="portfolio-block__body">
        <h1 className="portfolio-block__text">Balance BTC</h1>
        <div className="portfolio-block__currencies">
          <input
            ref={btcRef}
            type="number"
            //   value={btcBalance}
            className="portfolio-block__currencies-input"
            //   onChange={(e) => setBtcBalance(e.target.value)}
          />
          <div className="portfolio-block__change">
            <button
              className="currencies__button button"
              onClick={() => {
                setBtcBalance(Number(btcRef.current.value));
              }}
            >
              +
            </button>
            <button
              className="currencies__button button"
              onClick={() => {
                setBtcBalance(-Number(btcRef.current.value));
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>
      <div className="portfolio-block__body">
        <h1 className="portfolio-block__text">Balance ETH</h1>
        <div className="portfolio-block__currencies">
          <input
            ref={ethRef}
            type="number"
            //   value={ethBalance}
            className="portfolio-block__currencies-input"
            //   onChange={(e) => setEthBalance(e.target.value)}
          />
          <div className="portfolio-block__change">
            <button
              className="currencies__button button"
              onClick={() => {
                setEthBalance(Number(ethRef.current.value));
              }}
            >
              +
            </button>
            <button
              className="currencies__button button"
              onClick={() => {
                setEthBalance(-Number(ethRef.current.value));
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>
      <div className="portfolio-block__body">
        <h1 className="portfolio-block__text">Balance USD</h1>
        <div className="portfolio-block__currencies">
          <input
            ref={usdRef}
            type="number"
            //   value={usdBalance}
            className="portfolio-block__currencies-input"
            //   onChange={(e) => setUsdBalance(e.target.value)}
          />
          <div className="portfolio-block__change">
            <button
              className="currencies__button button"
              onClick={() => {
                setUsdBalance(Number(usdRef.current.value));
              }}
            >
              +
            </button>
            <button
              className="currencies__button button"
              onClick={() => {
                setUsdBalance(-Number(usdRef.current.value));
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>
      <div className="portfolio-block__body">
        <h1 className="portfolio-block__text">Total Balance in USD</h1>
        <div className="portfolio-block__currencies">
          <input
            ref={totalRef}
            type="number"
            //   value={usdBalance}
            className="portfolio-block__currencies-input"
            //   onChange={(e) => setUsdBalance(e.target.value)}
          />
        </div>
      </div>
      <div className="portfolio-block__chart"></div>
    </div>
  );
};