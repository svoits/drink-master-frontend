// import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDrinks } from '../../redux/drinks/drinks-selectors';
import { removeOwnDrink } from '../../redux/drinks/drinks-operations';
// import Loader from '../Loader';
// import { NavLink } from 'react-router-dom';
import {
  MyDrinksList,
  DrinkIMG,
  DrinkListItem,
  DrinkTITLE,
  AboutDRINK,
  DrinkCATEGORY,
  ButtonsWRAPPER,
  DrinkPageLINK,
  DeleteDrinkBTN
} from './DrinksList.styled';
// import { getOwnDrinks, getMainPageAllDrinks } from '../../redux/drinks/drinks-operations';
// import { drinks } from '../../fakeApi/fakeApiDrinks';

export const DrinksList = () => {
  const dispatch = useDispatch();

  const { drinks, isLoading, error } = useSelector(selectDrinks);

  // useEffect(() => {
  //   dispatch(getOwnDrinks());
  // }, [dispatch]);

  const handleDeleteDrink = (id) => {
    dispatch(removeOwnDrink(id));
  };

  return (
    <>
      {drinks.length > 0 && (
        <MyDrinksList>
          {/* {isLoading && <Loader />}
          {error && <p> {error} </p>} */}
          {drinks.map((drink) => (
            <DrinkListItem key={drink._id}>
              <DrinkIMG src={drink.drinkThumb} />
              <DrinkTITLE> {drink.drink} </DrinkTITLE>
              <DrinkCATEGORY> {drink.category} </DrinkCATEGORY>
              <AboutDRINK> {drink.description} </AboutDRINK>
              <ButtonsWRAPPER>
                <DrinkPageLINK to={`/drink/${drink._id}`}>See more</DrinkPageLINK>
                <DeleteDrinkBTN onClick={() => handleDeleteDrink(drink._id)}>Del</DeleteDrinkBTN>
              </ButtonsWRAPPER>
            </DrinkListItem>
          ))}
        </MyDrinksList>
      )}
    </>
  );
};
