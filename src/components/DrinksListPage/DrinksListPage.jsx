// import { useEffect } from 'react';
// import { useState } from 'react';
// import { useDrink } from '../../redux/hooks/useDrink';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';

// import { getRequestedDrink } from '../../redux/drinks/drinks-operations';

// import Loader from '../Loader/Loader';
import DefaultImg from '../../assets/stub.svg';
// import { toast } from 'react-toastify';

import {
  DrinksListPageLIST,
  DrinksListPageITEM,
  DrinksListPagesIMG,
  DrinksListPageH5,
  DrinksListPageLink,
  DrinksListPageTEXTDIV,
} from './DrinksListPage.styled';

// import { Container, Pagination, Stack } from '@mui/material';
// import { Paginator } from '../../components/Paginator/Paginator';

export const DrinksListPage = ({ drinks }) => {
  // const dispatch = useDispatch();
  // const { drinks } = useDrink();
  // const { drinks, isLoading, error } = useSelector(selectDrinks);
  // const { drinks, total  } = useDrink();
  // const {drinks, total, isLoading, error } = useDrink();
  // // console.log(drinks)
  // console.log(total)
  //   const [post, setPost] = useState([]);
  //   const [page, setPage] = useState(1);
  //   const [pageQty, setPageQty] = useState(0);
  //   const per_page = 9;

  // const datapag = Paginator(drinks, per_page);

  // const handleChangePagination = (e, p) => {
  //   setPage(e);
  //   datapag.jump(p);
  // };
  //   useEffect(() => {
  //     setPost(drinks);
  //      if(total > 0) {
  //   setPageQty(Math.ceil(total / per_page));
  // }
  //   }, [drinks, total, per_page]);
  //   console.log(pageQty);

  // const handleChange = (event, value) => {
  //   setPage(value);
  // };

  //=========================================
  // const [currentPage, setCurrentPage] = useState(1);
  // const [currentDrinks, setCurrentDrinks] = useState(0);
  // const itemPerPage = 9;
  // const indexOfLastItem = currentPage * itemPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemPerPage;
  // const pageNumber = [];

  // useEffect(() => {
  //   dispatch(getRequestedDrink());
  // }, [dispatch]);

  // useEffect(() => {
  //   setCurrentDrinks(total.slice(indexOfFirstItem, indexOfLastItem));

  //   for(let i = 0; i <= (Math.ceil(drinks.length / itemPerPage)); i++){
  //     pageNumber.push(i);
  //   }
  // }, [total, drinks, itemPerPage ]);
  //=========================================

  return (
    <>
      <DrinksListPageLIST>
        {/* {isLoading && <Loader />} */}
        {/* {error && <p>Sorry. There are no coctails ... 😭</p>} */}
        {/* {error &&
        toast.error('Sorry. There are no coctails ... 😭', {
          position: 'top-center',
          theme: 'light',
        })} */}
        {/* {error && <p>{ error }</p>} */}

        {/* {isLoading ? <Loader /> : */}
        {drinks.length > 0 ? (
          drinks.map(({ _id, drink, drinkThumb }) => (
            <DrinksListPageITEM key={_id}>
              {/* {drinkThumb ? (
              <DrinksListPagesIMG src={drinkThumb} alt={drink} />
            ) : (
              <DrinksListPagesIMG src={DefaultImg} />
            )} */}
              <DrinksListPagesIMG src={drinkThumb || DefaultImg} />
              <DrinksListPageTEXTDIV>
                <DrinksListPageH5>{drink}</DrinksListPageH5>
                <DrinksListPageLink to={`/drinks/${_id}`}>
                  See more
                </DrinksListPageLink>
              </DrinksListPageTEXTDIV>
            </DrinksListPageITEM>
          ))
        ) : drinks.length === 0 ? (
          <p>
           Sorry. There are no coctails ... 😭
          </p>
        ) : null}
        {/* {error && <p>{ error }</p>} */}
      </DrinksListPageLIST>
    </>
  );
};
//============================================================================================

