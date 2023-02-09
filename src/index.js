import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store, { persistor } from "./store";
import { Provider } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { PersistGate } from "redux-persist/es/integration/react";
import { BrowserRouter } from "react-router-dom";
import ".././node_modules/bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
