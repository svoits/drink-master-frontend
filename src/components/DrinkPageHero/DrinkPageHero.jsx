import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiTrash, BiHeart } from 'react-icons/bi';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  addDrinkToFavorite,
  removeDrink,
  getFavoriteAll,
} from '../../redux/drinks/drinks-operations';
import { selectFavoriteDrinks } from '../../redux/drinks/drinks-selectors';
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
import { toastConfig } from '../../helpers/toast';

export const DrinkPageHero = ({
  id,
  name,
  glass,
  alcoholic,
  description,
  imgPath,
}) => {
  const notifyAdded = () =>
    toast.success(
      'Added to favorites',
      toastConfig({
        icon: <BiHeart />,
      }),
    );
  const notifyRemoved = () =>
    toast.info(
      'Removed from favorites',
      toastConfig({
        icon: <BiTrash />,
      }),
    );
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
                onClick={() =>
                  dispatch(addDrinkToFavorite(id)).then(() => notifyAdded())
                }
              >
                Add to favorite drinks
              </AddToFavoriteButton>
            ) : (
              <AddToFavoriteButton
                onClick={() =>
                  dispatch(removeDrink(id)).then(() => notifyRemoved())
                }
              >
                Remove from favorite drinks
              </AddToFavoriteButton>
            )}
            <ToastContainer icon={false} />
          </DrinkDescriptionWrapper>
          <DrinkPhotoWrapper>
            <DrinkPhoto src={imgUrl} alt="img"></DrinkPhoto>
          </DrinkPhotoWrapper>
        </DrinkHeroWrapper>
      )}
    </>
  );
};
