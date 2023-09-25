import { forwardRef, useState } from 'react';

import { StyledCalendarIcon } from '../../components/StyledDatepicker/StyledDataPicker.styled';
import { CalendarGlobalStyles, Button } from './StyledDataPicker.styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function StyledDatepicker({ value, setFieldValue }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [placeholder, setPlaceholder] = useState('dd/mm/yyyy');
  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <Button onClick={onClick}>
        {value ? value : placeholder}
        <StyledCalendarIcon/>
      </Button>
    );
  });

  return (
    <>
      <DatePicker
        customInput={<CustomInput />}
        selected={value}
        onChange={(date) => {
          setFieldValue('dateOfBirth', date);
          setPlaceholder(date ? '' : 'dd/mm/yyyy');
        }}
        dateFormat={'dd-MM-yyyy'}
        maxDate={new Date()}
        showMonthDropdown
        showMonthYearDropdown
        placeholderText={placeholder}
        calendarStartDay={1}
        
      />{' '}
      <CalendarGlobalStyles />
    </>
  );
}


