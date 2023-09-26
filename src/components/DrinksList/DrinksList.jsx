import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Loader from '../Loader';
import {
  MyDrinksList,
  DrinkIMG,
  DrinkListItem,
  DrinkTITLE,
  AboutDRINK,
  DrinkCATEGORY,
  ButtonsWRAPPER,
  DrinkPageLINK,
  DeleteDrinkBTN,
} from './DrinksList.styled';
import {
  getOwnDrinks,
  removeOwnDrink,
} from '../../redux/drinks/drinks-operations';
import { useDrink } from '../../redux/hooks/useDrink';

export const DrinksList = () => {
  const dispatch = useDispatch();
  const { isLoading, drinks, error } = useDrink();

  useEffect(() => {
    dispatch(getOwnDrinks());
  }, [dispatch]);

  const handleDeleteDrink = (id) => {
    dispatch(removeOwnDrink(id)).then(() => {
      dispatch(getOwnDrinks());
    });
  };

  return (
    <MyDrinksList>
      {isLoading ? (
        <Loader />
      ) : drinks.drinks && drinks.drinks.length > 0 ? (
        drinks.drinks.map(
          ({ _id, drinkThumb, drink, category, description }) => (
            <DrinkListItem key={_id}>
              <DrinkIMG src={drinkThumb} />
              <DrinkTITLE> {drink} </DrinkTITLE>
              <DrinkCATEGORY> {category} </DrinkCATEGORY>
              <AboutDRINK> {description} </AboutDRINK>
              <ButtonsWRAPPER>
                <DrinkPageLINK to={`/drinks/${_id}`}>See more</DrinkPageLINK>
                <DeleteDrinkBTN onClick={() => handleDeleteDrink(_id)}>
                  x
                </DeleteDrinkBTN>
              </ButtonsWRAPPER>
            </DrinkListItem>
          ),
        )
      ) : drinks.drinks !== null ? (
        <p>
          You have no own drinks left or reached the end of your Drink List, try
          to set more own drinks...
        </p>
      ) : null}
    </MyDrinksList>
  );
};
