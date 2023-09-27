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
import {ReactComponent as RemoveIcon} from '../../images/icons/removeIcon.svg'

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
      {isLoading ?
        <Loader /> :
        drinks.length > 0 ?
          drinks.map(({_id, drinkThumb, drink, category, description}) => (
            <DrinkListItem key={_id}>
              <DrinkIMG src={drinkThumb} />
              <DrinkTITLE> {drink} </DrinkTITLE>
              <DrinkCATEGORY> {category} </DrinkCATEGORY>
              <AboutDRINK> {description} </AboutDRINK>
              <ButtonsWRAPPER>
                <DrinkPageLINK to={`/drinks/${_id}`}>See more</DrinkPageLINK>
                <DeleteDrinkBTN onClick={() => handleDeleteDrink(_id)}>
                  <RemoveIcon width="18" height="22" />
                </DeleteDrinkBTN>
              </ButtonsWRAPPER>
            </DrinkListItem>
          )) :
          drinks.length === 0 ?
            (<p>You have no own drinks left or reached the end of your Drink List,
              try to set more own drinks...
            </p>) :
            null
      }
      {error && <p>{ error }</p>}
    </MyDrinksList>    
  );
};
