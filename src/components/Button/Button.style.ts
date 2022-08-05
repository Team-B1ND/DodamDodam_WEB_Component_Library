import styled, { css } from "styled-components";
import { palette } from "../../styles/palette";

export const ButtonContainer = styled.div<{
  type: "common" | "primary";
  disabeld: boolean;
}>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${({ type }) =>
    type === "common" &&
    css`
      border: 1px solid ${({ theme }) => theme.borderColor};
      background-color: ${({ theme }) => theme.backgroundColor3};
      color: ${({ theme }) => theme.contrast};
    `};

  ${({ type }) =>
    type === "primary" &&
    css`
      border: 0px;
      background-color: ${palette.main};
      color: white;
    `};

  ${({ disabeld }) =>
    disabeld &&
    css`
      cursor: default;
      opacity: 50%;
    `};
`;
