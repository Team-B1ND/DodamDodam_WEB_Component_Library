import React, { CSSProperties } from "react";
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
  customStyle?: CSSProperties;
  textAreaFontSize?: string | number;
}

const TextArea = ({
  width,
  height,
  text,
  placeHolder,
  onChange,
  textMaxLength,
  name = "none",
  customStyle,
  textAreaFontSize = 12,
}: TextAreaProps) => {
  return (
    <TextAreaContainer style={{ width, height, ...customStyle }}>
      <TextAreaWrap
        value={text}
        onChange={onChange}
        placeholder={placeHolder}
        name={name}
        style={{ fontSize: textAreaFontSize }}
      />
      <TextAreaLength isExcess={textMaxLength < text.length}>
        {text.length}/{textMaxLength}
      </TextAreaLength>
    </TextAreaContainer>
  );
};

export default TextArea;
