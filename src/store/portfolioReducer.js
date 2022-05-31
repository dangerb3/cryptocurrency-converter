const defaultState = {
  btc: 2,
  eth: 10,
  usd: 1000,
};

export const portfolioReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "BTC_CHANGE":
      return { ...state, btc: action.payload + state.btc };
    case "ETH_CHANGE":
      return { ...state, eth: action.payload + state.eth };
    case "USD_CHANGE":
      return { ...state, usd: action.payload + state.usd };

    default:
      return state;
  }
};
