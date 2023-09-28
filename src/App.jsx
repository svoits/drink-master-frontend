import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import ErrorPage from './pages/TMP_ErrorPage/ErrorPage';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lazy, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { darkTheme, lightTheme } from './components/Themes';
import { GlobalStyles } from './components/globalStyles';
import { selectIsRefreshing, selectTheme } from './redux/auth/auth-selectors';
import { currentUser } from './redux/auth/auth-operation';
import RestrictedRoute from './components/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute';

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
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      {isRefreshing ? (
        <div>Refresh user</div>
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route
              path="welcome"
              element={<RestrictedRoute component={<Welcome />} />}
            />
            <Route
              path="signup"
              element={<RestrictedRoute component={<Signup />} />}
            />
            <Route
              path="signin"
              element={<RestrictedRoute component={<Signin />} />}
            />

            <Route
              path="home"
              element={<PrivateRoute component={<Home />} />}
            />
            <Route
              path="drinks"
              element={<PrivateRoute component={<Drinks />} />}
            />
            <Route
              path="add"
              element={<PrivateRoute component={<AddDrink />} />}
            />
            <Route
              path="favorites"
              element={<PrivateRoute component={<FavoriteDrinks />} />}
            />
            <Route
              path="drinks/:drinkId"
              element={<PrivateRoute component={<Drink />} />}
            />
            <Route
              path="my"
              element={<PrivateRoute component={<MyDrinks />} />}
            />

            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      )}

      <GlobalStyles />
      <ToastContainer autoClose={2000} />
    </ThemeProvider>
    
  
  );
}
export default App;
