import DefaultImg from '../../assets/stub.svg';

import {
  CategoryDrinksITEM,
  CategoryDrinksIMG,
  CategoryDrinksTEXTDIV,
  CategoryDrinksP,
  CategoryDrinksLink,
} from './PreviewDrinks.styled';
import DefaultImg from '../../assets/stub.svg';

export const ItemDrink = ({ item }) => {
  const { _id: id, drink, drinkThumb } = item;

  return (
    <CategoryDrinksITEM key={id}>
      <CategoryDrinksIMG src={drinkThumb !== '' ? drinkThumb : DefaultImg} alt={drink} />
      <CategoryDrinksTEXTDIV>
        <CategoryDrinksP>{drink}</CategoryDrinksP>
        <CategoryDrinksLink to={`/drinks/${id}`}>See more</CategoryDrinksLink>
      </CategoryDrinksTEXTDIV>
    </CategoryDrinksITEM>
  );
};
