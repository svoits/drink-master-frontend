import { createGlobalStyle } from 'styled-components';

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



  `;
