import { useSelector } from 'react-redux';

import {
  // selectSearchQuery,
  selectCategories,
  selectIngredients,
  selectGlasses,
} from '../filters/selectors';

export const useFilter = () => {
  // const searchQuery = useSelector(selectSearchQuery);
  const categories = useSelector(selectCategories);
  const ingredients = useSelector(selectIngredients);
  const glasses = useSelector(selectGlasses);

  return {
    // searchQuery,
    categories,
    ingredients,
    glasses,
  };
};
