import { useSelector } from 'react-redux';

import {
  selectMainPageDrinks,
  selectIsLoading,
  selectDrinks,
  selectErrorDrinks,
  selectTotalDrinks,
  selectFavoriteDrinks,
} from '../drinks/drinks-selectors';

export const useDrink = () => {
  const isLoading = useSelector(selectIsLoading);
  const drinks = useSelector(selectDrinks);
  const mainPageDrinks = useSelector(selectMainPageDrinks);
  const error = useSelector(selectErrorDrinks);
  const total = useSelector(selectTotalDrinks);
  const favoriteDrinks = useSelector(selectFavoriteDrinks);

  return {
    isLoading,
    drinks,
    mainPageDrinks,
    error,
    total,
    favoriteDrinks,
  };
};
