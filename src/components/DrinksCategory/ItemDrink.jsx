import React from 'react';
import { CategoryDrinksITEM, CategoryDrinksIMG, CategoryDrinksTEXTDIV, CategoryDrinksP } from './DrinksCategory.styled';
import { DrinkPageLINK } from '../DrinksList/DrinksList.styled';

export const ItemDrink = ({item}) => {
 
  const { _id: id, drink, drinkThumb } = item;
  console.log(id, drink, drinkThumb);
  return (
    <CategoryDrinksITEM key={id}>
      {drinkThumb ? ( 
        <CategoryDrinksIMG src={drinkThumb} alt={drink} />
      ) : (
        <CategoryDrinksIMG src="" alt={drink} />
      )}
      <CategoryDrinksTEXTDIV>
        <CategoryDrinksP>{drink}</CategoryDrinksP>
        <DrinkPageLINK to={`/drinks/${id}`}>See more</DrinkPageLINK>
      </CategoryDrinksTEXTDIV>
    </CategoryDrinksITEM>
  );
};