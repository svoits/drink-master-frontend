import { useSelector } from 'react-redux';

import { selectIsLoading, selectDrinks } from 'redux/drinks/drinks-selectors';

export const useDrinks = () => {
  const isLoading = useSelector(selectIsLoading);

  const allDrinks = useSelector(selectDrinks);

  return {
    isLoading,
    allDrinks,
  };
};
