import { useEffect } from 'react';
import { selectIngredients } from '../../redux/filters/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { getIngredients } from '../../redux/filters/filters-operation';
import { DrinkIngredientItem } from '../DrinkIngredientItem/DrinkIngredientItem';
import {
  IngredientsTitle,
  IngredientsList,
} from './DrinkIngredientsList.styled';

export const DrinkIngredientsList = ({ ingredients }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const ingredientsWithImages = useSelector(selectIngredients);

  return (
    <>
      <IngredientsTitle>Ingredients</IngredientsTitle>
      {ingredientsWithImages.length && (
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

            // console.log({ ingredient, ingredientRec, ingredientsWithImages });

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
      )}
    </>
  );
};
