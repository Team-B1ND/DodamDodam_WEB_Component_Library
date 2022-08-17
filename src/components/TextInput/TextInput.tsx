import React, { CSSProperties, HTMLInputTypeAttribute } from "react";
import { TextInputContainer } from "./TextInput.style";

interface TextInputProps {
  width: number | string;
  onChange: any;
  value: any;
  type?: HTMLInputTypeAttribute;
  name?: string;
  customStyle?: CSSProperties;
}

const TextInput = ({
  width,
  onChange,
  value,
  type = "text",
  name,
  customStyle,
}: TextInputProps) => {
  return (
    <TextInputContainer
      style={{ width, ...customStyle }}
      onChange={onChange}
      type={type}
      name={name}
      value={value}
    />
  );
};

export default TextInput;
