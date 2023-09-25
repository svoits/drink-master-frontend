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
/* .react-datepicker-wrapper {
  max-width:375px;
  } */
.react-datepicker__input-container  {
    max-width:335px;
    &:focus,
  &:hover {
    border: 1px solid rgba(243, 243, 243, 0.5);
    background-color: transparent;
    color: ${({ theme }) => theme.mainText};
  }}



.react-datepicker {
    display: inline-block;
    font-size: .8rem;
    position: relative;
  padding: 14px 14px;
    border-radius: 8px;
    background: #161F37;
    font-family: Manrope;}

.react-datepicker__triangle {
    position: absolute;
    left: 0px;
    transform: translate3d(51px, 0px, 0px);
  }
.react-datepicker__navigation--previous {
    left: 2px;
}
.react-datepicker__navigation {
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    height: 32px;
    justify-content: center;
    overflow: hidden;
    padding: 0;
    position: absolute;
    text-align: center;
    text-indent: -999em;
    top: 2px;
    width: 32px;
    z-index: 1;}

.react-datepicker__navigation-icon--previous {
    right: -2px;
}
.react-datepicker__navigation-icon {
    font-size: 20px;
    position: relative;
    top: -1px;
    width: 0;
}
.react-datepicker__navigation-icon--previous:before {
    right: -7px;
    transform: rotate(225deg);
      border-color: #ccc;
    border-style: solid;
    border-width: 3px 3px 0 0;
    content: "";
    display: block;
    height: 9px;
    position: absolute;
    top: 6px;
    width: 9px;}

.react-datepicker__navigation--next {
    right: 2px;
}
.react-datepicker__navigation {
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    height: 32px;
    justify-content: center;
    overflow: hidden;
    padding: 0;
    position: absolute;
    text-align: center;
    text-indent: -999em;
    top: 2px;
    width: 32px;
    z-index: 1;}
    .react-datepicker__navigation-icon--next {
    left: -2px;
}
.react-datepicker__navigation-icon {
    font-size: 20px;
    position: relative;
    top: 7px;
    width: 0;}
.react-datepicker__navigation-icon--next:before {
    left: -7px;
    transform: rotate(45deg);
        border-color: #ccc;
    border-style: solid;
    border-width: 3px 3px 0 0;
    content: "";
    display: block;
    height: 9px;
    position: absolute;
    top: 6px;
    width: 9px;
}
.react-datepicker__month-container {
    float: left;
        border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    padding: 0;
    vertical-align: initial;
}
.react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-top-right-radius: 0.3rem;
     padding-bottom: 7px;
}
.react-datepicker__header {
    background-color: #161F37;
    position: relative;
    text-align: center;}

.react-datepicker__current-month {
color: #F3F3F3;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: -0.32px;
 margin-top: 0;
 border-bottom: 1px solid rgba(243, 243, 243, 0.20);
 padding-bottom:14px;
}
.react-datepicker__day-names {
    margin-bottom: -8px;
    white-space: nowrap;
    padding-top:14px;
    padding-bottom: 7px;
}
.react-datepicker__day-name{
  
color: rgba(243, 243, 243, 0.50);
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: -0.28px;
display: inline-block;
margin: 0.166rem;
text-align: center;
width: 1.7rem;} 
    
.react-datepicker__month {
   margin: 0.4rem;
    text-align: center;
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    padding: 0;
    vertical-align: initial;
}
.react-datepicker__week {
    white-space: nowrap;
}
.react-datepicker__day{
  color: #F3F3F3;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 1.28; 
letter-spacing: -0.28px;
cursor: pointer;
display: inline-block;
line-height: 1.7rem;
margin: 0.166rem;
text-align: center;
width: 1.7rem;
}
.react-datepicker__day--outside-month {
    background-color: rgba(243, 243, 243, 0.20);
    pointer-events: none;
    opacity: 0;
  }
  .react-datepicker__day--selected {
    background-color:rgba(243, 243, 243, 1);
    color:#3e85f3;
    font-size: 14px;  
    border-radius: 50%;
  }
 
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color:${({ theme }) => theme.mainText};
    color:${({ theme }) => theme.activeNavLinkBg};
  }
.react-datepicker__aria-live{
  display:none; }
 

`;

export const Button = styled.button`
  width: 100%;
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

  &:active {
    border: 1px solid rgba(243, 243, 243, 0.5);
    background-color: transparent;
    color: ${({ theme }) => theme.mainText};
  }
`;
