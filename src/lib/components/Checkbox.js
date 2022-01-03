import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  input[type="checkbox"] {
    accent-color: ${({ theme }) => theme.colors.lightRed};
  }
`;

const StyledLabel = styled.label`
  margin-left: 5px;
  color: ${({ theme }) => theme.colors.white};
`;

export default function Checkbox({ label, style, ...rest }) {
  return (
    <Wrapper style={style}>
      <input {...rest} type="checkbox" />
      <StyledLabel>{label}</StyledLabel>
    </Wrapper>
  );
}
