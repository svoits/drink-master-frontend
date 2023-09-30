import {
  List,
  DrinkIMG,
  DrinkListItem,
  DrinkTITLE,
  AboutDRINK,
  DrinkCATEGORY,
  ButtonsWRAPPER,
  DrinkPageLINK,
  DeleteDrinkBTN,
  TrashIcon,
} from './MyDrinksList.styled';
import CocktailImage from '../../images/heroImage/hero-img-desc-2x.png';
import { removeOwnDrink } from '../../redux/drinks/drinks-operations';
import { useDispatch } from 'react-redux';

export const MyDrinksList = ({ drinks }) => {
  const dispatch = useDispatch();

  const handleDeleteDrink = (id) => {
    dispatch(removeOwnDrink(id));
  };

  return (
    <List>
      {drinks.map(({ _id, drinkThumb, drink, category, description }) => (
        <DrinkListItem key={_id}>
          <DrinkIMG
            src={drinkThumb !== '' ? drinkThumb : CocktailImage}
            alt={`${drink}`}
          />
          <DrinkTITLE>{drink}</DrinkTITLE>
          <DrinkCATEGORY>{category}</DrinkCATEGORY>
          <AboutDRINK>{description}</AboutDRINK>
          <ButtonsWRAPPER>
            <DrinkPageLINK to={`/drinks/${_id}`}>See more</DrinkPageLINK>
            <DeleteDrinkBTN onClick={() => handleDeleteDrink(_id)}>
              <TrashIcon />
            </DeleteDrinkBTN>
          </ButtonsWRAPPER>
        </DrinkListItem>
      ))}
    </List>
  );
};
