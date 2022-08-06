import React from "react";
import {
  TextAreaContainer,
  TextAreaLength,
  TextAreaWrap,
} from "./TextArea.style";

interface TextAreaProps {
  width: string | number;
  height: string | number;
  text: string;
  placeHolder: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  textMaxLength: number;
  name?: string;
  fontSize?: string | number;
}

const TextArea = ({
  width,
  height,
  fontSize = 12,
  text,
  placeHolder,
  onChange,
  textMaxLength,
  name = "none",
}: TextAreaProps) => {
  return (
    <TextAreaContainer style={{ width, height }}>
      <TextAreaWrap
        value={text}
        onChange={onChange}
        placeholder={placeHolder}
        name={name}
      />
      <TextAreaLength
        isExcess={textMaxLength < text.length}
        style={{ fontSize }}
      >
        {text.length}/{textMaxLength}
      </TextAreaLength>
    </TextAreaContainer>
  );
};

export default TextArea;
