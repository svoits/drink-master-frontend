import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRequestedDrink } from '../../redux/drinks/drinks-operations';
import Loader from '../../components/Loader';
import Paginator from '../../components/Pagi/Paginator';
import { Container } from '../../components/Container/Container.styled';
import { useDrink } from '../../redux/hooks/useDrink';
import { DrinksListPage } from 'components/DrinksListPage/DrinksListPage';
import { SearchDrinks } from 'components/SearchDrinks/SearchDrinks';
import { DrinksPageContainer, DrinksPageTITLE } from './DrinksPage.styled';
import { useResize } from '../../hooks/useResize';

export default function DrinksPage() {
  const dispatch = useDispatch();
  const { width } = useResize();
  const { isLoading, drinks, error, total } = useDrink();

  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbersToShow = 5;

  const itemsPerPage = width < 1440 ? 10 : 9;

  const totalPages = Math.ceil(total / itemsPerPage);

  // useEffect(() => {
  //   dispatch(getRequestedDrink({ page: currentPage, limit: itemsPerPage }));
  // }, [currentPage, dispatch, itemsPerPage]);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // useEffect(() => {
  //   dispatch(getRequestedDrink()).catch((err) => {
  //     console.error(err);
  //     setErrorMessage('Something went wrong please try later.');
  //   });
  //   setIsLoading(true);
  //   dispatch(getRequestedDrink())
  //     .then(() => setIsLoading(false))
  //     .catch((err) => {
  //       console.error(err);
  //       setErrorMessage('Something went wrong, please try later.');
  //       setIsLoading(false);
  //     });
  // }, [dispatch]);

  return (
    <Container>
      <DrinksPageContainer>
        <DrinksPageTITLE>Drinks</DrinksPageTITLE>
        <SearchDrinks page={currentPage} limit={itemsPerPage} />
        {/* <DrinksListPage /> */}
        <div>
          {isLoading && <Loader />}
          {error && <p>No drinks found for your query. Please try again.</p>}
          {total > 0 && !error && <DrinksListPage drinks={drinks} />}
        </div>
        {totalPages > 1 && (
          <Paginator
            drinksPerPage={itemsPerPage}
            totalDrinks={total}
            onPageChange={onPageChange}
            pageNumbersToShow={pageNumbersToShow}
          />
        )}
      </DrinksPageContainer>
    </Container>
  );
}
