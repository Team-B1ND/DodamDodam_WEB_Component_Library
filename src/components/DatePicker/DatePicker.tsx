import React, { CSSProperties, useEffect, useRef, useState } from "react";
import { DAY } from "./DatePicker.constant";
import {
  DatePickerButton,
  DatePickerButtonIcon,
  DatePickerCalendar,
  DatePickerCalendarHeader,
  DatePickerCalendarHeaderArrow,
  DatePickerCalendarHeaderDayItem,
  DatePickerCalendarHeaderDayWrap,
  DatePickerCalendarItem,
  DatePickerCalendarItemWrap,
  DatePickerContainer,
  DatePickerDate,
  DatePickerWrap,
} from "./DatePicker.style";

interface DatePickerProps {
  itemKey: string;
  width: string | number;
  height: string | number;
  customStyle?: CSSProperties;
  onChange: (date: Date) => void;
}

const DatePicker = ({
  itemKey,
  width,
  height,
  customStyle,
  onChange,
}: DatePickerProps) => {
  const date = new Date();
  const $year = date.getFullYear();
  const $month = date.getMonth() + 1;

  const [fold, setFold] = useState(true);

  const [year, setYear] = useState<number>($year);
  const [month, setMonth] = useState<number>($month);
  const [dayList, setDayList] = useState<number[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("click", (e) => handleClickOutside(e));
    return () => {
      document.removeEventListener("click", (e) => handleClickOutside(e));
    };
  });

  const handleClickOutside = (e: Event) => {
    if (containerRef && !containerRef.current?.contains(e.target as Node)) {
      setFold(true);
    }
  };

  const changeDate = (month: number): number[] => {
    let beforeLastDate = new Date($year, month - 1, 0).getDate();
    let beforeLastDay = new Date($year, month - 1, 0).getDay();
    let afterLastDate = new Date($year, month, 0).getDate();
    let afterLastDay = new Date($year, month, 0).getDay();

    let beforeDayList: number[] = [];
    let afterDayList: number[] = [];

    if (beforeLastDay !== 6) {
      for (let i = 0; i < beforeLastDay; i++) {
        beforeDayList.unshift(beforeLastDate - i);
      }
    }

    for (let i = 1; i < 7 - afterLastDay; i++) {
      afterDayList.push(i);
    }

    let today = [...Array(afterLastDate + 1).keys()].slice(1);

    return beforeDayList.concat(today, afterDayList);
  };

  useEffect(() => {
    setDayList(changeDate(month));
  }, [month]);

  useEffect(() => {
    console.log(dayList);
  }, [dayList]);

  return (
    <DatePickerContainer
      style={{ width, height, ...customStyle }}
      ref={containerRef}
    >
      <DatePickerWrap onClick={() => setFold((prev) => !prev)}>
        <DatePickerDate>2022.08.09</DatePickerDate>
        <DatePickerButton>
          <DatePickerButtonIcon>📅</DatePickerButtonIcon>
        </DatePickerButton>
      </DatePickerWrap>
      {!fold && (
        <DatePickerCalendar containerHeight={Number(height)}>
          <DatePickerCalendarHeader>
            <DatePickerCalendarHeaderArrow
              onClick={() => setMonth((prev) => prev - 1)}
            >
              &lt;
            </DatePickerCalendarHeaderArrow>
            {year}년 {month}월
            <DatePickerCalendarHeaderArrow
              onClick={() => setMonth((prev) => prev + 1)}
            >
              &gt;
            </DatePickerCalendarHeaderArrow>
          </DatePickerCalendarHeader>
          <DatePickerCalendarHeaderDayWrap>
            {DAY.map((day, idx) => (
              <DatePickerCalendarHeaderDayItem
                key={`${itemKey} datePicker dayItem${idx}`}
              >
                {day}
              </DatePickerCalendarHeaderDayItem>
            ))}
          </DatePickerCalendarHeaderDayWrap>
          <DatePickerCalendarItemWrap>
            {dayList.map((day) => (
              <DatePickerCalendarItem>{day}</DatePickerCalendarItem>
            ))}
          </DatePickerCalendarItemWrap>
        </DatePickerCalendar>
      )}
    </DatePickerContainer>
  );
};

export default DatePicker;
