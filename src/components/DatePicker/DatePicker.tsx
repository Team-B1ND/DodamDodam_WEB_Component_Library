import React, { CSSProperties } from "react";
import { DAY } from "./DatePicker.constant";
import * as S from "./DatePicker.style";
import DatePickerIcon from "../../assets/imgs/DatePicker/DatePickerIcon.svg";
import DatePickerArrowIcon from "../../assets/imgs/DatePicker/DatePickerArrowIcon.svg";
import useDatePicker from "../../hooks/DatePicker/useDatePicker";

interface DatePickerProps {
  itemKey: string;
  width: string | number;
  height: string | number;
  customStyle?: CSSProperties;
  onChange: (e: Date) => void;
  value: string;
  splitCharacter: string;
  children?: JSX.Element | string;
}

const DatePicker = ({
  itemKey,
  width,
  height,
  customStyle,
  onChange,
  value,
  splitCharacter,
  children,
}: DatePickerProps) => {
  const {
    fold,
    setFold,
    containerRef,
    calendarCoord,
    firstDate,
    lastDate,
    selectDate,
    onChangeSelectDate,
    calendarDate,
    dayList,
    onChangeCalendarMonth,
  } = useDatePicker({ value, splitCharacter, onChange });

  return (
    <S.DatePickerContainer
      style={{ width, height, ...customStyle }}
      ref={containerRef}
    >
      <S.DatePickerWrap id={itemKey} onClick={() => setFold((prev) => !prev)}>
        <S.DatePickerDate>
          {selectDate.year}/{selectDate.month}/{selectDate.day}
        </S.DatePickerDate>
        {children}
        <S.DatePickerButton>
          <S.DatePickerButtonIcon
            src={DatePickerIcon}
            alt={`${itemKey} datePicker calendarIcon`}
          />
        </S.DatePickerButton>
      </S.DatePickerWrap>
      {!fold && (
        <S.DatePickerCalendar
          y={calendarCoord.y + Number(height)}
          x={calendarCoord.x + Number(width) / 2}
        >
          <S.DatePickerCalendarHeader>
            <S.DatePickerCalendarHeaderArrow
              onClick={() => onChangeCalendarMonth("prev")}
            >
              <S.DatePickerCalendarHeaderArrowIcon
                src={DatePickerArrowIcon}
                alt={`${itemKey} datePicker calendarLeftArrow`}
                isRight={false}
              />
            </S.DatePickerCalendarHeaderArrow>
            {calendarDate.year}년 {calendarDate.month}월
            <S.DatePickerCalendarHeaderArrow
              onClick={() => onChangeCalendarMonth("next")}
            >
              <S.DatePickerCalendarHeaderArrowIcon
                src={DatePickerArrowIcon}
                alt={`${itemKey} datePicker calendarRightArrow`}
                isRight={true}
              />
            </S.DatePickerCalendarHeaderArrow>
          </S.DatePickerCalendarHeader>
          <S.DatePickerCalendarHeaderDayWrap>
            {DAY.map((day, idx) => (
              <S.DatePickerCalendarHeaderDayItem
                key={`${itemKey} datePicker dayItem${idx}`}
              >
                {day}
              </S.DatePickerCalendarHeaderDayItem>
            ))}
          </S.DatePickerCalendarHeaderDayWrap>
          <S.DatePickerCalendarItemWrap>
            {dayList.map((day, idx) => {
              const isDisabled =
                idx < lastDate || (firstDate > 0 && idx > firstDate - 1);
              const isSelected =
                calendarDate.year === selectDate.year &&
                calendarDate.month === selectDate.month &&
                day === selectDate.day;

              return (
                <S.DatePickerCalendarItem
                  isDisabled={isDisabled}
                  isSelected={isSelected}
                  disabled={isDisabled}
                  onClick={() => onChangeSelectDate(day)}
                  key={`${itemKey} datePicker calendarItem ${idx}`}
                >
                  {day}
                </S.DatePickerCalendarItem>
              );
            })}
          </S.DatePickerCalendarItemWrap>
        </S.DatePickerCalendar>
      )}
    </S.DatePickerContainer>
  );
};

export default DatePicker;
