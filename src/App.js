import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ROUTES } from 'routes';

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
