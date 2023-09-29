import FavoriteDrinksItem from '../FavoriteDrinksItem/FavoriteDrinksItem';
import { FavoriteList } from './FavoriteDrinkList.styled';

export default function FavoriteDrinkList({ drinks }) {
  return (
    <FavoriteList>
      {Array.isArray(drinks) &&
        drinks.map((drink) => (
          <FavoriteDrinksItem key={drink._id} drink={drink} />
        ))}
    </FavoriteList>
  );
}
