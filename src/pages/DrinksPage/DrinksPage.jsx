// // import { useEffect } from 'react';
// import { useState } from 'react';
// // import { useDispatch } from 'react-redux';

// import { Container, Pagination, Stack } from '@mui/material';

// import { DrinksListPage } from 'components/DrinksListPage/DrinksListPage';

// // import { SearchDrinks } from 'components/SearchDrinks/SearchDrinks';

// // import { useDrink } from '../../redux/hooks/useDrink';

// // import Loader from '../../components/Loader'

// // import { usePagination } from 'components/Paginator/Paginator';

// import { DrinksPageTITLE } from './DrinksPage.styled';

// export default function DrinksPage() {
//   // const dispatch = useDispatch();

//   // const { isLoggedIn } = useAuth();
//   // const { isLoading, error } = useDrink();

//   // const { drinks } = useDrink();
//   // console.log(drinks.total)

//   // useEffect(() => {

//   //   if(isLoggedIn) dispatch(getMainPageAllDrinks());

//   // }, [dispatch, isLoggedIn]);

//   // const { drinks, isLoading, error } = useSelector(selectDrinks);

//   // const { isLoading, error } = useSelector(selectDrinks);

//   // const isLoading = useSelector(selectIsLoading);

//   // const error = useSelector(selectError);

//   // useEffect(() => {
//   //   dispatch(drinksOperations.getRequestedDrink());
//   // }, [dispatch]);

//   // const [page, setPage] = useState(1);
//   // const [pageQty, setPageQty] = useState(0);
//   // const per_page = 9;
//   // // const filteredDrinks = useSelector(selectFilteredDrinks);
//   // setPageQty(Math.ceil(drinks.total / per_page));

//   // const datapag = usePagination(drinks, per_page);
//   // const handleChangePagination = (e, p) => {
//   //   setPage(e);
//   //   datapag.jump(p);
//   // };

//   return (
//     <>
//       <DrinksPageTITLE>Drinks</DrinksPageTITLE>
//       {/* {isLoading && !error && <Loader />}
//       <DrinksListPage /> */}
//       {/* {drinks.length > 0 && <DrinksListPage />} */}
//       {/* <SearchDrinks /> */}
//       {/* <Container> */}
//         {/* <Stack spacing={2}> */}
//           <DrinksListPage />
//           {/* <Pagination
//             color="primary"
//             count={10}
//             count={pageQty}
//             size="large"
//             page={page}
//             variant="outlined"
//             shape="rounded"
//             onChange={handleChangePagination}
//           /> */}
//         {/* </Stack> */}
//       {/* </Container> */}
//     </>
//   );
// }
//===================================


//===================================
import { useEffect } from 'react';
import { useState } from 'react';
// import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getRequestedDrink } from '../../redux/drinks/drinks-operations';

import Loader from '../../components/Loader';

import  Paginator  from '../../components/Pagi/Paginator';
import { Container } from '../../components/Container/Container.styled';

import { useDrink } from '../../redux/hooks/useDrink';
// import {selectDrinks} from '../../redux/drinks/drinks-selectors';

import { DrinksListPage } from 'components/DrinksListPage/DrinksListPage';

import { SearchDrinks } from 'components/SearchDrinks/SearchDrinks';

import {
  // DrinksPageSECTION,
  DrinksPageContainer,
  DrinksPageTITLE,
} from './DrinksPage.styled';

export default function DrinksPage() {
  const dispatch = useDispatch();
  const { isLoading, drinks, error } = useDrink();

  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbersToShow = 5;

  const totalItems = drinks.length;
  console.log(totalItems);
  const itemsPerPage = 9;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  useEffect(() => {
    dispatch(getRequestedDrink());
  }, [dispatch]);

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
        {/* {isLoading && !error && <Loader />} */}
        <SearchDrinks />
        {/* <DrinksListPage /> */}
        <div>
          {isLoading && <Loader />}
          {error && <p>{error}</p>}
          {drinks.length > 0 && (
            <DrinksListPage
              drinks={drinks.slice(startIndex, endIndex)}
              //  drinks={drinks}
            />
          )}
        </div>
        {totalPages > 1 && (
          <Paginator
            drinksPerPage={itemsPerPage}
            totalDrinks={totalItems}
            onPageChange={onPageChange}
            pageNumbersToShow={pageNumbersToShow}
          />
        )}
      </DrinksPageContainer>
    </Container>
  );
}
