import { getIngredients } from '../../redux/filters/filters-operation';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  Formik, FieldArray } from 'formik';
import { IoMdClose } from 'react-icons/io';


import {
  SearchDrinkTitle,
  SearchDrinkForm,
  ContainerDIV,
  ListDIV,
  IngredientsDIV,
  IngredientsInput,
  StyledSelect,
  StyledSelectCL,
} from './DrinkIngredientsFields1.styled';


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



const DrinkIngredientsFields1 = ({
  formData,
  setFormData,
  refId,
}) => {
  const maxIngredientCount = 10;
  const dispatch = useDispatch();
  const ingredientsList = useSelector((state) => state.filters.ingredients);
  const [ingredientsCount, setIngredientsCount] = useState(formData.ingredients.length);

  const handleFieldChange = (field, val, index) => {
    const ingredients = [...formData.ingredients];
    ingredients[index][field] = val;
    setFormData({ ...formData, ingredients });
  };

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const handleAddIngredient = () => {
    if (ingredientsCount < maxIngredientCount) {
      setFormData((prevState) => ({
        ...prevState,
        ingredients: [...prevState.ingredients, { ingredient: '', measure: '', quantity: '' }],
      }));
      setIngredientsCount(ingredientsCount + 1);
    }
  };

  const handleRemoveIngredient = (index) => {
    if (ingredientsCount > 1) {
      const updatedIngredients = [...formData.ingredients];
      updatedIngredients.splice(index, 1);
  
      setFormData((prevState) => ({
        ...prevState,
        ingredients: updatedIngredients,
      }));
      
      setIngredientsCount(ingredientsCount - 1);
    }
  };

  return (
    <>
      <SearchDrinkTitle>Ingredients</SearchDrinkTitle>
      <Formik initialValues={{ ...formData }} innerRef={refId}>
        <SearchDrinkForm>
          <FieldArray
            name="ingredients"
            render={() => (
              <>
                <div >
                <button
                  type="button"
                  onClick={() => handleRemoveIngredient()}
                >
                  -
                </button>
                <span>{ingredientsCount}</span>
                <button
                  type="button"
                  onClick={handleAddIngredient}
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
                            value={ingredient.quantity || ''}
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
                              value={measureVal || ''}
                              onChange={({ value }) =>
                                handleFieldChange('measure', value, index)
                              }
                              placeholder="cl"
                            />
                          </label>
                          </IngredientsDIV>
                          <button type="button" onClick={() => handleRemoveIngredient()}>
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