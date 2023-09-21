import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import FirstPage from './pages/TMP_FirstPage/FirstPage';
import SecondPage from './pages/TMP_SecondPage/SecondPage';
import HalfPage from './pages/TMP_HalfPage/HalfPage';
import ErrorPage from './pages/TMP_ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { darkTheme, lightTheme } from './components/Theme';
import { GlobalStyles } from './components/globalStyles';
import MyDrinksPage from "./pages/MyDrinksPage/MyDrinksPage";

function App() {
  const [theme] = useState('dark');
  // const themeToggler = () => {
  //   theme === 'light' ? setTheme('dark') : setTheme('light');
  // };
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <AppWrapper>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/first" element={<FirstPage />} />
            <Route path="/second" element={<SecondPage />}>
              <Route path=":half" element={<HalfPage />} />
            </Route>
            <Route path="/my" element={<MyDrinksPage/>}></Route>

            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>

        <GlobalStyles />
      </AppWrapper>
    </ThemeProvider>
  );
}
export default App;
