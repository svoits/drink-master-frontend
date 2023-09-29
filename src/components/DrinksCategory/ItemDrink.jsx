import React from 'react';
import { CategoryDrinksITEM, CategoryDrinksIMG, CategoryDrinksTEXTDIV, CategoryDrinksP, CategoryDrinksLink} from './DrinksCategory.styled';



export const ItemDrink = ({item, idx}) => {
  if ((window.innerWidth <= 768 && idx > 0) || (window.innerWidth <= 1440 && idx > 1)) {
  
    return(``);
  } 
  
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