// import StubPhoto from '';
import {
  IngredientPhoto,
  IngredientPhotoWrapper,
  IngredientDescription,
  IngredientTitle,
  IngredientMeasure,
  StubPhotoWrapper,
} from './DrinkIngredientItem.styled';
import { ReactComponent as StubPhoto } from '../../assets/stub.svg';

export const DrinkIngredientItem = ({ id, title, measure, images }) => {
  // if (images['ingredientThumb'] === '') {
  //   return (images['ingredientThumb'] = StubPhoto);
  // }
  return (
    <>
      <IngredientPhotoWrapper>
        {images['ingredientThumb'] === '' ? (
          <StubPhotoWrapper>
            <StubPhoto width="100%" height="100%" />
          </StubPhotoWrapper>
        ) : (
          <picture>
            <source
              media="(min-width: 1440px)"
              srcSet={images['ingredientThumb']}
            />
            <source
              media="(min-width: 768px)"
              srcSet={images['thumb-medium']}
            />
            <source media="(min-width: 375px)" srcSet={images['thumb-small']} />
            <IngredientPhoto
              src={images['ingredientThumb']}
              alt="ingredient photo"
            ></IngredientPhoto>
          </picture>
        )}
      </IngredientPhotoWrapper>
      <IngredientDescription>
        <IngredientTitle>{title}</IngredientTitle>
        <IngredientMeasure>{measure}</IngredientMeasure>
      </IngredientDescription>
    </>
  );
};
