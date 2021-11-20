import { ROUTES } from "index";
import React from "react";
import styled from "styled-components";
import Menu from "./Menu";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;
`;

const links = [
  {
    name: "About us",
    href: ROUTES.BASE.path,
  },
  {
    name: "Pricing",
    href: ROUTES.BASE.path,
  },
  {
    name: "Contact",
    href: ROUTES.BASE.path,
  },
];

function Header() {
  return (
    <HeaderWrapper>
      <div style={{ fontSize: 25 }}>Lorem</div>
      <Menu side="right" links={links} />
    </HeaderWrapper>
  );
}

export default Header;
