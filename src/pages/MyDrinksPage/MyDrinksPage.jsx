// import { useDispatch, useSelector } from 'react-redux';
import { DrinksList } from '../../components/DrinksList/DrinksList';
import PageTitle from '../../components/PageTitle/PageTitle';
import { Wrapper } from './MyDrinksPage.styled';
// import { selectDrinks, selectIsLoading } from '../../redux/drinks/drinks-selectors';
// import { getOwnDrinks, getMainPageAllDrinks } from '../../redux/drinks/drinks-operations';
// import Loader from '../../components/Loader';
// import { useEffect } from 'react';

export default function MyDrinksPage() {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const { drinks } = useSelector(selectDrinks);

  // useEffect(() => {
  //   dispatch(getOwnDrinks());
  // }, [dispatch]);

  return (
    <Wrapper>
      <PageTitle title={'My Drinks'} />
      {/* {drinks.length > 0 || !isLoading && <DrinksList />} */}
      <DrinksList />
    </Wrapper>
  );
}
