import React, { CSSProperties, useEffect, useRef, useState } from "react";
import {
  DatePickerButton,
  DatePickerCalendar,
  DatePickerContainer,
  DatePickerDate,
  DatePickerWrap,
} from "./DatePicker.style";

interface DatePickerProps {
  width: string | number;
  height: string | number;
  customStyle?: CSSProperties;
}

const DatePicker = ({ width, height, customStyle }: DatePickerProps) => {
  const [date, setDate] = useState(new Date().getFullYear());
  const [fold, setFold] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", () => handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", () => handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e: Event) => {
    if (!containerRef.current?.contains(e.target as Node)) {
      console.log("ㅁㄴㅇㅁㅇㅁ");
      setFold(true);
    }
  };

  return (
    <DatePickerContainer style={{ width, height, ...customStyle }}>
      <DatePickerWrap
        ref={containerRef}
        onClick={() => setFold((prev) => !prev)}
      >
        <DatePickerDate>{date}</DatePickerDate>
        <DatePickerButton onClick={() => setFold((prev) => !prev)}>
          📅
        </DatePickerButton>
      </DatePickerWrap>
      {!fold && (
        <DatePickerCalendar
          containerHeight={Number(height)}
        ></DatePickerCalendar>
      )}
    </DatePickerContainer>
  );
};

export default DatePicker;
