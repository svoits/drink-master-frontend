import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PageTitle from '../../components/PageTitle/PageTitle';
import { getFavoriteAll } from '../../redux/drinks/drinks-operations';
import { selectFavoriteDrinks } from '../../redux/drinks/drinks-selectors';
import FavoriteDrinkList from '../../components/FavoriteDrinkList/FavoriteDrinkList';
import Loader from '../../components/Loader';
import { Container } from '../../components/Container/Container.styled';

export default function FavoriteDrinksPage() {
  const dispatch = useDispatch();
  const favoriteDrinks = useSelector(selectFavoriteDrinks);
  const [errorMessage, setErrorMessage, isLoading] = useState('');

  useEffect(() => {
    dispatch(getFavoriteAll()).catch((err) => {
      console.error(err);
      setErrorMessage('Something went wrong please try later.');
    });
  }, [dispatch]);

  return (
    <Container>
      <PageTitle title="Favorite" />
      {isLoading && <Loader />}
      {errorMessage && <div>{errorMessage}</div>}
      <div>
        {favoriteDrinks.length !== 0 ? (
          <FavoriteDrinkList drinks={favoriteDrinks} />
        ) : (
          <p>You have not added any cocktails yet</p>
        )}
      </div>
    </Container>
  );
}
