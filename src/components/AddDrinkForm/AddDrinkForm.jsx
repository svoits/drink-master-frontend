import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addMyDrink } from '../../redux/drinks/drinks-operations';
import DrinkDescriptionFields from "../DrinkDescriptionFields/DrinkDescriptionFields";
import DrinkIngredientsFields from "../DrinkIngredientsFields";
import RecipePreparationText from "../RecipePreparationText/RecipePreparationText";

const AddDrinkForm = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        photo: '',
        title: '',
        recipe: '',
        category: '',
        glasses: '',
        ingredients: [
            { ingredient: '', measure: '', quantity: '' },
            { ingredient: '', measure: '', quantity: '' },
            { ingredient: '', measure: '', quantity: '' },
        ],
        textareaRecipe: '',
    });

    const handleSubmit = () => {
        dispatch(addMyDrink(formData));
        console.log(formData);
    };

    return (
        <>
            <DrinkDescriptionFields
                formData={formData}
                setFormData={setFormData}
            />

            <DrinkIngredientsFields
                formData={formData}
                setFormData={setFormData}
            />
            <RecipePreparationText
                formData={formData}
                setFormData={setFormData}
            />

            <button type="button" onClick={handleSubmit}>Add</button>
        </>
    );
};

export default AddDrinkForm;