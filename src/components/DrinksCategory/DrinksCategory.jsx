import { useDrink } from '../../redux/hooks/useDrink';
import { ItemDrink } from './ItemDrink';
import { HomeDrinksLIST } from '../HomeDrinksList/HomeDrinksList.styled';

export const DrinksCategory = () => {
  const { mainPageDrinks } = useDrink();

  console.log('DrinksCategory =>', mainPageDrinks);

  console.log(mainPageDrinks);

  return (
    <>
      {Object.keys(mainPageDrinks).length > 0 &&
        Object.keys(mainPageDrinks).map((category, idx) => (
          <div key={idx}>
            <p>{category} </p>
            <HomeDrinksLIST>
              {mainPageDrinks[category].map((item) => (
                <ItemDrink key={item._id} item={item} />
              ))}
            </HomeDrinksLIST>
          </div>
        ))}
    </>
  );
};
