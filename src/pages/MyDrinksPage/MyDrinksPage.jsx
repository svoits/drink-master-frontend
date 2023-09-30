import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { DrinksList } from '../../components/DrinksList/DrinksList';
import Loader from '../../components/Loader';
import PageTitle from '../../components/PageTitle/PageTitle';
import Paginator from '../../components/Pagi/Paginator';
import { MyDrinksContainer, ListMyDrinks } from './MyDrinksPage.styled';
import { useDrink } from '../../redux/hooks/useDrink';
import { getOwnDrinks } from '../../redux/drinks/drinks-operations';
import { Container } from '../../components/Container/Container.styled';

export default function MyDrinksPage() {
  const dispatch = useDispatch();
  const { total, drinks } = useDrink();
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbersToShow = 5;
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
          <p>You have no own drinks, try to set more own drinks...</p>
        )}
        {drinks.length > 0 && (
          <ListMyDrinks>
            <DrinksList drinks={drinks} />
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
