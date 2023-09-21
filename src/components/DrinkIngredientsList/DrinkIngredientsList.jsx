import React from 'react';
import { DrinkIngredientItem } from '../DrinkIngredientItem/DrinkIngredientItem';

// import {
//   selectContacts,
//   selectVisibleContacts,
// } from 'redux/contacts/selectors';
// import { useSelector } from 'react-redux';

export const DrinkIngredientsList = ({ ingredients }) => {
  //   const contacts = useSelector(selectContacts);

  return (
    <div>
      {ingredients.map((ingredient) => (
        <div key={ingredient.ingredientId.$oid}>
          <DrinkIngredientItem
            id={ingredient.ingredientId.$oid}
            title={ingredient.title}
            measure={ingredient.measure}
          />
        </div>
      ))}
    </div>
  );
};