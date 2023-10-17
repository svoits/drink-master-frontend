import { createGlobalStyle } from 'styled-components';
import transition from '../utils/transition';

export const GlobalStyles = createGlobalStyle`

  html, body, #root {
    height: 100%;
  }
  body {
    background-color: ${({ theme }) => theme.mainBackground};
    font-family: 'Manrope', sans-serif;
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
    color: ${({ theme }) => theme.mainText};
    margin: 0;
    transition: color ${transition}, background-color ${transition};
    
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  button {
    cursor: pointer;
  }

  /* Hide scrollbar background */
  ::-webkit-scrollbar {
    background-color: transparent; /* For Chrome, Safari, and Opera */
    width: 8px;
  }

  /* Optional: Style the scrollbar thumb and track */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #434D67; /* Color of the thumb */
    // width: 8px;

    &:hover {
      background-color: lightgrey;
    }
  }

  ::-webkit-scrollbar-track {
    background-color: transparent; /* Color of the track */
  }

  .Toastify__toast-container--top-right {
    top:  ${({ scrollY }) => (scrollY > 40 ? '1em' : '90px')} !important;

    left: unset !important;
    padding: 4px;

    transition: top ${transition};
    

    @media screen and (max-width: 767.98px){
      top:  ${({ scrollY }) => (scrollY > 40 ? '1em' : '78px')} !important;
      width: unset;
    }
  
    @media screen and (max-width: 374.98px){
      max-width: 91vw;
    }

    @media screen and (max-width: 319.98px){
      max-width: 291.2px;
    }
  }
  .Toastify__toast {
    margin-bottom: 1rem;
    border-radius: 4px;

    @media screen and (max-width: 767.98px){
    min-height: 54px;

    }
  }
`;
