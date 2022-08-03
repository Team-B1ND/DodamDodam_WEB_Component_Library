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
  onChangeText: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  textMaxLength: number;
}

const TextArea = ({
  width,
  height,
  text,
  placeHolder,
  onChangeText,
  textMaxLength,
}: TextAreaProps) => {
  return (
    <TextAreaContainer width={Number(width)} height={Number(height)}>
      <TextAreaWrap
        value={text}
        onChange={onChangeText}
        placeholder={placeHolder}
      />
      <TextAreaLength isExcess={textMaxLength < Text.length}>
        {text.length}/{textMaxLength}
      </TextAreaLength>
    </TextAreaContainer>
  );
};

export default TextArea;
