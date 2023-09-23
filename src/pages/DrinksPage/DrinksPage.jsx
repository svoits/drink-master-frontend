// import { useEffect } from 'react';
import {  useSelector } from 'react-redux';
// import { getMainPageAllDrinks } from '../../redux/drinks/drinks-operations';
import {
  selectDrinks,
  // selectError,
  // selectIsLoading,
} from '../../redux/drinks/drinks-selectors';

import { DrinksListPage } from 'components/DrinksListPage/DrinksListPage';

import { SearchDrinks } from 'components/SearchDrinks/SearchDrinks';

import { Loader } from 'components/Loader/Loader';
import { DrinksPageTITLE } from './DrinksPage.styled';

export default function DrinksPage() {
  // const dispatch = useDispatch();

  const { drinks, isLoading, error } = useSelector(selectDrinks);

  // const isLoading = useSelector(selectIsLoading);

  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(getMainPageAllDrinks());
  // }, [dispatch]);
  return (
    <>
      <DrinksPageTITLE>Drinks</DrinksPageTITLE>
      {isLoading && !error && <Loader />}
      <SearchDrinks />
      {drinks.length > 0 && <DrinksListPage />}
{/* 
      <DrinksListPage /> */}

    </>
  );
}
