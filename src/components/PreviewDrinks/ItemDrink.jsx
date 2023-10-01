import {
  CategoryDrinksITEM,
  CategoryDrinksIMG,
  CategoryDrinksTEXTDIV,
  CategoryDrinksP,
  CategoryDrinksLink,
} from './PreviewDrinks.styled';

export const ItemDrink = ({ item }) => {
  const { _id: id, drink, drinkThumb } = item;

  return (
    <CategoryDrinksITEM key={id}>
      {drinkThumb ? (
        <CategoryDrinksIMG src={drinkThumb} alt={drink} />
      ) : (
        <CategoryDrinksIMG src="" alt={drink} />
      )}
      <CategoryDrinksTEXTDIV>
        <CategoryDrinksP>{drink}</CategoryDrinksP>
        <CategoryDrinksLink to={`/drinks/${id}`}>See more</CategoryDrinksLink>
      </CategoryDrinksTEXTDIV>
    </CategoryDrinksITEM>
  );
};
