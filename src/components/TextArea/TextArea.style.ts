import styled from "styled-components";

export const TextAreaContainer = styled.div<{
  width: number;
  height: number;
}>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  position: relative;
`;

export const TextAreaWrap = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  resize: none;
  outline: none;
  background-color: ${({ theme }) => theme.backgroundColor};
  box-sizing: border-box;

  &:focus {
    border: 1px solid ${({ theme }) => theme.mainColor};
  }
`;

export const TextAreaLength = styled.span<{ isExcess: boolean }>`
  position: absolute;
  font-size: 12px;
  line-height: 16px;
  color: #000000;
  bottom: 5px;
  right: 10px;

  ${({ isExcess }) => isExcess && `color : #e57373`};
`;
