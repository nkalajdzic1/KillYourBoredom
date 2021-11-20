import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Home, Page404 } from "Pages";
import theme from "lib/styles/theme";
import GlobalStyle from "lib/styles/GlobalStyle";

export const ROUTES = {
  BASE: {
    exact: true,
    path: "/",
    element: <Home />,
  },
  HOME: {
    exact: true,
    path: "/landing",
    element: <Home />,
  },
  PAGE404: {
    path: "*",
    element: <Page404 />,
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme.blackTheme}>
      <GlobalStyle theme={theme.blackTheme} />
      <Router>
        <Routes>
          {Object.keys(ROUTES).map((x, index) => (
            <Route {...ROUTES[x]} key={index} />
          ))}
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
