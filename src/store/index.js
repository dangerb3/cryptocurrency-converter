import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { exchangeReducer } from "./exchangeReducer";
import { portfolioReducer } from "./portfolioReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  exchange: exchangeReducer,
  portfolio: portfolioReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
