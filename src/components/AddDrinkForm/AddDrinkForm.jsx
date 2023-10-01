import { useDispatch } from 'react-redux';
import { useState, useRef } from 'react';
import { addMyDrink } from '../../redux/drinks/drinks-operations';
import DrinkDescriptionFields from '../DrinkDescriptionFields/DrinkDescriptionFields';
import DrinkIngredientsFields1 from '../DrinkIngredientsFields1/DrinkIngredientsFields1';
import RecipePreparationText from '../RecipePreparationText';

import { 
  AddDrinkFormContainer,
  AddDrinkFormBtn
} from './AddDrinkForm.styled'
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
    if (formAref.current && formBref.current && formCref.current) {
      formAref.current.handleSubmit();
      formBref.current.handleSubmit();
      formCref.current.handleSubmit();

      const { values: valuesFormA } = formAref.current;
      const { values: valuesFormB } = formBref.current;
      const { values: valuesFormC } = formCref.current;

      const data = {
        ...valuesFormA,
        ingredients: JSON.stringify(valuesFormB.ingredients),
        instructions: valuesFormC.instructions,
      };

      console.log({ formData, data });

      dispatch(addMyDrink(data));
    }
  };

  return (
    <AddDrinkFormContainer>
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

      <AddDrinkFormBtn type="submit" onClick={handleSubmit}>
        Add
      </AddDrinkFormBtn>
    </AddDrinkFormContainer>
  );
};

export default AddDrinkForm;
