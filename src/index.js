import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CookiesProvider } from "react-cookie";
import { HashRouter as Router } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./CSSManagement/GlobalStyles/index.js";

ReactDOM.render(
  <CookiesProvider>
    <Router>
      <App />
    </Router>
  </CookiesProvider>,
  document.getElementById("root")
);

registerServiceWorker();
