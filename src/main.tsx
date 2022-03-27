import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material";
import { ThemeUniverse } from "@core/themes";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={createTheme(ThemeUniverse.default)}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
