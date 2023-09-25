import FavoriteDrinksItem from '../FavoriteDrinksItem/FavoriteDrinksItem';

export default function FavoriteDrinkList({ drinks }) {
  return (
    // <div>
    //   {drinks.map((drink) => (
    //     <FavoriteDrinksItem key={drink._id} drink={drink} />
    //   ))}
    // </div>
    <div>
      {Array.isArray(drinks) &&
        drinks.map((drink) => (
          <FavoriteDrinksItem key={drink._id} drink={drink} />
        ))}
    </div>
  );
}
