// import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
// import { getMainPageAllDrinks } from '../../redux/drinks/drinks-operations';
import {
  selectDrinks,
  // selectError,
  // selectIsLoading,
} from '../../redux/drinks/drinks-selectors';

import { Container, Pagination, Stack } from '@mui/material';

import { DrinksListPage } from 'components/DrinksListPage/DrinksListPage';

import { SearchDrinks } from 'components/SearchDrinks/SearchDrinks';

import Loader from 'components/Loader';

// import usePagination from 'components/Paginator/Paginator';

import { DrinksPageTITLE } from './DrinksPage.styled';

export default function DrinksPage() {
  // const dispatch = useDispatch();

  const { drinks, isLoading, error } = useSelector(selectDrinks);

  // const isLoading = useSelector(selectIsLoading);

  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(getMainPageAllDrinks());
  // }, [dispatch]);

  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);
  const per_page = 12;
  // const filteredDrinks = useSelector(selectFilteredDrinks);
  setPageQty(Math.ceil(drinks.length / per_page));

  // const datapag = usePagination(drinks, per_page);
  const handleChangePagination = (e, p) => {
    setPage(p);
    datapag.jump(p);
  };

  return (
    <>
      <DrinksPageTITLE>Drinks</DrinksPageTITLE>
      {isLoading && !error && <Loader />}
      <SearchDrinks />
      <Container>
        <Stack spacing={2}>
          {drinks.length > 0 && <DrinksListPage />}
          <Pagination
            color="primary"
            // count={10}
            count={pageQty}
            // size="large"
            page={page}
            // variant="outlined"
            // shape="rounded"
            onChange={handleChangePagination}
          />
        </Stack>
      </Container>
    </>
  );
}
