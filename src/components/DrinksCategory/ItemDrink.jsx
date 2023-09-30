import React from 'react';
import { useResize } from '../../hooks/useResize';
import { CategoryDrinksITEM, CategoryDrinksIMG, CategoryDrinksTEXTDIV, CategoryDrinksP, CategoryDrinksLink} from './DrinksCategory.styled';



export const ItemDrink = ({item, idx}) => {
  const { width } = useResize();

  if ((width <= 768 && idx > 0) || (width <= 1440 && idx > 1)) {
  
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