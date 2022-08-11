import React, {
  CSSProperties,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { DAY } from "./DatePicker.constant";
import {
  DatePickerButton,
  DatePickerButtonIcon,
  DatePickerCalendar,
  DatePickerCalendarHeader,
  DatePickerCalendarHeaderArrow,
  DatePickerCalendarHeaderArrowIcon,
  DatePickerCalendarHeaderDayItem,
  DatePickerCalendarHeaderDayWrap,
  DatePickerCalendarItem,
  DatePickerCalendarItemWrap,
  DatePickerContainer,
  DatePickerDate,
  DatePickerWrap,
} from "./DatePicker.style";
import DatePickerIcon from "../../assets/imgs/DatePicker/DatePickerIcon.svg";
import DatePickerArrowIcon from "../../assets/imgs/DatePicker/DatePickerArrowIcon.svg";

interface DatePickerProps {
  itemKey: string;
  width: string | number;
  height: string | number;
  customStyle?: CSSProperties;
  onChange: (e: Date) => void;
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
  const $day = date.getDate();

  const [fold, setFold] = useState(true);

  const [calendarDate, setCalendarDate] = useState({
    year: $year,
    month: $month,
  });
  const [selectDate, setSelectDate] = useState({
    year: $year,
    month: $month,
    day: $day,
  });
  const [dayList, setDayList] = useState<number[]>([]);
  const [firstDate, setFirstDate] = useState<number>(dayList.indexOf(1, 7));
  const [lastDate, setLastDate] = useState<number>(dayList.indexOf(1));

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

  const createDayList = (month: number): number[] => {
    let beforeLastDate = new Date(calendarDate.year, month - 1, 0).getDate();
    let beforeLastDay = new Date(calendarDate.year, month - 1, 0).getDay();
    let afterLastDate = new Date(calendarDate.year, month, 0).getDate();
    let afterLastDay = new Date(calendarDate.year, month, 0).getDay();

    let beforeDayList: number[] = [];
    let afterDayList: number[] = [];

    if (beforeLastDay !== 6) {
      for (let i = 0; i < beforeLastDay + 1; i++) {
        beforeDayList.unshift(beforeLastDate - i);
      }
    }

    for (let i = 1; i < 7 - afterLastDay; i++) {
      afterDayList.push(i);
    }

    let today = [...Array(afterLastDate + 1).keys()].slice(1);

    return beforeDayList.concat(today, afterDayList);
  };

  const onChangeCalendarMonth = useCallback(
    (direction: "prev" | "next") => {
      if (direction === "prev") {
        if (calendarDate.month === 1) {
          setCalendarDate((prev) => ({
            ...prev,
            year: prev.year - 1,
            month: 12,
          }));
          return;
        }
        setCalendarDate((prev) => ({ ...prev, month: prev.month - 1 }));
      } else if (direction === "next") {
        if (calendarDate.month === 12) {
          setCalendarDate((prev) => ({
            ...prev,
            year: prev.year + 1,
            month: 1,
          }));
          return;
        }
        setCalendarDate((prev) => ({ ...prev, month: prev.month + 1 }));
      }
    },
    [setCalendarDate, calendarDate.month]
  );

  const onChangeSelectDate = useCallback(
    (day: number) => {
      setSelectDate((prev) => ({
        ...prev,
        year: calendarDate.year,
        month: calendarDate.month,
        day,
      }));
      onChange(new Date(calendarDate.year, calendarDate.month - 1, day));
    },
    [setSelectDate, calendarDate.year, calendarDate.month]
  );

  useEffect(() => {
    setDayList(createDayList(calendarDate.month));
  }, [calendarDate.month]);

  useEffect(() => {
    setFirstDate(dayList.indexOf(1, 7));
    setLastDate(dayList.indexOf(1));
  }, [dayList]);

  useEffect(() => {
    if (!fold) {
      setCalendarDate((prev) => ({
        ...prev,
        year: selectDate.year,
        month: selectDate.month,
      }));
    }
  }, [fold]);

  return (
    <DatePickerContainer
      style={{ width, height, ...customStyle }}
      ref={containerRef}
    >
      <DatePickerWrap onClick={() => setFold((prev) => !prev)}>
        <DatePickerDate>
          {selectDate.year}.{selectDate.month}.{selectDate.day}
        </DatePickerDate>
        <DatePickerButton>
          <DatePickerButtonIcon
            src={DatePickerIcon}
            alt={`${itemKey} datePicker calendarIcon`}
          />
        </DatePickerButton>
      </DatePickerWrap>
      {!fold && (
        <DatePickerCalendar containerHeight={Number(height)}>
          <DatePickerCalendarHeader>
            <DatePickerCalendarHeaderArrow
              onClick={() => onChangeCalendarMonth("prev")}
            >
              <DatePickerCalendarHeaderArrowIcon
                src={DatePickerArrowIcon}
                alt={`${itemKey} datePicker calendarLeftArrow`}
                isRight={false}
              />
            </DatePickerCalendarHeaderArrow>
            {calendarDate.year}년 {calendarDate.month}월
            <DatePickerCalendarHeaderArrow
              onClick={() => onChangeCalendarMonth("next")}
            >
              <DatePickerCalendarHeaderArrowIcon
                src={DatePickerArrowIcon}
                alt={`${itemKey} datePicker calendarRightArrow`}
                isRight={true}
              />
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
            {dayList.map((day, idx) => {
              const isDisabled =
                idx < lastDate || (firstDate > 0 && idx > firstDate - 1);
              const isSelected =
                calendarDate.year === selectDate.year &&
                calendarDate.month === selectDate.month &&
                day === selectDate.day;

              return (
                <DatePickerCalendarItem
                  isDisabled={isDisabled}
                  isSelected={isSelected}
                  disabled={isDisabled}
                  onClick={() => onChangeSelectDate(day)}
                >
                  {day}
                </DatePickerCalendarItem>
              );
            })}
          </DatePickerCalendarItemWrap>
        </DatePickerCalendar>
      )}
    </DatePickerContainer>
  );
};

export default DatePicker;
