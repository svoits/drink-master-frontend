import { getIngredients } from '../../redux/filters/filters-operation';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  Formik, FieldArray } from 'formik';
// import Select from 'react-select';
import { IoMdClose } from 'react-icons/io';
// import _ from 'lodash';

import {
  SearchDrinkTitle,
  SearchDrinkForm,
  ContainerDIV,
  ListDIV,
  IngredientsDIV,
  IngredientsInput,
  StyledSelect,
  StyledSelectCL,
} from './DrinkIngredientsFields1.styled'
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
      <SearchDrinkTitle>Ingredients</SearchDrinkTitle>
      <Formik initialValues={{ ...formData }} innerRef={refId}>
        <SearchDrinkForm>
          <FieldArray
            name="ingredients"
            render={(arrayHelpers, index) => (
              <>
                <div key={index}>
                <button
                  type="button"
                  onClick={() => arrayHelpers.remove(index)}
                  // onClick={handleRemoveIngredient}
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
                </div>
                {ingredientsList && (
                  <ContainerDIV>
                    {formData.ingredients.map((ingredient, index) => {
                      const measureVal = measures.find(
                        (m) => m.value === ingredient.measure,
                      );

                      const ingredientVal = ingredientsList.find(
                        (ii) => ii.title === ingredient.ingredient,
                      );

                      return (
                        <ListDIV key={index}>
                          <label htmlFor={`ingredients[${index}]`}>
                            <StyledSelect
                              className="basic-single"
                              classNamePrefix="Select"
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
                                handleFieldChange('ingredientId', value, index)
                              }
                              placeholder="Lem"
                            />
                          </label>
                          <IngredientsDIV>
                          <IngredientsInput
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
                            <StyledSelectCL
                              className="basic-single"
                              classNamePrefix="Select"
                              options={measures}
                              name={`ingredients[${index}].measure`}
                              value={measureVal}
                              onChange={({ value }) =>
                                handleFieldChange('measure', value, index)
                              }
                              placeholder="cl"
                            />
                          </label>
                          </IngredientsDIV>
                          <button type="button" onClick={handleRemoveIngredient}>
                            <IoMdClose />
                          </button>
                        </ListDIV>
                      );
                    })}
                  </ContainerDIV>
                )}
              </>
            )}
          />
        </SearchDrinkForm>
      </Formik>
    </>
  );
};

export default DrinkIngredientsFields1;