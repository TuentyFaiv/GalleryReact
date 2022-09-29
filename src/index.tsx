/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./pages/styles/index.scss";

import App from "./pages/App";

const element = document.getElementById("root")!;
const root = createRoot(element);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
