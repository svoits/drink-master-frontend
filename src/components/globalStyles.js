import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Manrope';
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  src: local('Manrope Regular'), local('Manrope-Regular'),
    url('public/fonts/Manrope-Regular.woff2') format('woff2'),
    url('public/fonts/Manrope-Regular.woff') format('woff'),
    url('public/fonts/Manrope-Regular.ttf') format('truetype'),
    url('public/fonts/Manrope-Regular.eot') format('embedded-opentype');
}

@font-face {
  font-family: 'Manrope';
  font-weight: 500;
  font-style: normal;
  font-display: swap;
  src: local('Manrope Medium'), local('Manrope-Medium'),
    url('public/fonts/Manrope-Medium.woff2') format('woff2'),
    url('public/fonts/Manrope-Medium.woff') format('woff'),
    url('public/fonts/Manrope-Medium.ttf') format('truetype'),
    url('public/fonts/Manrope-Medium.eot') format('embedded-opentype'),

}

@font-face {
  font-family: 'Manrope';
  font-weight: 600;
  font-style: normal;
  font-display: swap;
  src: local('Manrope SemiBold'), local('Manrope-SemiBold'),
    url('public/fonts/Manrope-SemiBold.woff2') format('woff2'),
    url('public/fonts/Manrope-SemiBold.woff') format('woff'),
    url('public/fonts/Manrope-SemiBold.ttf') format('truetype'),
    url('public/fonts/Manrope-SemiBold.eot') format('embedded-opentype');
}
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
