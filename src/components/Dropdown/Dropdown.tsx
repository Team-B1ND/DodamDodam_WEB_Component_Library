import React from "react";
import { DropdownContainer } from "./Dropdown.style";

interface DropdownProps<
  T extends { idx: number | string },
  T1 extends { idx: number | string }
> {
  key: string;
  disabled: boolean;
  disabledItem: string;
  withDefault: boolean;
  defaultItem?: string;
  name?: string;
  items: T[];
  onChange: any;
  compareItem: T[];
}

const Dropdown = <
  T extends { idx: number | string },
  T1 extends { idx: number | string }
>({
  key,
  disabled,
  disabledItem,
  withDefault,
  defaultItem = "",
  name = "none",
  items,
  compareItem,
  onChange,
}: DropdownProps<T, T1>) => {
  return (
    <DropdownContainer
      onChange={onChange}
      defaultValue={disabled ? `${key} disabled` : `${key} default`}
      name={name}
    >
      <option key={`${key} disabled`} disabled hidden value={`${key} disabled`}>
        {disabledItem}
      </option>

      {withDefault && (
        <option key={`${key} default`} value={`${key} default`}>
          {defaultItem}
        </option>
      )}

      {items.map((item, idx) => (
        <option
          key={item.idx}
          selected={item.idx === compareItem[idx].idx}
        ></option>
      ))}
    </DropdownContainer>
  );
};

export default Dropdown;
