import React from "react";
import { ButtonContainer } from "./Button.style";

interface ButtonProps {
  children: JSX.Element | string;
  width: string | number;
  height: string | number;
  onClick: any;
  disabled?: boolean;
  type?: "common" | "primary";
  fontSize?: string | number;
}

const Button = ({
  width,
  height,
  fontSize = 14,
  children,
  onClick,
  disabled = false,
  type = "common",
}: ButtonProps) => {
  return (
    <ButtonContainer
      style={{
        width,
        height,
        fontSize,
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
