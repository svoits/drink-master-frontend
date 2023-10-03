import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PreviewDrinks } from '../../components/PreviewDrinks/PreviewDrinks';
import { getMainPageAllDrinks } from '../../redux/drinks/drinks-operations';
import { useDrink } from '../../redux/hooks/useDrink';

import AddDrink from '../../components/AddDrink/AddDrink';

export default function HomePage() {
  const dispatch = useDispatch();

  const { error } = useDrink();

  useEffect(() => {
    dispatch(getMainPageAllDrinks());
  }, [dispatch]);

  return (
    <>
      <AddDrink />
      {error && <p>{error}</p>}
      <PreviewDrinks />
    </>
  );
}
