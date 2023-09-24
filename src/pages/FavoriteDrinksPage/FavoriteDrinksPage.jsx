import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFavoriteAll } from '../../redux/drinks/drinks-operations';
import {
  selectDrinks,
  // selectError,
  // selectIsLoading,
} from '../../redux/drinks/drinks-selectors';

import { Container, Pagination, Stack } from '@mui/material';

import { DrinksList } from 'components/DrinksList/DrinksList';

import Loader from 'components/Loader';

// import usePagination from 'components/Paginator/Paginator';

import { DrinksFavoriveTITLE } from './FavoriteDrinksPage.styled';

export const FavoriteDrinksPage = () => {
  const dispatch = useDispatch();

  const { drinks, isLoading, error } = useSelector(selectDrinks);

  // const isLoading = useSelector(selectIsLoading);

  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getFavoriteAll());
  }, [dispatch]);

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
      <DrinksFavoriveTITLE>Favorites</DrinksFavoriveTITLE>
      {isLoading && !error && <Loader />}
      <Container>
        <Stack spacing={2}>
          {drinks.length > 0 && <DrinksList />}
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
};
