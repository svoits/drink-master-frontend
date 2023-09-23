// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import recipes from './recipes.json';

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

  // const { isLoading, error } = useSelector(selectDrinks);

  // const visibleDrinks = useSelector(selectVisibleDrinks);

  // const handleDeleteDrink = ({ id }) => {
  //     dispatch(deleteDrink(id));
  // }
  return (
    <div>
      <HomeDrinksLIST>
        {/* {isLoading && <Loader />}
      {error && <p>Sorry. There are no images ... 😭</p>}
      {error &&
        toast.error('Sorry. There are no muvies ... 😭', {
          position: 'top-center',
          theme: 'light',
        })} */}
        {recipes.map(({ id, drink, drinkThumb }) => (
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
