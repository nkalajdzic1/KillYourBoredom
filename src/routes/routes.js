import React from "react";

import { Page404 } from "pages";
import { HomePage, SuggestionPage } from "features";
import { LINKS } from "lib/constants/links";

export const ROUTES = [
  {
    exact: true,
    path: LINKS.BASE.path,
    title: "Home",
    element: <HomePage />,
  },
  {
    exact: true,
    path: LINKS.HOME.path,
    title: "Home",
    element: <HomePage />,
  },
  {
    exact: true,
    path: LINKS.ACTIVITY_SUGGESTION.path,
    title: "Suggestions",
    element: <SuggestionPage />,
  },
  {
    path: LINKS.PAGE404.path,
    title: "404",
    element: <Page404 />,
  },
];

export default ROUTES;
