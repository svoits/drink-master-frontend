import { useSelector } from 'react-redux';

import {
  selectCategories,
  selectIngridients,
  selectGlasses,
} from 'redux/filter/selectors';

export const useCategories = () => {
  const allCategories = useSelector(selectCategories);
  const allIngridients = useSelector(selectIngridients);
  const allGlasses = useSelector(selectGlasses);

  return {
    allCategories,
    allIngridients,
    allGlasses,
  };
};
