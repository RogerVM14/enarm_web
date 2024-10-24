import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import store from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import "./app.css";
import { Toaster } from 'react-hot-toast';


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
let persistantStore = persistStore(store);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistantStore}>
        <App />
        <Toaster/>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
