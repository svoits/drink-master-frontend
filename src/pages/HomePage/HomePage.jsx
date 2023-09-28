import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DrinksCategory } from '../../components/DrinksCategory/DrinksCategory';
import { getMainPageAllDrinks } from '../../redux/drinks/drinks-operations';
import { useDrink } from '../../redux/hooks/useDrink';

import Loader from '../../components/Loader';
import AddDrink from '../../components/AddDrink/AddDrink';

export default function HomePage() {
  const dispatch = useDispatch();
 
  const { isLoading, error } = useDrink();

  useEffect(() => {
    dispatch(getMainPageAllDrinks());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <AddDrink />
      <DrinksCategory />
    </>
  );
}
