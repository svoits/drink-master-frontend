// import { useEffect } from 'react';
import {  useSelector } from 'react-redux';
// import { getMainPageAllDrinks } from '../../redux/drinks/drinks-operations';
import {
  selectDrinks,
  // selectError,
  // selectIsLoading,
} from '../../redux/drinks/drinks-selectors';

import { HomeDrinksList } from 'components/HomeDrinksList/HomeDrinksList';
// import {DrinksList} from 'components/DrinksList/DrinksList';
// import { SearchDrinks } from 'components/SearchDrinks/SearchDrinks';
import { Loader } from 'components/Loader/Loader';
import { DrinksPageTITLE } from './DrinksPage.styled';

export default function DrinksPage() {
  // const dispatch = useDispatch();

  // getting a list of contacts from the state
 
  const { drinks, isLoading, error } = useSelector(selectDrinks);
  // getting isLoading value from the state

  // const isLoading = useSelector(selectIsLoading);
  // getting error value from the state

  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(getMainPageAllDrinks());
  // }, [dispatch]);
  return (
    <>
      <DrinksPageTITLE>Drinks</DrinksPageTITLE>
      {/* <SearchDrinks /> */}
      {isLoading && !error && <Loader />}
      {/* {isLoading && <Loader />} */}
      {drinks.length > 0 && <HomeDrinksList />}

      {/* <HomeDrinksList /> */}
      {/* <DrinksList /> */}
    </>
  );
}

