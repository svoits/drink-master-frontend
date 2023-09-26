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

// import { Container, Pagination, Stack } from '@mui/material';

import { DrinksListPage } from 'components/DrinksListPage/DrinksListPage';

import { SearchDrinks } from 'components/SearchDrinks/SearchDrinks';

import {
  DrinksPageSECTION,
  DrinksPageContainer,
  DrinksPageTITLE,
} from './DrinksPage.styled';

// import { Container } from '@mui/material';

export default function DrinksPage() {

  return (
    <DrinksPageSECTION>
      <DrinksPageContainer>
        <DrinksPageTITLE>Drinks</DrinksPageTITLE>
        {/* {isLoading && !error && <Loader />} */}
        <SearchDrinks />
        <DrinksListPage />
        {/* <DrinksListPage
      id={drink._id}
      drink={drink.drink}
      drinkThumb={drink.drinkThumb} /> */}
        {/* {drinks.length > 0 && <DrinksListPage />} */}

        {/* <Container>
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
      </Container> */}
      </DrinksPageContainer>
    </DrinksPageSECTION>
  );
}
