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
}

const TextArea = ({
  width,
  height,
  text,
  placeHolder,
  onChange,
  textMaxLength,
}: TextAreaProps) => {
  return (
    <TextAreaContainer width={Number(width)} height={Number(height)}>
      <TextAreaWrap
        value={text}
        onChange={onChange}
        placeholder={placeHolder}
      />
      <TextAreaLength isExcess={textMaxLength < text.length}>
        {text.length}/{textMaxLength}
      </TextAreaLength>
    </TextAreaContainer>
  );
};

export default TextArea;
