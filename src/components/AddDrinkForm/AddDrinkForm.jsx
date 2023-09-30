import { useDispatch } from 'react-redux';
import { useState, useRef, useEffect } from 'react';
import { addMyDrink } from '../../redux/drinks/drinks-operations';
import DrinkDescriptionFields from '../DrinkDescriptionFields/DrinkDescriptionFields';
// import DrinkIngredientsFields from '../DrinkIngredientsFields';
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
      // {
      //   _id: '65172c12b39fc60288e8037a',
      //   title: 'Dark rum',
      //   measure: '1 1/2 oz ',
      //   ingredientId: '64aebb7f82d96cc69e0eb4a7',
      // },
    ],
  });

  const handleSubmit = () => {
    formAref.current.handleSubmit();
    formBref.current.handleSubmit();
    formCref.current.handleSubmit();

    const { values } = formAref.current;
    const { values: valuesPrep } = formCref.current;
    const { values: valuesIng } = formBref.current;
    // console.log(valuesIng);
    const data = {
      ...values,

      // Stringify ingredients field to make it work with API
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
      {/* <DrinkIngredientsFields
        formData={formData}
        setFormData={setFormData}
        refId={formBref}
      /> */}
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
