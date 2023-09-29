import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { DrinksList } from '../../components/DrinksList/DrinksList';
import Loader from '../../components/Loader';
import PageTitle from '../../components/PageTitle/PageTitle';
import Paginator from '../../components/Pagi/Paginator';

import { Wrapper } from './MyDrinksPage.styled';
import { useDrink } from '../../redux/hooks/useDrink';
import { getOwnDrinks, removeOwnDrink } from '../../redux/drinks/drinks-operations';

export default function MyDrinksPage() {
  const dispatch = useDispatch();
  const { isLoading, drinks, error } = useDrink();

  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbersToShow = 5;

  const totalItems = drinks.length;
  const itemsPerPage = 6;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  useEffect(() => {
    dispatch(getOwnDrinks());
  }, [dispatch]);

  const handleDeleteDrink = (id) => {
    dispatch(removeOwnDrink(id)).then(() => {
      dispatch(getOwnDrinks());
    });
  };

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Wrapper>
      <PageTitle title={'My Drinks'} />
      {isLoading && <Loader />}
      {error && <p>{ error }</p>}
      {drinks.length > 0 ?
        <DrinksList
          drinks={drinks.slice(startIndex, endIndex)}
          deleteDrink={handleDeleteDrink} /> :
        <p>
          You have no own drinks left or reached the end of your Drink List,
          try to set more own drinks...
        </p>}
      {totalPages > 1 && (
        <div
          className='paginator'>
          <Paginator
            className='paginator'
            drinksPerPage={itemsPerPage}
            totalDrinks={totalItems}
            onPageChange={onPageChange}
            pageNumbersToShow={pageNumbersToShow}/>
        </div>
      )}
    </Wrapper>
  );
}
