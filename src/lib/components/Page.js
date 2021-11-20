import React from "react";
import Header from "./Header";

function Page({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Page;
