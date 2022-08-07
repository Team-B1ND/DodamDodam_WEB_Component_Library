import React from "react";
import { DropdownContainer } from "./Dropdown.style";

interface DropdownProps<T extends { idx: number | string }> {
  itemkey: string;
  disabled: boolean;
  disabledItem: string;
  withDefault: boolean;
  defaultItem: string;
  name?: string;
  items: T[];
  itemsValuePath: string;
  onChange: any;
}

const Dropdown = <T extends { idx: number | string }>({
  itemkey,
  disabled,
  disabledItem,
  withDefault,
  defaultItem = "",
  name = "",
  items,
  itemsValuePath,
  onChange,
}: DropdownProps<T>) => {
  const paths = itemsValuePath.split("/");

  let itemValuePath: any[] = [];

  const findValue = (team: any, depth: number) => {
    depth++;
    const current = team[paths[depth]];
    if (depth === paths.length - 1) {
      itemValuePath.push(current);
    } else {
      findValue(current, depth);
    }
  };

  for (let i = 0; i < items.length; i++) {
    findValue(items[i], -1);
  }

  return (
    <DropdownContainer
      onChange={onChange}
      defaultValue={
        disabled
          ? `${itemkey} disabled`
          : withDefault
          ? `${itemkey} default`
          : `${itemValuePath[0]}`
      }
      name={name}
      disabled={disabled}
    >
      <option
        key={`${itemkey} disabled`}
        disabled
        hidden
        value={`${itemkey} disabled`}
      >
        {disabledItem}
      </option>

      {withDefault && (
        <option key={`${itemkey} default`} value={`${itemkey} default`}>
          {defaultItem}
        </option>
      )}

      {items.map((item, idx) => (
        <option
          key={`${itemkey} ${itemValuePath[idx]}`}
          value={`${itemValuePath[idx]}`}
        >
          {itemValuePath[idx]}
        </option>
      ))}
    </DropdownContainer>
  );
};

export default Dropdown;
