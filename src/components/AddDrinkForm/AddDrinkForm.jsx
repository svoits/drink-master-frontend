import DrinkDescriptionFields from "../DrinkDescriptionFields/DrinkDescriptionFields";
import DrinkIngredientsFields from "../DrinkIngredientsFields";
import RecipePreparationText from "../RecipePreparationText/RecipePreparationText";


const AddDrinkForm = () => {

    return (
        <>
            <DrinkDescriptionFields />
            <DrinkIngredientsFields />
            <RecipePreparationText />
        </>

    )
};

export default AddDrinkForm;