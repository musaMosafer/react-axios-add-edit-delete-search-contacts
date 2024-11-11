import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

import App from "./App";

// import DApp from "./mdrill/D3_5_InitialState_initializerAndInitialState";
// import DApp from "./mdrill/D4_updateStateOnParentComponent";

// import TestApp from "./temp/TestApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <TestApp /> */}
      {/* <DApp /> */}
    </BrowserRouter>
  </React.StrictMode>
);
