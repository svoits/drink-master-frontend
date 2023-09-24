// import { useEffect } from 'react';
// import { getMainPageAllDrinks } from '../../redux/drinks/drinks-operations';
// import { useDispatch, useSelector } from 'react-redux';
import { useSelector } from 'react-redux';
// import recipes from './recipes.json';
import { Loader } from 'components/Loader/Loader';
import {
  selectDrinks,
  // selectError,
  // selectIsLoading,
} from '../../redux/drinks/drinks-selectors';
import {
  HomeDrinksLIST,
  HomeDrinksITEM,
  HomeDrinksIMG,
  HomeDrinksTEXTDIV,
  HomeDrinksP,
  HomeDrinksButton,
} from './HomeDrinksList.styled';

export function HomeDrinksList() {
  // const dispatch = useDispatch();

  const { drinks, isLoading, error } = useSelector(selectDrinks);


  // useEffect(() => {
  //   dispatch(getMainPageAllDrinks());
  // }, [dispatch]);
  return (
    <div>
      <HomeDrinksLIST>
        {isLoading && <Loader />}
      {error && <p>Sorry. There are no images ... 😭</p>}
      {/* {error &&
        toast.error('Sorry. There are no muvies ... 😭', {
          position: 'top-center',
          theme: 'light',
        })} */}
        {drinks.map(({ id, drink, drinkThumb }) => (
          <HomeDrinksITEM key={id}>
            {drinkThumb ? (
              <HomeDrinksIMG src={drinkThumb} alt={drink} />
            ) : (
              <HomeDrinksIMG src="" />
            )}
            <HomeDrinksTEXTDIV>
              <HomeDrinksP>{drink}</HomeDrinksP>
              <HomeDrinksButton>See more</HomeDrinksButton>
            </HomeDrinksTEXTDIV>
          </HomeDrinksITEM>
        ))}
      </HomeDrinksLIST>
    </div>
  );
}
