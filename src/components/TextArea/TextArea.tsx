import React from "react";
import { TextAreaContainer } from "./TextArea.style";

interface TextAreaProps {
  width: string | number;
  height: string | number;
  text: string;
  placeHolder: string;
  onChangeText: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = ({
  width,
  height,
  text,
  placeHolder,
  onChangeText,
}: TextAreaProps) => {
  return (
    <TextAreaContainer
      width={Number(width)}
      height={Number(height)}
      placeholder={placeHolder}
      value={text}
      onChange={onChangeText}
    />
  );
};

export default TextArea;
