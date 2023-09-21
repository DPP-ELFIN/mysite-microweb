/** @format */

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "@/assets/css/index.less";
import { HashRouter } from "react-router-dom";
// import "animate.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>
);
