import React from "react";
import styled from "styled-components";

import Menu from "./Menu";
import { LINKS } from "lib/constants/links";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;
`;

const links = [
  {
    name: "About us",
    href: LINKS.BASE.path,
  },
  {
    name: "Pricing",
    href: LINKS.BASE.path,
  },
  {
    name: "Contact",
    href: LINKS.BASE.path,
  },
];

function Header() {
  return (
    <HeaderWrapper>
      <div>Lorem ipsum</div>
      <Menu side="right" links={links} />
    </HeaderWrapper>
  );
}

export default Header;
