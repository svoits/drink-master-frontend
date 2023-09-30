import { getIngredients } from '../../redux/filters/filters-operation';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik, FieldArray } from 'formik';
import Select from 'react-select';
import _ from 'lodash';

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

const handleMeasureChange = (selectedOption, index) => {
  const newSelectedMeasures = [...selectedMeasures];
  newSelectedMeasures[index] = selectedOption;
  setSelectedMeasures(newSelectedMeasures);
};

const DrinkIngredientsFields1 = ({
  formData,
  setFormData,
  handleSubmit,
  refId,
}) => {
  const maxIngredientCount = 10;
  const dispatch = useDispatch();
  const ingredientsList = useSelector((state) => state.filters.ingredients);
  let ingredientsCount = formData.ingredients.length;
  // const ingredientsList = formData.ingredients;
  console.log(ingredientsList);
  const handleFieldChange = (field, val, index) => {
    const ing = formData.ingredients[index];

    if (ing) {
      // console.log(val);

      const ingredients = [...formData.ingredients];
      ingredients[index][field] = val;

      // console.log('ingredients', _.clone(ingredients));

      setFormData({ ...formData, ingredients });
    }
  };

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const handleAddIngredient = () => {
    if (ingredientsCount < maxIngredientCount) {
      return (ingredientsCount += 1);
    }
  };

  const handleRemoveIngredient = () => {
    if (ingredientsCount > 1) {
      return (ingredientsCount -= 1);
    }
  };
  return (
    <>
      <h2>Ingredients</h2>
      <Formik initialValues={{ ...formData }} innerRef={refId}>
        <Form>
          <FieldArray
            name="ingredients"
            render={(arrayHelpers) => (
              <>
                <button
                  type="button"
                  onClick={() => arrayHelpers.remove(index)}
                  onClick={handleRemoveIngredient}
                >
                  -
                </button>
                <span>{ingredientsCount}</span>
                <button
                  type="button"
                  onClick={handleAddIngredient}
                  // onClick={() =>
                  //   arrayHelpers.push({
                  //     ingredient: '',
                  //     measure: '',
                  //     quantity: '',
                  //   })
                  // }
                >
                  +
                </button>
                {ingredientsList && (
                  <div>
                    {formData.ingredients.map((ingredient, index) => {
                      const measureVal = measures.find(
                        (m) => m.value === ingredient.measure,
                      );

                      const ingredientVal = ingredientsList.find(
                        (ii) => ii.title === ingredient.ingredient,
                      );

                      return (
                        <div key={index}>
                          <label htmlFor={`ingredients[${index}]`}>
                            <Select
                              className="basic-single"
                              classNamePrefix="select"
                              closeMenuOnSelect={true}
                              isMulti={false}
                              isClearable={true}
                              options={ingredientsList.map(
                                ({ _id, title }) => ({
                                  value: _id,
                                  label: title,
                                }),
                              )}
                              name={`ingredients[${index}]`}
                              id={`ingredient${index}`}
                              value={ingredientVal}
                              onChange={({ value }) =>
                                handleFieldChange('ingredient', value, index)
                              }
                              placeholder="Lem"
                            />
                          </label>
                          <Field
                            name={`ingredients[${index}].quantity`}
                            value={ingredient.quantity}
                            onChange={(e) =>
                              handleFieldChange(
                                'quantity',
                                parseInt(e.target.value, 10),
                                index,
                              )
                            }
                          />
                          <label htmlFor={`ingredients[${index}].measure`}>
                            <Select
                              className="basic-single"
                              classNamePrefix="select"
                              options={measures}
                              name={`ingredients[${index}].measure`}
                              value={measureVal}
                              onChange={({ value }) =>
                                handleFieldChange('measure', value, index)
                              }
                              placeholder="cl"
                            />
                          </label>
                        </div>
                      );
                    })}
                  </div>
                )}
              </>
            )}
          />
        </Form>
      </Formik>
    </>
  );
};

export default DrinkIngredientsFields1;
