import { useDispatch } from 'react-redux';
import { removeDrink } from '../../redux/drinks/drinks-operations';
import DefaultImg from '../../images/recipeDefaultPhoto/recipe-default-desktop.jpg';
import {
  StyledItem,
  StyledImg,
  StyledName,
  StyledDescr,
  StyledType,
  ButtonsWRAPPER,
  SeeMoreBtn,
  DeleteBtn,
} from './FavoriteDrinksItem.styled';

export default function FavoriteDrinksItem({ drink }) {
  const dispatch = useDispatch();

  const {
    _id,
    drink: title,
    alcoholic,
    drinkThumb: image,
    description,
  } = drink;

  const handleRemoveFromFavorites = () => {
    dispatch(removeDrink(_id));
  };

  return (
    <StyledItem>
      <StyledImg src={image || DefaultImg} alt={title} />
      <StyledName>{title}</StyledName>
      <StyledType>{alcoholic ? 'Alcoholic' : 'NonAlcoholic'}</StyledType>
      <StyledDescr>{description}</StyledDescr>
      <ButtonsWRAPPER>
        <SeeMoreBtn to={`/drinks/${_id}`}>See More</SeeMoreBtn>
        <DeleteBtn onClick={handleRemoveFromFavorites}>Delete</DeleteBtn>
      </ButtonsWRAPPER>
    </StyledItem>
  );
}
