// import { forwardRef, useState } from 'react';
// import range from 'lodash/range';
// import { StyledCalendarIcon } from '../../components/StyledDatepicker/StyledDataPicker.styled';
// import { CalendarGlobalStyles, Button } from './StyledDataPicker.styled';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

// export default function StyledDatepicker({ value, setFieldValue, error, success}) {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [placeholder, setPlaceholder] = useState('dd/mm/yyyy');
//   const currentYear = new Date().getFullYear();

//   const years = range(1990, currentYear + 1);
//   const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ];
//   const CustomInput = forwardRef(({ value, onClick}, ref) => {
//     return (
//       <Button error={error} success={success} onClick={onClick}>
//         {value ? value : placeholder}
//         <StyledCalendarIcon />
//       </Button>
//     );
//   });

//   return (
//     <>
//       <DatePicker
//         renderCustomHeader={({
//           date,
//           changeYear,
//           changeMonth,
//           decreaseMonth,
//           increaseMonth,
//           prevMonthButtonDisabled,
//           nextMonthButtonDisabled,
//         }) => (
//           <div
//             style={{
//               margin: 10,
//               display: 'flex',
//               justifyContent: 'center',
//             }}
//           >
//             <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
//               {'<'}
//             </button>
//             <select
//               value={date.getFullYear()}
//               onChange={({ target: { value } }) => changeYear(value)}
//             >
//               {range(1990, new Date().getFullYear() + 1).map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>

//             <select
//               value={date.getMonth()}
//               onChange={({ target: { value } }) => changeMonth(value)}
//             >
//               {Array.from({ length: 12 }, (_, i) => (
//                 <option key={i} value={i}>
//                   {months[i]}
//                 </option>
//               ))}
//             </select>

//             <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
//               {'>'}
//             </button>
//           </div>
//         )}
//         customInput={<CustomInput />}
//         selected={value}
//         onChange={(date) => {
//           setFieldValue('dateOfBirth', date);
//           setPlaceholder(date ? '' : 'dd/mm/yyyy');
//         }}
//         dateFormat={'dd-MM-yyyy'}
//         maxDate={new Date()}
//         placeholderText={placeholder}
//               calendarStartDay={1}
//               showMonthYearPicker
//       />{' '}
//       <CalendarGlobalStyles />
//     </>
//   );
// }

