import { DrinkPageHero } from '../../components/DrinkPageHero/DrinkPageHero';
import { DrinkIngredientsList } from '../../components/DrinkIngredientsList/DrinkIngredientsList';
import { RecipePreparation } from '../../components/RecipePreparation/RecipePreparation';
import { getDrinkById, getIngredientsListId } from '../../fakeApiRecipes';

export const DrinkDetails = () => {
  // const { id } = useParams();
  const id = '639b6de9ff77d221f190c50f';
  const drink = getDrinkById(id);
  const ingredients = getIngredientsListId(id);

  return (
    <main>
      <DrinkPageHero
        id={drink._id}
        name={drink.drink}
        glass={drink.glass}
        alcoholic={drink.alcoholic}
        description={drink.description}
        // img={drink.drinkThumb}
      />
      <DrinkIngredientsList ingredients={ingredients} />
      <RecipePreparation instructions={drink.instructions} />
    </main>
  );
};
