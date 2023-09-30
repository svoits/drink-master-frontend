import { useDispatch } from 'react-redux';
import { useState, useRef } from 'react';
import { addMyDrink } from '../../redux/drinks/drinks-operations';
import DrinkDescriptionFields from '../DrinkDescriptionFields/DrinkDescriptionFields';
import RecipePreparationText from '../RecipePreparationText/RecipePreparationText';
import DrinkIngredientsFields1 from '../DrinkIngredientsFields1/DrinkIngredientsFields1';

const AddDrinkForm = () => {
  const dispatch = useDispatch();
  const formAref = useRef();
  const formBref = useRef();
  const formCref = useRef();

  const [formData, setFormData] = useState({
    drink: '',
    description: '',
    alcoholic: '',
    category: '',
    glass: '',
    instructions: '',
    drinkThumb: '',
    ingredients: [
      { ingredientId: '', measure: '', quantity: '' },
      { ingredientId: '', measure: '', quantity: '' },
      { ingredientId: '', measure: '', quantity: '' },
    ],
  });

  const handleSubmit = () => {
    formAref.current.handleSubmit();
    formBref.current.handleSubmit();
    formCref.current.handleSubmit();

    const { values } = formAref.current;
    const { values: valuesPrep } = formCref.current;
    const { values: valuesIng } = formBref.current;
    const data = {
      ...values,
      ingredients: JSON.stringify(formData.ingredients),
      drinkThumb: formData.drinkThumb,
      instructions: valuesPrep.instructions,
    };

    console.log({ formData, valuesPrep, valuesIng, data });

    dispatch(addMyDrink(data));
  };

  return (
    <>
      <DrinkDescriptionFields
        formData={formData}
        setFormData={setFormData}
        refId={formAref}
      />
      <DrinkIngredientsFields1
        formData={formData}
        setFormData={setFormData}
        refId={formBref}
      />
      <RecipePreparationText
        formData={formData}
        setFormData={setFormData}
        refId={formCref}
      />

      <button type="button" onClick={handleSubmit}>
        Add
      </button>
    </>
  );
};

export default AddDrinkForm;
