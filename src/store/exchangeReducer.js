import { store } from ".";
const redux = require("redux");

const defaultState = {
  fromCurrency: "BTC",
  toCurrency: "USD",
  fromAmount: 1,
  toAmount: 1,
  chartData: [],
  isLoading: false,
};

export const exchangeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "EXCHANGE":
      return { ...state, toAmount: action.payload * state.fromAmount };
    case "SET_VARS":
      return Object.assign(state, action.payload);
    case "SET_CHART-DATA":
      return { ...state, chartData: action.payload };
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

// const dispatchChaining = () => async (dispatch) => {
//   await Promise.all([
//     dispatch(loadPosts()), // <-- async dispatch chaining in action
//     dispatch(loadProfile()),
//   ]);

//   return dispatch(updateDone());
// };

// const actions = redux.bindActionCreators({ dispatchChaining }, store.dispatch);
// const unsubscribe = store.subscribe(async () => console.log(store.getState()));

// actions.dispatchChaining().then(() => unsubscribe()); // <-- thenable
