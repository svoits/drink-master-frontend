import React from 'react';
import { getIngredientById } from '../../fakeApiIngredients';
// import PropTypes from 'prop-types';
// import { ContactItemCss } from './ContactItem.styled';
// import { useDispatch } from 'react-redux';

export const DrinkIngredientItem = ({ id, title, measure }) => {
  const ingredient = getIngredientById(id);
  console.log(ingredient.country);
  //   const dispatch = useDispatch();

  return (
    <ul>
      <p>{title}</p>
      <p>{measure}</p>
      <p>{ingredient.country}</p>
    </ul>
  );
};
