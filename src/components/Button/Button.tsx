import React from "react";
import { ButtonContainer } from "./Button.style";

interface ButtonProps {
  children: JSX.Element;
  width: string | number;
  height: string | number;
  onClick: () => void | Promise<any>;
  disabled?: boolean;
  type?: "common" | "primary";
}

const Button = ({
  width,
  height,
  children,
  onClick,
  disabled = false,
  type = "common",
}: ButtonProps) => {
  return (
    <ButtonContainer
      width={Number(width)}
      height={Number(height)}
      type={type}
      onClick={disabled ? () => {} : onClick}
      disabeld={disabled}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
