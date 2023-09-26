import { useSelector } from 'react-redux';

import {
  selectIsLoading,
  selectDrinks,
  selectErrorDrinks,
} from 'redux/drinks/drinks-selectors';

export const useDrinks = () => {
  const isLoading = useSelector(selectIsLoading);
  const drinks = useSelector(selectDrinks);
  const error = useSelector(selectErrorDrinks);

  return {
    isLoading,
    drinks,
    error,
  };
};
