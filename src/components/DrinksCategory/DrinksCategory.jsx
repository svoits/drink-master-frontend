import { useDrink } from '../../redux/hooks/useDrink';
import { ItemDrink } from './ItemDrink';
import { CategoryDrinksLIST, DrinkCategoryTitle, CategoryDrinksDiv } from './DrinksCategory.styled'
import Loader from '../Loader/Loader';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMainPageAllDrinks } from '../../redux/drinks/drinks-operations'
import { NavLink } from 'react-router-dom';

export const DrinksCategory = () => {
  
  const dispatch = useDispatch();

  
  useEffect(() => {
   
    dispatch(getMainPageAllDrinks())

  }, [dispatch])

  const { mainPageDrinks, isLoading, error } = useDrink();
 
  return (
    <>
      <section>
        <div>
        {isLoading ?
          <Loader /> :
          Object.keys(mainPageDrinks).length > 0 &&
          Object.keys(mainPageDrinks).map((category, idx) => (
            <CategoryDrinksDiv key={idx}>
              <DrinkCategoryTitle>{category} </DrinkCategoryTitle>
              <CategoryDrinksLIST>

                {mainPageDrinks[category].map((item, i) => (
                  <ItemDrink key={item._id} item={item} idx={i}/>
                ))}
              </CategoryDrinksLIST>
            </CategoryDrinksDiv>
          ))}
          <div><NavLink to={`/drinks`}>See more</NavLink></div>
        </div>
      </section>
    </>
  );
};
