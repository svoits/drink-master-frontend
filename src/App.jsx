import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import ErrorPage from './pages/TMP_ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';
import { ThemeProvider } from 'styled-components';
import { lazy, useState } from 'react';
import { useSelector } from 'react-redux';
import { darkTheme, lightTheme } from './components/Themes';
import { GlobalStyles } from './components/globalStyles';
import MyDrinksPage from './pages/MyDrinksPage/MyDrinksPage';
import { selectTheme } from './redux/user/user-selectors';

const Welcome = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const Signup = lazy(() => import('./pages/SignupPage/SignupPage'));
const Signin = lazy(() => import('./pages/SigninPage/SigninPage'));

const Home = lazy(() => import('./pages/HomePage/HomePage'));
const Drinks = lazy(() => import('./pages/DrinksPage/DrinksPage'));
const AddDrink = lazy(() => import('./pages/AddDrinkPage/AddDrinkPage'));
const FavoriteDrinks = lazy(() =>
  import('./pages/FavoriteDrinksPage/FavoriteDrinksPage'),
);
const Drink = lazy(() => import('./pages/DrinkPage/DrinkPage'));
const MyDrinks = lazy(() => import('./pages/MyDrinksPage/MyDrinksPage'));

function App() {
  const theme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <AppWrapper>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="welcome" element={<Welcome />} />
            <Route path="signup" element={<Signup />} />
            <Route path="signin" element={<Signin />} />

            <Route path="home" element={<Home />} />
            <Route path="drinks" element={<Drinks />} />
            <Route path="add" element={<AddDrink />} />
            <Route path="favorites" element={<FavoriteDrinks />} />
            <Route path="drinks/:drinkId" element={<Drink />} />
            <Route path="my" element={<MyDrinks />} />

            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>

        <GlobalStyles />
      </AppWrapper>
    </ThemeProvider>
  );
}
export default App;
