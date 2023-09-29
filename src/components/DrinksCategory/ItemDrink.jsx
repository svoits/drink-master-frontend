import React from 'react';
import { CategoryDrinksITEM, CategoryDrinksIMG, CategoryDrinksTEXTDIV, CategoryDrinksP } from './DrinksCategory.styled';

import { NavLink } from 'react-router-dom';

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
        <NavLink to={`/drinks/${id}`}>See more</NavLink>
      </CategoryDrinksTEXTDIV>
    </CategoryDrinksITEM>
  );
};