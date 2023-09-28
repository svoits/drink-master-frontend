import { useDrink } from '../../redux/hooks/useDrink';
import { ItemDrink } from './ItemDrink';
import { CategoryDrinksLIST } from './DrinksCategory.styled'
import Loader from '../Loader/Loader';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMainPageAllDrinks } from '../../redux/drinks/drinks-operations'

export const DrinksCategory = () => {
  
  const dispatch = useDispatch();

  
  useEffect(() => {
    console.log("mainPageDrinks")
    dispatch(getMainPageAllDrinks())

  }, [dispatch])

  const { mainPageDrinks, isLoading, error } = useDrink();
  console.log(mainPageDrinks)
  return (
    <>
      <section>
        <div className="container">
        {isLoading ?
          <Loader /> :
          Object.keys(mainPageDrinks).length > 0 &&
          Object.keys(mainPageDrinks).map((category, idx) => (
            <div key={idx}>
              <p>{category} </p>
              <CategoryDrinksLIST>
                {mainPageDrinks[category].map((item) => (
                  <ItemDrink key={item._id} item={item} />
                ))}
              </CategoryDrinksLIST>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
