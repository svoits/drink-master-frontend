import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getIngredients } from '../../redux/filters/filters-operation';
import { DrinkIngredientItem } from '../DrinkIngredientItem/DrinkIngredientItem';
import {
  IngredientsTitle,
  IngredientsList,
} from './DrinkIngredientsList.styled';

import { useDrink } from '../../redux/hooks/useDrink';

export const DrinkIngredientsList = ({ ingredients }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const { drinks } = useDrink();

  const ingredientsWithImages = drinks[0].ingredients;

  return (
    <>
      {ingredientsWithImages.length > 0 && (
        <>
          {' '}
          <IngredientsTitle>Ingredients</IngredientsTitle>
          <IngredientsList>
            {ingredients.map((ingredient) => {
              const ingredientRec = ingredientsWithImages.find(
                (ii) => ii._id === ingredient.ingredientId,
              );

              const images = {
                ingredientThumb: '',
                ['thumb-medium']: '',
                ['thumb-small']: '',
              };

              if (ingredientRec) {
                images.ingredientThumb = ingredientRec.ingredientThumb;
                images['thumb-medium'] = ingredientRec['thumb-medium'];
                images['thumb-small'] = ingredientRec['thumb-small'];
              }

              return (
                <li key={ingredient.ingredientId}>
                  <DrinkIngredientItem
                    title={ingredient.title}
                    measure={ingredient.measure}
                    images={images}
                  />
                </li>
              );
            })}
          </IngredientsList>
        </>
      )}
    </>
  );
};
