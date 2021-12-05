import React from "react";
import styled from "styled-components";

const LoaderComponent = styled.div`
  display: inline-block;
  position: relative;
  ${({ size }) => `
    width: ${size ? size : 80}px;
    height: ${size ? size : 80}px;
  `}

  div {
    position: absolute;
    border: ${({ size }) => (size ? size / 20 : 4)}px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: loader-animation 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes loader-animation {
    0% {
      ${({ size }) => `
        top: ${size ? (size - 8) / 2 : 36}px;
        left: ${size ? (size - 8) / 2 : 36}px;
      `}
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      ${({ size }) => `
        width: ${size ? size - 8 : 72}px;
        height: ${size ? size - 8 : 72}px;
      `}
      opacity: 0;
    }
  }
`;

function Loader({ size, style }) {
  return (
    <LoaderComponent style={style} size={size}>
      <div></div>
      <div></div>
    </LoaderComponent>
  );
}

export default Loader;
