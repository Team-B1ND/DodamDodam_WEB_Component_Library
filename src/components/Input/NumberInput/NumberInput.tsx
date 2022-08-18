import React from "react";
import { CSSProperties } from "styled-components";
import { NumberInputContainer } from "./NumberInput.style";

interface NumberInputProps {
  width: number | string;
  onChange: any;
  value: number;
  name?: string;
  customStyle?: CSSProperties;
  placeholder?: string;
}

const NumberInput = ({
  width,
  onChange,
  value,
  name,
  customStyle,
  placeholder,
}: NumberInputProps) => {
  return (
    <NumberInputContainer
      style={{ width, ...customStyle }}
      onChange={onChange}
      type="number"
      name={name}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default React.memo(NumberInput);
