import {
  DrinkTitle,
  DrinkSubTitle,
  DrinkDescription,
  AddToFavoriteButton,
  DrinkFoto,
  DrinkHeroDescriptionWrapper,
  DrinkHeroWrapper,
} from './DrinkPageHero.styled';

export const DrinkPageHero = ({
  id,
  name,
  glass,
  alcoholic,
  description,
  imgPath,
}) => {
  //   const dispatch = useDispatch();
  const imgUrl = imgPath ? `${imgPath}` : 'https://via.placeholder.com/335x400';

  return (
    <DrinkHeroWrapper>
      <DrinkHeroDescriptionWrapper>
        <DrinkTitle>{name}</DrinkTitle>
        <DrinkSubTitle>
          {glass} / {alcoholic}
        </DrinkSubTitle>
        <DrinkDescription>{description}</DrinkDescription>
        <AddToFavoriteButton
        // onClick={() => dispatch(addDrinkToFavorite(id))}
        >
          Add to favorite drinks
        </AddToFavoriteButton>
      </DrinkHeroDescriptionWrapper>
      <DrinkFoto src={imgUrl} alt="img"></DrinkFoto>
    </DrinkHeroWrapper>
  );
};
