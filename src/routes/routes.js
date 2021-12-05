import React from "react";

import { Page404 } from "pages";
import { HomePage, SuggestionPage } from "features";
import { LINKS } from "lib/constants/links";

export const ROUTES = [
  {
    exact: true,
    path: LINKS.BASE.path,
    element: <HomePage />,
  },
  {
    exact: true,
    path: LINKS.HOME.path,
    element: <HomePage />,
  },
  {
    exact: true,
    path: LINKS.ACTIVITY_SUGGESTION.path,
    element: <SuggestionPage />,
  },
  {
    path: LINKS.PAGE404.path,
    element: <Page404 />,
  },
];

export default ROUTES;
