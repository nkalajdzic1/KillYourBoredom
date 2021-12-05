import React from "react";
import styled from "styled-components";

const StyledLabel = styled.div`
  font-size: ${({ theme, size }) => (size ? size : theme.fonts.label)};
  color: ${({ theme, color }) => (color ? color : theme.color)};
`;

export default function Label({ children, className }) {
  return <StyledLabel className={className}>{children}</StyledLabel>;
}
