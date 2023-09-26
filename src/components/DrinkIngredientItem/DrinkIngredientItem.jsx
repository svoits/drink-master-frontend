import StubPhoto from '../../assets/stub.svg';
import {
  IngredientPhoto,
  IngredientPhotoWrapper,
  IngredientDescription,
  IngredientTitle,
  IngredientMeasure,
} from './DrinkIngredientItem.styled';

export const DrinkIngredientItem = ({ id, title, measure, images }) => {
  if (images['ingredientThumb'] === '') {
    return (images['ingredientThumb'] = StubPhoto);
  }

  // const imgPath = images.ingredientThumb;

  // const imgUrl = imgPath || 'https://via.placeholder.com/107x107';

  return (
    <>
      <IngredientPhotoWrapper>
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet={images['ingredientThumb']}
          />
          <source media="(min-width: 768px)" srcSet={images['thumb-medium']} />
          <source media="(min-width: 375px)" srcSet={images['thumb-small']} />
          <IngredientPhoto
            src={images['ingredientThumb']}
            alt="ingredient photo"
          ></IngredientPhoto>
        </picture>
      </IngredientPhotoWrapper>
      <IngredientDescription>
        <IngredientTitle>{title}</IngredientTitle>
        <IngredientMeasure>{measure}</IngredientMeasure>
      </IngredientDescription>
    </>
  );
};
