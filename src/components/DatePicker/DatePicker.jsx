import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import localeEn from 'air-datepicker/locale/en';
import React, { useEffect, useRef } from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';

const DatePicker = ({ type, value, setFieldValue, placeholder }) => {
    const inputRef = useRef(null);
   

  useEffect(() => {
    const datepicker = new AirDatepicker(inputRef.current, {
      selectedDates: [new Date()], 
      isMobile: true,
      autoClose: true,
      value: value,
        locale: localeEn,
        placeholder: placeholder,
        
        // dateFormat:"dd-mm-yyyy",
//       altField: "#alt-date-field", 
//   altFieldDateFormat: "dd-mm-yyyy",
    //  
     
    });
      
    inputRef.current.addEventListener("onchange", (event) => {
        console.log(event.target.value);
      setFieldValue(event.target.value);
    });
    return () => {
      datepicker.destroy();
    };
  }, [type, value, setFieldValue]);

  return <div>
      <input id="input" ref={inputRef} />
      <button className="calendar-icon" ><AiOutlineCalendar/></button>
    </div>;
};

export default DatePicker;

