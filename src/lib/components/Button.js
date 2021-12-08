import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  position: relative;
  display: inline-block;
  padding: 5px 10px;
  width: fit-content;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.color};
  font-size: ${({ theme }) => theme.fonts.button};
  font-family: ${({ theme }) => theme.fontFamilyDefault};
  line-height: 42px;
  outline: 2px solid white;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.backgroundColor};
    background: ${({ theme }) => theme.color};
  }
`;

function Button(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

export default Button;
