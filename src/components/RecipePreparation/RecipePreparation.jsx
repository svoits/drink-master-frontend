import recipeDefaultMobile from '../../images/recipeDefaultPhoto/recipe-default-mobile.jpg';
import recipeDefaultMobile2x from '../../images/recipeDefaultPhoto/recipe-default-mobile@2x.jpg';
import recipeDefaultTablet from '../../images/recipeDefaultPhoto/recipe-default-tablet.jpg';
import recipeDefaultTablet2x from '../../images/recipeDefaultPhoto/recipe-default-tablet@2x.jpg';
import recipeDefaultDesktop from '../../images/recipeDefaultPhoto/recipe-default-desktop.jpg';
import recipeDefaultDesktop2x from '../../images/recipeDefaultPhoto/recipe-default-desktop@2x.jpg';

import {
  RecipePreparationTitle,
  RecipePreparationDescription,
  RecipePreparationImage,
  RecipePreparationWrap,
} from './RecipePreparation.styled';

export const RecipePreparation = ({ instructions }) => {
  //   const dispatch = useDispatch();

  return (
    <>
      <RecipePreparationTitle>Recipe Preparation</RecipePreparationTitle>
      <RecipePreparationWrap>
        <RecipePreparationDescription>
          {instructions}
        </RecipePreparationDescription>
        <div>
          <picture>
            <source
              media="(min-width: 1440px)"
              srcSet={`${recipeDefaultDesktop} 1x, ${recipeDefaultDesktop2x} 2x`}
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${recipeDefaultTablet} 1x, ${recipeDefaultTablet2x} 2x`}
            />
            <source
              media="(min-width: 375px)"
              srcSet={`${recipeDefaultMobile} 1x, ${recipeDefaultMobile2x} 2x`}
            />
            <RecipePreparationImage
              src={recipeDefaultMobile}
              alt="drins photo"
            ></RecipePreparationImage>
          </picture>
        </div>
      </RecipePreparationWrap>
    </>
  );
};
