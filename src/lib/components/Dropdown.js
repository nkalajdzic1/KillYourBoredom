import React, { useRef, useState } from "react";
import styled from "styled-components";

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
  min-width: 120px;
`;

const DefaultDropdownMenu = styled.div`
  z-index: 1;
  position: absolute;
  top: 60px;
  width: 100%;
  color: ${({ theme }) => theme.backgroundColor};
  background-color: ${({ theme }) => theme.color};
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

const Item = ({ item, onClick }) => {
  return (
    <DefaultMenuItem onClick={() => onClick(item)}>{item.name}</DefaultMenuItem>
  );
};

function Dropdown({
  items = [
    { value: "None", name: "None" },
    { value: "None1", name: "None1" },
  ],
  CustomMenu = DefaultDropdownMenu,
  MenuItem = Item,
  ...rest
}) {
  const [dropdownValue, setDropdownValue] = useState(items[0]);
  const dropdownRef = useRef();

  const [open, toggleOpen] = useToggle();

  useOnClickOutside(dropdownRef, () => open && toggleOpen());

  const onItemClick = (item) => {
    setDropdownValue(item);
    toggleOpen();
  };

  return (
    <Wrapper ref={dropdownRef}>
      <DropdownButton onClick={() => toggleOpen()}>
        {dropdownValue.name}
      </DropdownButton>
      {open && (
        <CustomMenu>
          {items.map((x, i) => (
            <MenuItem
              key={`dropdown-item-${i}`}
              item={x}
              onClick={onItemClick}
              {...rest}
            />
          ))}
        </CustomMenu>
      )}
    </Wrapper>
  );
}

export default Dropdown;
