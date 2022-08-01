import React from "react";
import "./Button.css";

interface ButtonProps {
  title: string;
}

const Button = ({ title = "버튼" }: ButtonProps) => {
  return <button className="ButtonContainer">{title}</button>;
};

export default Button;
