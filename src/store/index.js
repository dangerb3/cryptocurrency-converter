import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { exchangeReducer } from "./exchangeReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  exchange: exchangeReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
