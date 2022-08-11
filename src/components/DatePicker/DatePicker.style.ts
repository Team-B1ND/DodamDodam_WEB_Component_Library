import styled, { css } from "styled-components";
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
  padding: 6px 0px;
  color: ${({ theme }) => theme.contrast};
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  box-sizing: border-box;
  position: relative;
`;

export const DatePickerDate = styled.span`
  color: ${({ theme }) => theme.contrast};
`;

export const DatePickerButton = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  color: ${({ theme }) => theme.contrast};
  border: 0px;
  cursor: pointer;
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translate(-0%, -50%);
  border-radius: 100%;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

export const DatePickerButtonIcon = styled.img`
  width: 18px;
  height: 18px;
  object-fit: scale-down;

  .DatePickerIconColor {
    fill: ${({ theme }) => theme.contrast};
  }
`;

export const DatePickerCalendar = styled.div<{ containerHeight: number }>`
  width: 310px;
  height: 310px;
  background-color: white;
  position: absolute;
  left: 50%;
  top: ${({ containerHeight }) => containerHeight + 1}px;
  transform: translate(-50%, -0%);
  border: 0px;
  box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),
    0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
  display: flex;
  flex-direction: column;
`;

export const DatePickerCalendarHeader = styled.div`
  width: 100%;
  height: 48px;
  margin-top: 4px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
`;

export const DatePickerCalendarHeaderArrow = styled.button`
  width: 48px;
  height: 48px;
  padding: 12px;
  font-size: 24px;
  background: none;
  border: 0px;
  cursor: pointer;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

export const DatePickerCalendarHeaderArrowIcon = styled.img<{
  isRight: boolean;
}>`
  width: 14px;
  object-fit: scale-down;
  fill: #0000008a;

  ${({ isRight }) =>
    isRight &&
    css`
      transform: rotate(180deg);
    `}

  .DatePickerArrowIconColor {
    fill: #0000008a;
  }
`;

export const DatePickerCalendarHeaderDayWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const DatePickerCalendarHeaderDayItem = styled.span`
  width: 36px;
  margin: 0px 2px;
  color: #00000061;
  font-size: 12px;
  text-align: center;
`;

export const DatePickerCalendarItemWrap = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  padding: 0px 15px;
  box-sizing: border-box;
  row-gap: 0px;
`;

export const DatePickerCalendarItem = styled.button<{
  isDisabled: boolean;
  isSelected: boolean;
}>`
  width: 36px;
  height: 36px;
  margin: 0px 2px;
  color: black;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background: none;
  border: 0px;

  ${({ isDisabled, isSelected }) =>
    isDisabled
      ? css`
          color: #969696;
          cursor: default;
        `
      : css`
          cursor: pointer;

          ${isSelected
            ? css`
                color: white;
                background-color: ${palette.main};
              `
            : css`
                &:hover {
                  background-color: rgba(0, 0, 0, 0.04);
                }
              `}
        `};
`;
