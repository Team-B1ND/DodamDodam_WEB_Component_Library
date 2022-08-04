import styled, { css } from "styled-components";
import { palette } from "../../styles/palette";

export const ButtonContainer = styled.div<{
  width: number;
  height: number;
  type: "common" | "primary";
  disabeld: boolean;
}>`
  width: ${({ width }) => width}px;
  width: ${({ height }) => height}px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.contrast};
  font-size: 80%;

  ${({ type }) =>
    type === "common" &&
    css`
      border: 1px solid ${({ theme }) => theme.borderColor};
      background-color: ${({ theme }) => theme.backgroundColor3};
    `};

  ${({ type }) =>
    type === "primary" &&
    css`
      border: 0px;
      background-color: ${palette.main};
    `};

  ${({ disabeld }) =>
    disabeld &&
    css`
      cursor: default;
      opacity: 80%;
    `};
`;
