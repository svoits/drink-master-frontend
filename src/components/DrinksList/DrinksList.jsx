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
import { ReactComponent as RemoveIcon } from '../../images/icons/removeIcon.svg';
import CoctailImage from '../../images/heroImage/hero-img-desc-2x.png';

export const DrinksList = ({drinks, deleteDrink}) => {

  return (
    <MyDrinksList>
      {drinks.map(({ _id, drinkThumb, drink, category, description }) => (
        <DrinkListItem
          key={_id}>
          <DrinkIMG
            src={drinkThumb !== '' ? drinkThumb : CoctailImage}
            alt={`${drink}`} />
          <DrinkTITLE>
            {drink}
          </DrinkTITLE>
          <DrinkCATEGORY>
            {category}
          </DrinkCATEGORY>
          <AboutDRINK>
            {description}
          </AboutDRINK>
          <ButtonsWRAPPER>
            <DrinkPageLINK
              to={`/drinks/${_id}`}>
              See more
            </DrinkPageLINK>
            <DeleteDrinkBTN
              onClick={() => deleteDrink(_id)}>
              <RemoveIcon
                width="18"
                height="22" />
            </DeleteDrinkBTN>
          </ButtonsWRAPPER>
        </DrinkListItem>))
      }
    </MyDrinksList>
  );
};
