import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import localeEn from 'air-datepicker/locale/en';
import React, { useEffect, useRef } from 'react';
import {
  StyledCalendarIcon,
  CalendarGlobalStyles,
} from '../../components/DatePicker/DatePicker.styled';

const DatePicker = ({ type, value, setFieldValue, name }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const datepicker = new AirDatepicker(inputRef.current, {
      selectedDates: [new Date(value)],
      isMobile: true,
      autoClose: true,
      locale: localeEn,
      dateFormat: 'yyyy-MM-dd',
      classes: 'date-airpicker-calendar',
      onSelect: (formattedDate) => {
        setFieldValue('dateOfBirth', formattedDate.formattedDate);
      },
    });

    return () => {
      datepicker.destroy();
    };
  }, [type, value, setFieldValue]);

  return (
    <>
      <CalendarGlobalStyles />
      <div className="date-airpicker-wrapper">
        <input
          id="input"
          ref={inputRef}
          placeholder="dd/mm/yyyy"
          name={name}
          className="date-airpicker-input"
        />
        <StyledCalendarIcon />
      </div>
    </>
  );
};

export default DatePicker;
