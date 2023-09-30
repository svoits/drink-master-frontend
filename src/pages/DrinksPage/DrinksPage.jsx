import { useState } from 'react';
import Loader from '../../components/Loader';
import Paginator from '../../components/Paginator/Paginator';
import { Container } from '../../components/Container/Container.styled';
import { useDrink } from '../../redux/hooks/useDrink';
import { DrinksListPage } from 'components/DrinksListPage/DrinksListPage';
import { SearchDrinks } from 'components/SearchDrinks/SearchDrinks';
import { DrinksPageContainer } from './DrinksPage.styled';
import { useResize } from '../../hooks/useResize';
import PageTitle from '../../components/PageTitle/PageTitle';
// import { toast } from 'react-toastify';

export default function DrinksPage() {
  const { width } = useResize();
  const { isLoading, drinks, error, total } = useDrink();
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbersToShow = width < 768 ? 5 : 8;
  const itemsPerPage = width < 1440 ? 10 : 9;
  const totalPages = Math.ceil(total / itemsPerPage);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <DrinksPageContainer>
      <Container>
        <PageTitle title="Drinks" />
        <SearchDrinks page={currentPage} limit={itemsPerPage} />
        {/* <DrinksListPage /> */}

        {isLoading && <Loader />}
        {total > 0 && !error && <DrinksListPage drinks={drinks} />}

        {totalPages > 1 && (
          <Paginator
            drinksPerPage={itemsPerPage}
            totalDrinks={total}
            onPageChange={onPageChange}
            pageNumbersToShow={pageNumbersToShow}
          />
        )}
      </Container>
    </DrinksPageContainer>
  );
}
