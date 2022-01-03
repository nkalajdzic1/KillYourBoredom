import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 90px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 30px;

  & > input {
    border: 1px solid
      ${({ theme, isError }) => (isError ? theme.errorColor : theme.color)};
    background-color: transparent;
    color: ${({ theme }) => theme.color};
    outline: none;
    padding: 12px;
    font-size: 16px;
    transition: all 0.2s ease;
    z-index: 500;
  }
  & > label {
    color: ${({ theme, isError }) =>
      isError ? theme.errorColor : theme.color};
    position: absolute;
    top: 10px;
    left: 15px;
    transition: all 0.2s ease;
    z-index: 500;

    ${(props) =>
      props.focused &&
      `
      font-size: 12px;
      transform: translateY(-20px) translateX(-5px);
      z-index: 501;
      background: ${props.theme.backgroundColor};
      padding: 0 8px;
    `}
  }
`;

const Error = styled.div`
  font-size: 10px;
  color: ${({ theme }) => theme.errorColor};
`;

/**
 * @param {string} value - the value of the controlled input
 * @param {string} type - the type of input we'll deal with
 * @param {string} label - the label used to designate info on how to fill out the input
 * @param {string | undefined} error message if the input is invalid
 * @param {function} onChange - function called when the input value changes
 * @param {function} onFocus - function called when the input is focused
 * @param {function} onBlur - function called when the input loses focus
 * @param {function} setRef - function used to add this input as a ref for a parent component
 */
const Input = ({
  value,
  type,
  label,
  error,
  onChange,
  onFocus,
  onBlur,
  setRef,
  ...props
}) => {
  const [focused, setFocused] = React.useState(false);

  const handleOnFocus = () => {
    setFocused(true);
    onFocus();
  };

  const handleOnBlur = (val) => {
    setFocused(false);
    onBlur(val);
  };

  const renderLabel = () => label && <label>{label}</label>;

  const isFocused = focused || String(value).length || type === "date";

  return (
    <Wrapper>
      <InputContainer focused={isFocused} isError={error}>
        {renderLabel()}
        <input
          value={value}
          type={type}
          onChange={(e) => onChange(e.target.value)}
          onFocus={handleOnFocus}
          onBlur={(e) => handleOnBlur(e.target.value)}
          ref={(ref) => setRef(ref)}
          {...props}
        />
      </InputContainer>
      {error && <Error>{error}</Error>}
    </Wrapper>
  );
};

Input.defaultProps = {
  type: "text",
  label: "",
  onChange: (text) => {
    console.error(`Missing onChange prop: ${text}`);
  },
  onFocus: () => {},
  onBlur: () => {},
  setRef: () => {},
};

export default Input;
