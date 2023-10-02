import { useDispatch, useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import { addMyDrink } from '../../redux/drinks/drinks-operations';
import DrinkDescriptionFields from '../DrinkDescriptionFields/DrinkDescriptionFields';
import DrinkIngredientsFields1 from '../DrinkIngredientsFields/DrinkIngredientsFields1';
import RecipePreparationText from '../RecipePreparationText/RecipePreparationText';

import { AddDrinkFormContainer, AddDrinkFormBtn } from './AddDrinkForm.styled';
import { Link } from 'react-router-dom';

const AddDrinkForm = () => {
  const dispatch = useDispatch();
  const birthDate = useSelector((state) => state.auth.user.birthDate);

  const formAref = useRef();
  const formBref = useRef();
  const formCref = useRef();

  const currentDate = new Date();
  const userBirthDate = new Date(birthDate);
  const ageDiff = currentDate.getFullYear() - userBirthDate.getFullYear();

  const [formData, setFormData] = useState({
    drink: '',
    description: '',
    alcoholic: ageDiff >= 18 ? 'Alcoholic' : 'Non alcoholic',
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
        ...formData,
        alcoholic: valuesFormA.alcoholic,
        category: valuesFormA.category,
        glass: valuesFormA.glass,
        ingredients: JSON.stringify(
          valuesFormB.ingredients.filter((ing) => ing.ingredientId),
        ),
        instructions: valuesFormC.instructions,
      };

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

      <Link to={'/my'}>
        <AddDrinkFormBtn type="submit" onClick={handleSubmit}>
          Add
        </AddDrinkFormBtn>
      </Link>
    </AddDrinkFormContainer>
  );
};

export default AddDrinkForm;
