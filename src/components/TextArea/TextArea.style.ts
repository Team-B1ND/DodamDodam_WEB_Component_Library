import styled from "styled-components";

export const TextAreaContainer = styled.textarea<{
  width: number;
  height: number;
}>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  padding: 5px;

  &:focus {
  }
`;
