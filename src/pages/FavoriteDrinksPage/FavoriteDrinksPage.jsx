import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getFavoriteAll } from '../../redux/drinks/drinks-operations';
import FavoriteDrinkList from '../../components/FavoriteDrinkList/FavoriteDrinkList';
import {
  DefaultContainer,
  DefaultDescr,
  DefaultImg,
  FavoritesContainer,
  ListFavorite,
} from './FavoriteDrinksPage.styled';
import { Container } from '../../components/Container/Container.styled';
import CoctailImage from '../../images/heroImage/hero-img-desc-2x.png';
import Loader from '../../components/Loader';
import PageTitle from '../../components/PageTitle/PageTitle';
import Paginator from '../../components/Pagi/Paginator';
import { useDrink } from '../../redux/hooks/useDrink';
import { useResize } from '../../hooks/useResize';

export default function FavoriteDrinksPage() {
  const dispatch = useDispatch();
  const { total, favoriteDrinks } = useDrink();
  const { width } = useResize();
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbersToShow = 5;
  const itemsPerPage = width < 1440 ? 8 : 9;

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setIsLoading(true);
    dispatch(getFavoriteAll({ page: currentPage, limit: itemsPerPage }))
      .then(() => setIsLoading(false))
      .catch((err) => {
        console.error(err);
        setErrorMessage('Something went wrong, please try later.');
        setIsLoading(false);
      });
  }, [currentPage, dispatch, itemsPerPage]);

  const totalPages = Math.ceil(total / itemsPerPage);

  return (
    <FavoritesContainer>
      <Container>
        <PageTitle title="Favorites" />
        {isLoading && <Loader />}
        {total === 0 && (
          <DefaultContainer>
            <DefaultImg src={CoctailImage} alt="Cocktail" />
            <DefaultDescr>You have not added any cocktails yet</DefaultDescr>
          </DefaultContainer>
        )}
        {total > 0 && (
          <ListFavorite>
            <FavoriteDrinkList drinks={favoriteDrinks} />
          </ListFavorite>
        )}
        {errorMessage && <div>{errorMessage}</div>}
        {totalPages > 1 && (
          <Paginator
            drinksPerPage={itemsPerPage}
            totalDrinks={total}
            onPageChange={onPageChange}
            pageNumbersToShow={pageNumbersToShow}
          />
        )}
      </Container>
    </FavoritesContainer>
  );
}
