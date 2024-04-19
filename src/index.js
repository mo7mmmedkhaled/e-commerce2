import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ShopContextProvider from "./Context/ShopContext";
import { Provider } from "react-redux";
import store from "./Store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ShopContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ShopContextProvider>
  </React.StrictMode>
);
