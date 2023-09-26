import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeDrink } from '../../redux/drinks/drinks-operations';
import DefaultImg from '../../images/recipeDefaultPhoto/recipe-default-desktop.jpg';

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
    <div>
      <img src={image || DefaultImg} alt={title} />
      <h2>{title}</h2>
      <p>{alcoholic ? 'Alcoholic' : 'NonAlcoholic'}</p>
      <p>{description}</p>
      <Link to={`/drink/${_id}`}>See More</Link>
      <button onClick={handleRemoveFromFavorites}>Delete</button>
    </div>
  );
}
