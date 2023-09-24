import { useDispatch } from 'react-redux';
import { BiCheck } from 'react-icons/bi';
import {
  addDrinkToFavorite,
  removeDrink,
} from '../../redux/drinks/drinks-operations';
import {
  DrinkTitle,
  DrinkSubTitle,
  DrinkDescription,
  AddToFavoriteButton,
  DrinkFoto,
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
  const dispatch = useDispatch();
  const imgUrl = imgPath ? `${imgPath}` : 'https://via.placeholder.com/335x400';

  return (
    <DrinkHeroWrapper>
      <div>
        <DrinkTitle>{name}</DrinkTitle>
        <DrinkSubTitle>
          {glass} / {alcoholic}
        </DrinkSubTitle>
        <DrinkDescription>{description}</DrinkDescription>
        <AddToFavoriteButton onClick={() => dispatch(addDrinkToFavorite(id))}>
          Add to favorite drinks
        </AddToFavoriteButton>
        <AddToFavoriteButton onClick={() => dispatch(removeDrink(id))}>
          Delete from favorite drinks
        </AddToFavoriteButton>
      </div>
      <DrinkFoto src={imgUrl} alt="img"></DrinkFoto>
    </DrinkHeroWrapper>
  );
};
