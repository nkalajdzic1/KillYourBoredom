import React, { useRef } from "react";
import styled from "styled-components";
import { AiOutlineCaretDown } from "react-icons/ai";

import { Button } from "lib/components";
import { useOnClickOutside, useToggle } from "lib/hooks";

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  min-width: 120px;
`;

const DropdownButton = styled(Button)`
  outline: none;
  border-bottom: 1px solid ${({ theme }) => theme.color};
  min-width: 150px;
`;

const DefaultDropdownMenu = styled.div`
  z-index: 999;
  position: absolute;
  top: 60px;
  width: 100%;
  color: ${({ theme }) => theme.backgroundColor};
  background-color: ${({ theme }) => theme.color};
  max-height: 300px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const DefaultMenuItem = styled.div`
  padding: 10px 10px;
  transition: all 0.3s ease;

  &:not(:last-child) {
    border-bottom: 3px solid ${({ theme }) => theme.backgroundColor};
  }

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.lightGrey};
  }
`;

const StyledArrowDownIcon = styled(AiOutlineCaretDown)`
  position: absolute;
  top: 17px;
  right: 7px;
`;

const StyledLabel = styled.div`
  padding-right: 20px;
`;

const Item = ({ item, onClick }) => {
  return (
    <DefaultMenuItem onClick={() => onClick(item)}>{item.name}</DefaultMenuItem>
  );
};

function Dropdown({
  items = [{ value: "None", name: "None" }],
  CustomMenu = DefaultDropdownMenu,
  MenuItem = Item,
  value,
  onChange,
  ...rest
}) {
  const dropdownRef = useRef();
  const [open, toggleOpen] = useToggle();

  useOnClickOutside(dropdownRef, () => open && toggleOpen());

  const onItemClick = (item) => {
    onChange && onChange(item);
    toggleOpen();
  };

  return (
    <Wrapper ref={dropdownRef}>
      <DropdownButton onClick={() => toggleOpen()}>
        <StyledLabel>{value.name}</StyledLabel>
        <StyledArrowDownIcon />
      </DropdownButton>
      {open && (
        <CustomMenu>
          {items.map((x, i) => (
            <MenuItem
              key={`dropdown-item-${i}`}
              item={x}
              onClick={() => onItemClick(x)}
              {...rest}
            />
          ))}
        </CustomMenu>
      )}
    </Wrapper>
  );
}

export default Dropdown;
