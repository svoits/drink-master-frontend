import { useEffect } from 'react';
import { DrinkPageHero } from '../../components/DrinkPageHero/DrinkPageHero';
import { DrinkIngredientsList } from '../../components/DrinkIngredientsList/DrinkIngredientsList';
import { RecipePreparation } from '../../components/RecipePreparation/RecipePreparation';
// import { getDrinkById } from '../../redux/drinks/drinks-operations';
import { getDrinkById } from '../../fakeApiRecipes';
import { getIngredientsListId } from '../../fakeApiRecipes';
import { useParams } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectDrinks } from '../../redux/drinks/drinks-selectors';
// import { getMainPageAllDrinks } from '../../redux/drinks/drinks-operations';
import { Container } from '../../components/Container/Container.styled';
import { DrinkPageWrapper } from './DrinkPage.styled';

export default function DrinkPage() {
  const { drinkId } = useParams();
  // const dispatch = useDispatch();

  // dispatch(getMainPageAllDrinks());
  // const drinks = useSelector(selectDrinks);
  // console.log(drinks);
  const drink = getDrinkById(drinkId);

  const ingredients = getIngredientsListId(drinkId);

  return (
    <DrinkPageWrapper>
      <Container>
        <DrinkPageHero
          id={drink._id}
          name={drink.drink}
          glass={drink.glass}
          alcoholic={drink.alcoholic}
          description={drink.description}
          imgPath={drink.drinkThumb}
        />
        <DrinkIngredientsList ingredients={ingredients} />
        <RecipePreparation instructions={drink.instructions} />
      </Container>
    </DrinkPageWrapper>
  );
}
