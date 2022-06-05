import {
  exchangeAction,
  setChartAction,
  setIsLoadingAction,
} from "../store/exchangeReducer";

import { parseCurrencies, parseTimestamp } from "../utils/utils";

export const fetchCurrencies = (fromCurrency, toCurrency) => {
  return function (dispatch) {
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${toCurrency.toLowerCase()}&ids=${parseCurrencies(
        fromCurrency
      )}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch(exchangeAction(json[0].current_price));
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
      `https://api.coingecko.com/api/v3/coins/${parseCurrencies(
        fromCurrency
      )}/market_chart?vs_currency=${toCurrency.toLowerCase()}&days=${days}`
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch(
          setChartAction(
            json.prices.map((element) => ({
              name: parseTimestamp(element[0]),
              Price: element[1],
            }))
          )
        );
      });
  };
};
