import React from 'react';
import { getIngredientById } from '../../fakeApiIngredients';
import {
  IngredientFoto,
  IngredientFotoWrapper,
  IngredientDescription,
} from './DrinkIngredientItem.styled';

// import PropTypes from 'prop-types';
// import { ContactItemCss } from './ContactItem.styled';
// import { useDispatch } from 'react-redux';

export const DrinkIngredientItem = ({ id, title, measure }) => {
  const ingredient = getIngredientById(id);
  console.log(ingredient.ingredientThumb);

  const imgPath = ingredient.ingredientThumb;

  const imgUrl = imgPath || 'https://via.placeholder.com/107x107';
  //   const dispatch = useDispatch();

  return (
    <>
      <IngredientFotoWrapper>
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet={ingredient['ingredientThumb']}
          />
          <source
            media="(min-width: 768px)"
            srcSet={ingredient['thumb-medium']}
          />
          <source
            media="(min-width: 375px)"
            srcSet={ingredient['thumb-small']}
          />
          <IngredientFoto src={imgUrl} alt="ingredient foto"></IngredientFoto>
        </picture>
      </IngredientFotoWrapper>
      <IngredientDescription>
        <p>{title}</p>
        <p>{measure}</p>
      </IngredientDescription>
    </>
  );
};
