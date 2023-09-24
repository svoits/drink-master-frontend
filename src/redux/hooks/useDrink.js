import { useSelector } from 'react-redux';
import {
    selectIsLoading,
    selectDrinks,
    selectErrorDrinks
} from '../drinks/drinks-selectors'

export const useDrink = () => {
  const isLoading = useSelector(selectIsLoading);
  const drinks = useSelector(selectDrinks);
  const error = useSelector(selectErrorDrinks);
 


  return {
    isLoading,
    drinks,
    error,
  };
};