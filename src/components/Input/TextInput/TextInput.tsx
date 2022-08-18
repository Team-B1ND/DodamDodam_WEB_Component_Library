import React, { CSSProperties } from "react";
import { TextInputContainer } from "./TextInput.style";

interface TextInputProps {
  width: number | string;
  onChange: any;
  value: any;
  name?: string;
  customStyle?: CSSProperties;
  placeHolder?: string;
}

const TextInput = ({
  width,
  onChange,
  value,
  name,
  customStyle,
  placeHolder,
}: TextInputProps) => {
  return (
    <TextInputContainer
      style={{ width, ...customStyle }}
      onChange={onChange}
      type="text"
      name={name}
      value={value}
      placeholder={placeHolder}
    />
  );
};

export default React.memo(TextInput);
