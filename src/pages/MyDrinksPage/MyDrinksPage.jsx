import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import Loader from '../../components/Loader';
import PageTitle from '../../components/PageTitle/PageTitle';
import Paginator from '../../components/Paginator/Paginator';
import CocktailImage from '../../images/heroImage/hero-img-desc-2x.png';
import {
  MyDrinksContainer,
  ListMyDrinks,
  DefaultContainer,
  DefaultDescr,
  DefaultImg,
} from './MyDrinksPage.styled';
import { useDrink } from '../../redux/hooks/useDrink';
import { getOwnDrinks } from '../../redux/drinks/drinks-operations';
import { Container } from '../../components/Container/Container.styled';
import { useResize } from '../../hooks/useResize';
import { MyDrinksList } from '../../components/MyDrinksList/MyDrinksList';

export default function MyDrinksPage() {
  const dispatch = useDispatch();
  const { total, drinks } = useDrink();
  const { width } = useResize();
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbersToShow = width < 768 ? 5 : 8;
  const itemsPerPage = 6;

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(total / itemsPerPage);

  useEffect(() => {
    setIsLoading(true);
    dispatch(getOwnDrinks({ page: currentPage, limit: itemsPerPage }))
      .then(() => setIsLoading(false))
      .catch((err) => {
        console.error(err);
        setErrorMessage('Something went wrong, please try later.');
        setIsLoading(false);
      });
  }, [currentPage, dispatch, itemsPerPage]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <MyDrinksContainer>
      <Container>
        <PageTitle title={'My Drinks'} />
        {total === 0 && (
          <DefaultContainer>
            <DefaultImg src={CocktailImage} alt="Cocktail" />
            <DefaultDescr>
              You have no own drinks, try to set more own drinks...
            </DefaultDescr>
          </DefaultContainer>
        )}
        {drinks.length > 0 && (
          <ListMyDrinks>
            <MyDrinksList drinks={drinks} />
          </ListMyDrinks>
        )}
        {errorMessage && <p>{errorMessage}</p>}
        {totalPages > 1 && (
          <Paginator
            drinksPerPage={itemsPerPage}
            totalDrinks={total}
            onPageChange={onPageChange}
            pageNumbersToShow={pageNumbersToShow}
          />
        )}
      </Container>
    </MyDrinksContainer>
  );
}
