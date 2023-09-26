import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiCheck } from 'react-icons/bi';
import {
  addDrinkToFavorite,
  removeDrink,
  getFavoriteAll,
} from '../../redux/drinks/drinks-operations';
import { selectFavoriteDrinks } from '../../redux/drinks/drinks-selectors';
import StubPhoto from '../../assets/stub.svg';
import {
  DrinkTitle,
  DrinkSubTitle,
  DrinkDescription,
  AddToFavoriteButton,
  DrinkPhoto,
  DrinkDescriptionWrapper,
  DrinkHeroWrapper,
  DrinkPhotoWrapper,
} from './DrinkPageHero.styled';

export const DrinkPageHero = ({
  id,
  name,
  glass,
  alcoholic,
  description,
  imgPath,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoriteAll());
  }, [dispatch]);

  const favoriteDrinksList = useSelector(selectFavoriteDrinks);

  const isDrinkInFavoriteList = (id) => {
    if (favoriteDrinksList) {
      return favoriteDrinksList.find((drink) => drink._id === id);
    }
  };

  const imgUrl = imgPath ? `${imgPath}` : StubPhoto;

  return (
    <>
      {favoriteDrinksList && (
        <DrinkHeroWrapper>
          <DrinkDescriptionWrapper>
            <DrinkTitle>{name}</DrinkTitle>
            <DrinkSubTitle>
              {glass} / {alcoholic}
            </DrinkSubTitle>
            <DrinkDescription>{description}</DrinkDescription>
            {!isDrinkInFavoriteList(id) ? (
              <AddToFavoriteButton
                onClick={() => dispatch(addDrinkToFavorite(id))}
              >
                Add to favorite drinks
              </AddToFavoriteButton>
            ) : (
              <AddToFavoriteButton onClick={() => dispatch(removeDrink(id))}>
                Remove from favorite drinks
              </AddToFavoriteButton>
            )}
          </DrinkDescriptionWrapper>
          <DrinkPhotoWrapper>
            <DrinkPhoto src={imgUrl} alt="img"></DrinkPhoto>
          </DrinkPhotoWrapper>
        </DrinkHeroWrapper>
      )}
    </>
  );
};
