import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PageTitle from '../../components/PageTitle/PageTitle';
import { getFavoriteAll } from '../../redux/drinks/drinks-operations';
import { selectFavoriteDrinks } from '../../redux/drinks/drinks-selectors';
import FavoriteDrinkList from '../../components/FavoriteDrinkList/FavoriteDrinkList';
import {
  DefaultContainer,
  DefaultDescr,
  DefaultImg,
  FavoritesContainer,
} from './FavoriteDrinksPage.styled';
import { Container } from '../../components/Container/Container.styled';
import CoctailImage from '../../images/heroImage/hero-img-desc-2x.png';
import Loader from '../../components/Loader';
export default function FavoriteDrinksPage() {
  const dispatch = useDispatch();
  const favoriteDrinks = useSelector(selectFavoriteDrinks);
  const [errorMessage, setErrorMessage, isLoading] = useState('');

  useEffect(() => {
    dispatch(getFavoriteAll()).catch((err) => {
      console.error(err);
      setErrorMessage('Something went wrong please try later.');
    });
  }, [dispatch, setErrorMessage]);

  return (
    <Container>
      <FavoritesContainer>
        <PageTitle title="Favorite" />
        {isLoading && <Loader />}
        {favoriteDrinks.length === 0 && (
          <DefaultContainer>
            <DefaultImg src={CoctailImage} alt="Cocktail" />
            <DefaultDescr>You have not added any cocktails yet</DefaultDescr>
          </DefaultContainer>
        )}
        {favoriteDrinks.length > 0 && (
          <div>
            <FavoriteDrinkList drinks={favoriteDrinks} />
          </div>
        )}
        {errorMessage && <div>{errorMessage}</div>}
      </FavoritesContainer>
    </Container>
  );
}
