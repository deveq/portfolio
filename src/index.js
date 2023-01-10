import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ModalProvider } from "./context/ModalContext";
import { ThemeProvider } from "./context/ThemeContext";
import { ProjectModalProvider } from "./context/ProjectModalContext";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <ProjectModalProvider>
    <ThemeProvider>
      <ModalProvider>
        <Router>
          <App />
        </Router>
      </ModalProvider>
    </ThemeProvider>
  </ProjectModalProvider>,
);
