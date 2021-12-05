import React from "react";
import styled from "styled-components";

import Menu from "./Menu";
import { LINKS } from "lib/constants/links";

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 40px 50px;
`;

const Logo = styled.div`
  font-size: ${({ theme }) => theme.fonts.logo};
  font-family: "Megrim", cursive;
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
      <Logo>Random Fake Users</Logo>
      <Menu side="right" links={links} />
    </HeaderWrapper>
  );
}

export default Header;
