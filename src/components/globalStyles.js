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



  `;
