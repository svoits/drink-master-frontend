import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lazy, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { darkTheme, lightTheme } from './components/Themes';
import { GlobalStyles } from './components/globalStyles';
import { selectTheme } from './redux/auth/auth-selectors';
import { currentUser } from './redux/auth/auth-operation';
import RestrictedRoute from './components/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import SignupPage from './pages/SignupPage/SignupPage';
import SigninPage from './pages/SigninPage/SigninPage';
import { useAuth } from './redux/hooks/useAuth';
import MotivationModal from './components/MotivationModal/MotivationModal';
import { useScrollY } from './hooks/useScrollY';

const Home = lazy(() => import('./pages/HomePage/HomePage'));
const Drinks = lazy(() => import('./pages/DrinksPage/DrinksPage'));
const AddDrink = lazy(() => import('./pages/AddDrinkPage/AddDrinkPage'));
const FavoriteDrinks = lazy(() =>
  import('./pages/FavoriteDrinksPage/FavoriteDrinksPage'),
);
const Drink = lazy(() => import('./pages/DrinkPage/DrinkPage'));
const MyDrinks = lazy(() => import('./pages/MyDrinksPage/MyDrinksPage'));
const Privacy = lazy(() => import('./pages/PrivacyPage/PrivacyPage'));
const Service = lazy(() => import('./pages/TermsOfService/TermsOfService'));
const Error = lazy(() => import('./pages/ErrorPage/ErrorPage'));

function App() {
  const theme = useSelector(selectTheme);
  const { isRefreshing } = useAuth();
  const { scrollY } = useScrollY();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());

    if (location.pathname === '/') {
      navigate('/home');
    }
  }, [dispatch, location.pathname, navigate]);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      {isRefreshing ? (
        <b>Refreshing user...</b>
      ) : (
        <Routes>
          <Route
            path="/welcome"
            element={<RestrictedRoute component={<WelcomePage />} />}
          />
          <Route
            path="/signup"
            element={<RestrictedRoute component={<SignupPage />} />}
          />
          <Route
            path="/signin"
            element={<RestrictedRoute component={<SigninPage />} />}
          />
          <Route
            path="/"
            element={<PrivateRoute component={<SharedLayout />} />}
          >
            <Route path="home" element={<Home />} />
            <Route path="drinks" element={<Drinks />} />
            <Route path="add" element={<AddDrink />} />
            <Route path="favorites" element={<FavoriteDrinks />} />
            <Route path="drinks/:drinkId" element={<Drink />} />
            <Route path="my" element={<MyDrinks />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="service" element={<Service />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      )}

      <GlobalStyles scrollY={scrollY} />
      <MotivationModal />
      <ToastContainer autoClose={2000} />
    </ThemeProvider>
  );
}
export default App;
