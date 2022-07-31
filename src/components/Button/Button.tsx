import React from "react";

interface ButtonProps {
  title: string;
}

const Button = ({ title = "버튼" }: ButtonProps) => {
  return <button>{title}</button>;
};

export default Button;
