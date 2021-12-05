import React from "react";

import { Header } from "lib/components";

function Page({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Page;
