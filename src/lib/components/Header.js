import React from "react";
import styled from "styled-components";

import Menu from "./Menu";
import { LINKS } from "lib/constants/links";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 40px 50px;
`;

const MenuNav = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 700px) {
    display: none;
  }

  li > a {
    text-decoration: none;
    color: ${({ theme }) => theme.color};
  }
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
      <div>Logo</div>
      <MenuNav>
        {links.map((x, i) => (
          <li key={i}>
            <Link to={x.href}>{x.name}</Link>
          </li>
        ))}
      </MenuNav>
      <Menu side="right" disappearingWidth={700} links={links} />
    </HeaderWrapper>
  );
}

export default Header;
