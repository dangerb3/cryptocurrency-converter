import {
  exchangeAction,
  setChartAction,
  setIsLoadingAction,
} from "../store/exchangeReducer";

import { setTotalAction } from "../store/portfolioReducer";

export const fetchCurrencies = (fromCurrency, toCurrency) => {
  return function (dispatch) {
    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${fromCurrency}&vs_currencies=${toCurrency}`
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch(exchangeAction(json[fromCurrency][toCurrency]));
        // console.log(json);
      });
  };
};

export const convertCurrency = async (fromCurrency, toCurrency) => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${fromCurrency}&vs_currencies=${toCurrency}`
  );
  const json = await response.json();
  return json[fromCurrency][toCurrency];
};

export const fetchHistoricalCoinData = (
  days = 14,
  fromCurrency,
  toCurrency
) => {
  return function (dispatch) {
    dispatch(setIsLoadingAction(true));

    fetch(
      `https://api.coingecko.com/api/v3/coins/${fromCurrency}/market_chart?vs_currency=${toCurrency}&days=${days}`
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch(setChartAction(json.prices));
        console.log("req", json.prices);
        dispatch(setIsLoadingAction(false));
      });
    // const response = await fetch(
    //   `https://api.coingecko.com/api/v3/coins/${fromCurrency}/market_chart?vs_currency=${toCurrency}&days=${days}`
    // );
    // const data = await response.json();
    // dispatch(setChartAction(data));
  };
};
