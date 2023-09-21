import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`

body {
  background-color: ${({ theme }) => theme.mainBackground};
  background-size: auto 100%;
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: ${({ theme }) => theme.mainText}
  
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
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
