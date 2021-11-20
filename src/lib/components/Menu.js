import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useOnClickOutside } from "lib/hooks";

const StyledBurger = styled.button`
  position: absolute;
  top: 30px;
  ${({ side }) => (side === "left" ? "left" : "right")}: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open, theme }) =>
      open ? theme.backgroundColor : theme.color};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #effffa;
  transform: ${({ open, side }) =>
    open ? "translateX(0%)" : `translateX(${side === "left" ? "-" : "+"}100%)`};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  ${({ side }) => (side === "left" ? "left" : "right")}: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.linkHover};
    }
  }
`;

function Menu({ side, links }) {
  const [open, setOpen] = React.useState(false);
  const menuRef = React.useRef();

  useOnClickOutside(menuRef, () => setOpen(false));

  return (
    <div ref={menuRef}>
      <StyledBurger side={side} open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <StyledMenu side={side} open={open}>
        {links.map((x, i) => (
          <Link key={i} to={x.href}>
            {x.name}
          </Link>
        ))}
      </StyledMenu>
    </div>
  );
}

export default Menu;
