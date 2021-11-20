import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home, Page404 } from "pages";
import { LINKS } from "./lib/constants/links";

export const ROUTES = [
  {
    exact: true,
    path: LINKS.BASE.path,
    element: <Home />,
  },
  {
    exact: true,
    path: LINKS.HOME.path,
    element: <Home />,
  },
  {
    path: LINKS.PAGE404.path,
    element: <Page404 />,
  },
];

function App() {
  return (
    <Router>
      <Routes>
        {ROUTES.map((x, i) => (
          <Route {...x} key={i} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
