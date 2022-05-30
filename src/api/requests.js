import {
  exchangeAction,
  setChartAction,
  setIsLoadingAction,
} from "../store/exchangeReducer";

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

export const fetchHistoricalCoinData = (
  days = 14,
  fromCurrency,
  toCurrency
) => {
  return async function (dispatch) {
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
