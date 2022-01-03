import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ROUTES } from "routes";

const RouteElementWrapper = ({ title, children }) => {
  document.title = `KillYourBoredom | ${title}`;

  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        {ROUTES.map((x, i) => (
          <Route
            {...x}
            element={
              <RouteElementWrapper title={x.title}>
                {x.element}
              </RouteElementWrapper>
            }
            key={i}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
