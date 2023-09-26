import { useSelector } from 'react-redux';

import {
  selectMainPageDrinks,
  selectIsLoading,
  selectDrinks,
  selectErrorDrinks,
} from '../drinks/drinks-selectors';

export const useDrink = () => {
  const isLoading = useSelector(selectIsLoading);
  const drinks = useSelector(selectDrinks);
  const mainPageDrinks = useSelector(selectMainPageDrinks);
  const error = useSelector(selectErrorDrinks);

  return {
    isLoading,
    drinks,
    mainPageDrinks,
    error,
  };
};
