import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import PageTitle from '../../components/PageTitle/PageTitle';
import Paginator from '../../components/Pagi/Paginator';

export default function FavoriteDrinksPage() {
  const dispatch = useDispatch();
  const favoriteDrinks = useSelector(selectFavoriteDrinks);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbersToShow = 5;

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setIsLoading(true);
    dispatch(getFavoriteAll())
      .then(() => setIsLoading(false))
      .catch((err) => {
        console.error(err);
        setErrorMessage('Something went wrong, please try later.');
        setIsLoading(false);
      });
  }, [dispatch]);

  const totalItems = favoriteDrinks.length;
  const itemsPerPage = 9;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

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
            <FavoriteDrinkList
              drinks={favoriteDrinks.slice(startIndex, endIndex)}
            />
          </div>
        )}
        {errorMessage && <div>{errorMessage}</div>}
      </FavoritesContainer>
      {totalPages > 1 && (
        <Paginator
          drinksPerPage={itemsPerPage}
          totalDrinks={totalItems}
          onPageChange={onPageChange}
          pageNumbersToShow={pageNumbersToShow}
        />
      )}
    </Container>
  );
}
