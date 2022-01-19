import { StrictMode } from "react";
import { render } from "react-dom";

import "./pages/styles/index.scss";

import App from "./pages/App";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
