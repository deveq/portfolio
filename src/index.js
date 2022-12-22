import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ModalProvider } from "./context/ModalContext";
import { ThemeProvider } from "./context/ThemeContext";
import { ProjectModalProvider } from "./context/ProjectModalContext";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <ProjectModalProvider>
    <ThemeProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </ThemeProvider>
  </ProjectModalProvider>,
);
