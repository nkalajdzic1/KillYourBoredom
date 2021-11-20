import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import theme from "lib/styles/theme";
import GlobalStyle from "lib/styles/GlobalStyle";
import App from "lib/App";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme.blackTheme}>
      <GlobalStyle theme={theme.blackTheme} />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
