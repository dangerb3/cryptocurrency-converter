const defaultState = {
  fromCurrency: "BTC",
  toCurrency: "USD",
  fromAmount: 1,
  toAmount: 1,
  chartData: [],
  isLoading: true,
};

export const exchangeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "EXCHANGE":
      return { ...state, toAmount: action.payload * state.fromAmount };
    case "SET_VARS":
      return Object.assign(state, action.payload);
    case "SET_CHART-DATA":
      return { ...state, chartData: [...action.payload] };
    case "SET_IS-LOADING":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export const exchangeAction = (payload) => ({ type: "EXCHANGE", payload });
export const setChartAction = (payload) => ({
  type: "SET_CHART-DATA",
  payload,
});
export const setIsLoadingAction = (payload) => ({
  type: "SET_IS-LOADING",
  payload,
});
