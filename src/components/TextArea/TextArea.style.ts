import styled from "styled-components";
import { palette } from "../../styles/palette";

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
  background-color: ${({ theme }) => theme.backgroundColor3};
  box-sizing: border-box;
  font-size: 12px;
  overflow-y: hidden;
  color: ${({ theme }) => theme.contrast};

  &::-webkit-scrollbar {
    display: none;
  }

  &:focus {
    border: 1px solid ${palette.main};
  }
`;

export const TextAreaLength = styled.span<{ isExcess: boolean }>`
  position: absolute;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.contrast};
  bottom: 5px;
  right: 10px;

  ${({ isExcess }) => isExcess && `color : ${palette.red[300]}`};
`;
