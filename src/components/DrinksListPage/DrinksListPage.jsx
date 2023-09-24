import { useEffect } from 'react';
import { getMainPageAllDrinks } from '../../redux/drinks/drinks-operations';
import { useDispatch, useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';
// import recipes from './recipes.json';
import { Loader } from 'components/Loader/Loader';
import {
  selectDrinks,
  // selectError,
  // selectIsLoading,
} from '../../redux/drinks/drinks-selectors';
import {
  DrinksListPageLIST,
  DrinksListPageITEM, 
  DrinksListPagesIMG,
  DrinksListPageP,
 DrinksListPageButton,
  DrinksListPageTEXTDIV,
} from './DrinksListPage.styled';

export const DrinksListPage = () => {
  const dispatch = useDispatch();

  const { drinks, isLoading, error } = useSelector(selectDrinks);


  useEffect(() => {
    dispatch(getMainPageAllDrinks());
  }, [dispatch]);
  return (
      <DrinksListPageLIST>
        {isLoading && <Loader />}
      {error && <p>Sorry. There are no images ... 😭</p>}
      {/* {error &&
        toast.error('Sorry. There are no muvies ... 😭', {
          position: 'top-center',
          theme: 'light',
        })} */}
        {drinks.map(({ id, drink, drinkThumb }) => (
          <DrinksListPageITEM key={id}>
            {drinkThumb ? (
              <DrinksListPagesIMG src={drinkThumb} alt={drink} />
            ) : (
              <DrinksListPagesIMG src="" />
            )}
            <DrinksListPageTEXTDIV>
              <DrinksListPageP>{drink}</DrinksListPageP>
              <DrinksListPageButton>See more</DrinksListPageButton>
            </DrinksListPageTEXTDIV>
          </DrinksListPageITEM>
        ))}
      </DrinksListPageLIST>

  );
}