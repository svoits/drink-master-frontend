import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import { getIngredients } from '../../redux/filters/filters-operation';
import { IoMdClose } from 'react-icons/io';

const measures = [
  { value: 'ml', label: 'ml' },
  { value: 'oz', label: 'oz' },
  { value: 'cl', label: 'cl' },
  { value: 'tsp', label: 'tsp' },
  { value: 'pinch', label: 'pinch' },
  { value: 'sprigs', label: 'sprigs' },
  { value: 'cup', label: 'cup' },
  { value: 'cups', label: 'cups' },
  { value: 'tblsp', label: 'tblsp' },
];

const validationSchema = Yup.object().shape({
  ingredients: Yup.array().of(
    Yup.object().shape({
      ingredient: Yup.string().required('The ingredient is mandatory'),
      measure: Yup.string().required('Measure is mandatory'),
      quantity: Yup.number()
        .typeError('The quantity must be a number')
        .positive('The number must be positive')
        .required('Quantity is required'),
    }),
  ),
});

const DrinkIngredientsFields = ({
  formData,
  setFormData,
  handleSubmit,
  refId,
}) => {
  const dispatch = useDispatch();
  const [ingredientCount, setIngredientCount] = useState(3);
  const ingredients = useSelector((state) => state.filters.ingredients);
  const [selectedIngredients, setSelectedIngredients] = useState(
    Array(ingredientCount).fill(null),
  );
  const [selectedMeasures, setSelectedMeasures] = useState(
    Array(ingredientCount).fill(null),
  );

  const maxIngredientCount = 10;

  const handleFieldChange = (field, val, index) => {
    const ing = formData.ingredients[index];

    if (ing) {
      const ingredients = [...formData.ingredients];
      ingredients[index][field] = val;

      setFormData({ ...formData, ingredients });
    }
  };

  const handleIngredientChange = (selectedOption, index, form) => {
    const newSelectedIngredients = [...selectedIngredients];
    newSelectedIngredients[index] = selectedOption;
    setSelectedIngredients(newSelectedIngredients);

    console.log(selectedOption, index);
    const updatedFormData = {
      ...formData,
      ingredients: formData.ingredients.map((ingredient, i) =>
        i === index
          ? {
              ...ingredient,
              ingredient: selectedOption ? selectedOption.value : '',
            }
          : ingredient,
      ),
    };
    setFormData(updatedFormData);
  };

  const handleMeasureChange = (selectedOption, index) => {
    const newSelectedMeasures = [...selectedMeasures];
    newSelectedMeasures[index] = selectedOption;
    setSelectedMeasures(newSelectedMeasures);
  };

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const handleAddIngredient = () => {
    if (ingredientCount < maxIngredientCount) {
      setIngredientCount(ingredientCount + 1);
    }
  };

  const handleRemoveIngredient = () => {
    if (ingredientCount > 1) {
      setIngredientCount(ingredientCount - 1);
    }
  };

  return (
    <div>
      <h2>Ingredients</h2>
      <div>
        <button type="button" onClick={handleRemoveIngredient}>
          -
        </button>
        <span>{ingredientCount}</span>
        <button type="button" onClick={handleAddIngredient}>
          +
        </button>
      </div>
      <Formik
        innerRef={refId}
        initialValues={{ ...formData }}
        // validationSchema={validationSchema}
      >
        <Form>
          {[...Array(ingredientCount)].map((_, index) => (
            <div key={index}>
              <label htmlFor={`ingredient${index}`}>
                <Field name={`ingredient${index}`}>
                  {({ field, form }) => (
                    <Select
                      closeMenuOnSelect={true}
                      isMulti={false}
                      isClearable={true}
                      options={ingredients.map(({ _id, title }) => ({
                        value: _id,
                        label: title,
                      }))}
                      name={`ingredients[${index}]`}
                      id={`ingredient${index}`}
                      {...field}
                      value={selectedIngredients[index]}
                      onChange={(selectedOption) => {
                        handleIngredientChange(selectedOption, index, form);
                        handleFieldChange('title', selectedOption.label, index);
                        handleFieldChange(
                          'ingredientId',
                          selectedOption.value,
                          index,
                        );
                      }}
                      placeholder=""
                    />
                  )}
                </Field>
              </label>
              <div>
                <Field
                  name={`quantity${index}`}
                  placeholder="Enter the quantity"
                  onChange={(evt) =>
                    handleFieldChange(
                      'quantity',
                      parseInt(evt.target.value, 10),
                      index,
                    )
                  }
                />
                <ErrorMessage name={`quantity${index}`} component="div" />
                <label htmlFor={`measure${index}`}>
                  <Select
                    options={measures}
                    name={`measures[${index}]`}
                    value={selectedMeasures[index]}
                    onChange={(selectedOption) =>
                      handleMeasureChange(selectedOption, index)
                    }
                    placeholder="cl"
                  />
                </label>
                <button type="button" onClick={handleRemoveIngredient}>
                  <IoMdClose />
                </button>
              </div>
            </div>
          ))}
        </Form>
      </Formik>
    </div>
  );
};

export default DrinkIngredientsFields;