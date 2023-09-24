import { createGlobalStyle, styled } from 'styled-components';
import { AiOutlineCalendar } from 'react-icons/ai';

export const StyledCalendarIcon = styled(AiOutlineCalendar)`
  fill: ${({ theme }) => theme.mainText};
  width: 18px;
  height: 18px;
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const CalendarGlobalStyles = createGlobalStyle`
  .react-datepicker__wrapper {
    position: relative;

  }
  .react-datepicker {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-1%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 9px 18px;
    border-radius: 8px;
    background: #161F37;
    font-family: Manrope;
    
  }
  .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
  }
  .react-datepicker__header {
    position: relative;
    background: #161F37;
  }
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 8px;
    background: #161F37;
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
    outline: none;
    border: none;
}
  .react-datepicker__current-month {
    padding-bottom: 14px;
    font-size: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    font-weight: 500;
    line-height: normal;
    text-align: center;
    letter-spacing: -0.32px;
    color: ${({ theme }) => theme.mainText};
  }
  .react-datepicker__day-name {
    margin: 0;
   padding: 8px 8px;
    color: rgba(243, 243, 243, 0.50);
    font-weight: 500;
   line-height: normal;
   letter-spacing: -0.28px;
    text-align: center;
    
  }
  .react-datepicker__navigation {
    /* margin-top: 24px; */
    color: white;
  }
  .react-datepicker__navigation--previous {}
    /* left: 7px;
    width: 18px;
    height: 18px;
  
  .react-datepicker__navigation--next {
    /* right: 7px;
    width: 18px;
    height: 18px; */
  

  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: white;
  }

   .react-datepicker__navigation-icon .react-datepicker__navigation-icon--previous{
    display:none;
   }
   .react-datepicker__navigation-icon .react-datepicker__navigation-icon--next{
    display:none;
   }
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }
  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    margin: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    color:  ${({ theme }) => theme.mainText};
    font-weight: 400;
    line-height: 1.28;
    text-align: center;
    letter-spacing: -0.28px;

  }
  .react-datepicker__month {
    display: flex;
    gap: 7px;
    flex-direction: column;
    justify-content: space-between;
    /* padding-top: 16px; */
    margin: 0;
  }
  .react-datepicker__day--selected {
    background-color:white;
    color:#3e85f3;
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
  background-color:white;
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color:${({ theme }) => theme.mainText};
    color:${({ theme }) => theme.activeNavLinkBg};
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color:white;
    color:#3e85f3;
  }
  .react-datepicker__day--weekend {
    opacity: 50%;
  }
.react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }
  .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }
  .react-datepicker__triangle {
    visibility: hidden;
  }
  .react-datepicker__aria-live{
  display:none;
}
`;

export const Button = styled.button`
  width: 335px;
  color: rgba(243, 243, 243, 0.5);
  background: transparent;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  padding: 18px 24px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  font-size: 14px;
  border-radius: 42px;
  line-height: 1.28;
  border: 1px solid rgba(243, 243, 243, 0.2);
  background: transparent;
  display: flex;
  justify-content: space-between;
  &:focus,
  &:hover {
    border: 1px solid rgba(243, 243, 243, 0.5);

    color: ${({ theme }) => theme.mainText};
  }
`;
