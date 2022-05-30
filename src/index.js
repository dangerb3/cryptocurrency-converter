import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import { PublicRouter } from "./router/routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <PublicRouter />
    </BrowserRouter>
  </Provider>
);
