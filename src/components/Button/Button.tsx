import React, { CSSProperties } from "react";
import { ButtonContainer } from "./Button.style";

interface ButtonProps {
  children: JSX.Element | string;
  width: string | number;
  height: string | number;
  onClick: any;
  disabled?: boolean;
  type?: "common" | "primary";
  customStyle?: CSSProperties;
}

const Button = ({
  width,
  height,
  children,
  onClick,
  disabled = false,
  type = "common",
  customStyle,
}: ButtonProps) => {
  return (
    <ButtonContainer
      style={{
        width,
        height,
        ...customStyle,
      }}
      type={type}
      onClick={disabled ? () => {} : onClick}
      disabeld={disabled}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
