import React from "react";
import styled from "styled-components";

import Menu from "./Menu";
import { LINKS } from "lib/constants/links";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 25px 25px;
`;

const Logo = styled.div`
  font-size: ${({ theme }) => theme.fonts.logo};
  font-family: "Megrim", cursive;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color};
`;

const links = [
  {
    name: "HOME",
    href: LINKS.BASE.path,
  },
  {
    name: "GOT BORED?",
    href: LINKS.ACTIVITY_SUGGESTION.path,
  },
  {
    name: "Contact",
    href: LINKS.BASE.path,
  },
];

function Header() {
  return (
    <HeaderWrapper>
      <StyledLink to={LINKS.BASE.path}>
        <Logo>Kill your boredom</Logo>
      </StyledLink>
      <Menu side="right" links={links} />
    </HeaderWrapper>
  );
}

export default Header;
