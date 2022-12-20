import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ModalProvider } from "./context/ModalContext";
import { ThemeProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <ThemeProvider>
    <ModalProvider>
      <App />
    </ModalProvider>
  </ThemeProvider>,
);
