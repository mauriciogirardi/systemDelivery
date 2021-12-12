import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import GlobalStyles from "styles/GlobalStyles";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
