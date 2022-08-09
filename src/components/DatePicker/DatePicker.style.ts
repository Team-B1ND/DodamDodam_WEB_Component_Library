import styled from "styled-components";
import { palette } from "../../styles/palette";

export const DatePickerContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.contrast};
  position: relative;

  &:hover {
    border-bottom: 1px solid ${palette.main};
  }
`;

export const DatePickerWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 7px 0px;
  color: ${({ theme }) => theme.contrast};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const DatePickerDate = styled.span`
  color: ${({ theme }) => theme.contrast};
`;

export const DatePickerButton = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  color: ${({ theme }) => theme.contrast};
  border: 0px;
  cursor: pointer;
`;

export const DatePickerButtonIcon = styled.div``;

export const DatePickerCalendar = styled.div<{ containerHeight: number }>`
  width: 310px;
  height: 305px;
  background-color: white;
  position: absolute;
  left: 50%;
  top: ${({ containerHeight }) => containerHeight + 1}px;
  transform: translate(-50%, -0%);
  box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),
    0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
`;
