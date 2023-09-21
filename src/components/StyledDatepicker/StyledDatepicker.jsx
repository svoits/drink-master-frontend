import { forwardRef, useState } from "react";
import { format } from "date-fns";
import { AiOutlineCalendar } from 'react-icons/ai';
import { CalendarGlobalStyles, Button } from "./StyledDataPicker.styled";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

export default function StyledDatepicker() {
   const [selectedDate, setSelectedDate] = useState(null);

  // const CustomInput = forwardRef(({ value, onClick }, ref) => {
  //   return (
  //     <Button  onClick={onClick} ref={ref}>
  //       {/* {format(selectedDate, "dd-MM-yyyy")} */}
  //       <AiOutlineCalendar/>
  //     </Button>
  //   );
  // });
  return (
    <>
      <DatePicker
       
       selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
        }}
        // customInput={<CustomInput />}
        dateFormat={"dd-MM-yyyy"}
        maxDate={new Date()}
        showYearDropdown
        scrollableMonthYearDropdown
        placeholderText="dd/mm/yyyy"
        // calendarStartDay={1}
        // formatWeekDay={(day) => day.substr(0, 1)}
        
      /> <CalendarGlobalStyles />
    </>
  );
}



// import React from "react";
// import DateView from "react-datepicker";
// import "react-datepicker/dist/react-datepicker-cssmodules.css";
// import { Field } from "formik";
// export default function DatePicker(props) {
//   const {name, ...rest} = props
//   return (
//     <div>
//       <Field name={name}>
//         {
//           ({form, field}) => {
//             const { setFieldValue } = form
//             const { value } = field
//             return <DateView id={name} {...field} {...rest} selected={value} onChange={val=>{setFieldValue(name,val)}}/>
//           }
//         }
// </Field>

//     </div>
//   )
// }