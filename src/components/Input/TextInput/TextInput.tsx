import React, { CSSProperties } from "react";
import { TextInputContainer } from "./TextInput.style";

interface TextInputProps {
  width: number | string;
  onChange: any;
  value: any;
  name?: string;
  customStyle?: CSSProperties;
}

const TextInput = ({
  width,
  onChange,
  value,
  name,
  customStyle,
}: TextInputProps) => {
  return (
    <TextInputContainer
      style={{ width, ...customStyle }}
      onChange={onChange}
      type="text"
      name={name}
      value={value}
    />
  );
};

export default React.memo(TextInput);
