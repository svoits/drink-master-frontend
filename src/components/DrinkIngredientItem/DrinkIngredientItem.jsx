import StubFoto from '../../images/stub.svg';
import {
  IngredientFoto,
  IngredientFotoWrapper,
  IngredientDescription,
  IngredientTitle,
  IngredientMeasure,
} from './DrinkIngredientItem.styled';

import { selectIngredients } from '../../redux/filters/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { getIngredients } from '../../redux/filters/filters-operation';

export const DrinkIngredientItem = ({ id, title, measure, images }) => {
  // console.log(images);
  if (images['ingredientThumb'] === '') {
    return (images['ingredientThumb'] = StubFoto);
  }

  // const imgPath = images.ingredientThumb;

  // const imgUrl = imgPath || 'https://via.placeholder.com/107x107';
  //   const dispatch = useDispatch();

  return (
    <>
      <IngredientFotoWrapper>
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet={images['ingredientThumb']}
          />
          <source media="(min-width: 768px)" srcSet={images['thumb-medium']} />
          <source media="(min-width: 375px)" srcSet={images['thumb-small']} />
          <IngredientFoto
            src={images['ingredientThumb']}
            alt="ingredient foto"
          ></IngredientFoto>
        </picture>
      </IngredientFotoWrapper>
      <IngredientDescription>
        <IngredientTitle>{title}</IngredientTitle>
        <IngredientMeasure>{measure}</IngredientMeasure>
      </IngredientDescription>
    </>
  );
};
