// import { useEffect } from 'react';
import {  useSelector } from 'react-redux';
// import { getMainPageAllDrinks } from '../../redux/drinks/drinks-operations';
import {
  selectDrinks,
  // selectError,
  // selectIsLoading,
} from '../../redux/drinks/drinks-selectors';
<<<<<<< Updated upstream

import { DrinksListPage } from 'components/DrinksListPage/DrinksListPage';

import { SearchDrinks } from 'components/SearchDrinks/SearchDrinks';

=======

import { HomeDrinksList } from 'components/HomeDrinksList/HomeDrinksList';
// import {DrinksList} from 'components/DrinksList/DrinksList';
// import { SearchDrinks } from 'components/SearchDrinks/SearchDrinks';
>>>>>>> Stashed changes
import { Loader } from 'components/Loader/Loader';
import { DrinksPageTITLE } from './DrinksPage.styled';

export default function DrinksPage() {
  // const dispatch = useDispatch();

<<<<<<< Updated upstream
  const { drinks, isLoading, error } = useSelector(selectDrinks);

  // const isLoading = useSelector(selectIsLoading);
=======
  // getting a list of contacts from the state
 
  const { drinks, isLoading, error } = useSelector(selectDrinks);
  // getting isLoading value from the state

  // const isLoading = useSelector(selectIsLoading);
  // getting error value from the state
>>>>>>> Stashed changes

  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(getMainPageAllDrinks());
  // }, [dispatch]);
  return (
    <>
      <DrinksPageTITLE>Drinks</DrinksPageTITLE>
<<<<<<< Updated upstream
      {isLoading && !error && <Loader />}
      <SearchDrinks />
      {drinks.length > 0 && <DrinksListPage />}
{/* 
      <DrinksListPage /> */}

=======
      {/* <SearchDrinks /> */}
      {isLoading && !error && <Loader />}
      {/* {isLoading && <Loader />} */}
      {drinks.length > 0 && <HomeDrinksList />}

      {/* <HomeDrinksList /> */}
      {/* <DrinksList /> */}
>>>>>>> Stashed changes
    </>
  );
}

