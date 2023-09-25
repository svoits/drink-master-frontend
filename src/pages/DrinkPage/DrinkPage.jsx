import { useEffect } from 'react';
import { DrinkPageHero } from '../../components/DrinkPageHero/DrinkPageHero';
import { DrinkIngredientsList } from '../../components/DrinkIngredientsList/DrinkIngredientsList';
import { RecipePreparation } from '../../components/RecipePreparation/RecipePreparation';
import { getDrinkById } from '../../redux/drinks/drinks-operations';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectDrinkById } from '../../redux/drinks/drinks-selectors';
import { Container } from '../../components/Container/Container.styled';
import { DrinkPageWrapper } from './DrinkPage.styled';

export default function DrinkPage() {
  const dispatch = useDispatch();
  const { drinkId } = useParams();
  const drink = useSelector((state) => selectDrinkById(state, drinkId));

  useEffect(() => {
    dispatch(getDrinkById(drinkId));
  }, [dispatch]);

  return (
    <DrinkPageWrapper>
      <Container>
        {drink && (
          <>
            <DrinkPageHero
              id={drink._id}
              name={drink.drink}
              glass={drink.glass}
              alcoholic={drink.alcoholic}
              description={drink.description}
              imgPath={drink.drinkThumb}
            />
            <DrinkIngredientsList ingredients={drink.ingredients} />
            <RecipePreparation instructions={drink.instructions} />
          </>
        )}
      </Container>
    </DrinkPageWrapper>
  );
}
