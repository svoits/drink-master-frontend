import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, FieldArray } from 'formik';
import { FiMinus, FiPlus, FiX } from 'react-icons/fi';
import { useResize } from 'src/hooks/useResize';
import { getIngredients } from '../../redux/filters/filters-operation';
import {
  DrinkIngredientsFieldsDiv,
  SearchDrinkTitle,
  AddIngredientsForm,
  CalculationBtnWrapper,
  CalculationNumber,
  PlusMinusButton,
  ContainerDIV,
  ListDIV,
  SelectorsDIV,
  IngredientsDIV,
  IngredientsInput,
  StyledSelect,
  StyledSelectCL,
  RemoveItemButton,
} from './DrinkIngredientsFields.styled';

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

const DrinkIngredientsFields = ({ formData, refId }) => {
  const ingredientsList = useSelector((state) => state.filters.ingredients);
  const [ingredientsCount, setIngredientsCount] = useState(
    formData.ingredients.length,
  );
  const { width: windowWidth } = useResize();
  const dispatch = useDispatch();
  const iconSize = windowWidth >= 768 ? 20 : 18;
  const maxIngredientCount = 10;
  const { ingredients } = formData;

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const handleFieldChange = (field, val, index, values, setFieldValue) => {
    const ingredients = values.ingredients;
    ingredients[index][field] = val;
    setFieldValue('ingredients', ingredients);
  };

  const handleAddIngredient = ({ ingredients }, setFieldValue) => {
    if (ingredientsCount < maxIngredientCount) {
      setFieldValue('ingredients', [
        ...ingredients,
        { ingredient: '', measure: 'cl', quantity: '1' },
      ]);
      setIngredientsCount((prevState) => prevState + 1);
    }
  };

  const handleRemoveIngredient = ({ ingredients }, setFieldValue) => {
    if (ingredients.length > 1) {
      ingredients.pop();

      setFieldValue('ingredients', ingredients);

      setIngredientsCount(ingredientsCount - 1);
    }
  };

  const handleRemoveIngredientById = (
    index,
    { ingredients },
    setFieldValue,
  ) => {
    if (ingredients.length > 1) {
      const updatedIngredients = [...ingredients];

      updatedIngredients.splice(index, 1);

      setFieldValue('ingredients', updatedIngredients);
      setIngredientsCount((prevState) => prevState - 1);
    }
  };

  return (
    <DrinkIngredientsFieldsDiv>
      <SearchDrinkTitle>Ingredients</SearchDrinkTitle>
      <Formik initialValues={{ ingredients }} innerRef={refId}>
        {({ values, setFieldValue }) => {
          return (
            <AddIngredientsForm>
              <FieldArray
                name="ingredients"
                render={() => (
                  <>
                    <CalculationBtnWrapper>
                      <PlusMinusButton
                        type="button"
                        onClick={() =>
                          handleRemoveIngredient(values, setFieldValue)
                        }
                        disabled={ingredientsCount === 1}
                      >
                        <FiMinus size={16} />
                      </PlusMinusButton>
                      <CalculationNumber>{ingredientsCount}</CalculationNumber>
                      <PlusMinusButton
                        type="button"
                        onClick={() =>
                          handleAddIngredient(values, setFieldValue)
                        }
                      >
                        <FiPlus size={16} />
                      </PlusMinusButton>
                    </CalculationBtnWrapper>
                    {ingredientsList && (
                      <ContainerDIV>
                        {values.ingredients.map((ingredient, index) => {
                          const measureVal = measures.find(
                            (m) => m.value === ingredient.measure,
                          );

                          const ingredientVal = ingredientsList.find(
                            (ii) => ii.title === ingredient.ingredient,
                          );

                          return (
                            <ListDIV key={index}>
                              <SelectorsDIV>
                                <StyledSelect
                                  className="select-ingredient"
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
                                  name="ingredient"
                                  id="ingredient"
                                  value={ingredientVal}
                                  onChange={({ value }) =>
                                    handleFieldChange(
                                      'ingredientId',
                                      value,
                                      index,
                                      values,
                                      setFieldValue,
                                    )
                                  }
                                  placeholder="Ingredient"
                                  blurInputOnSelect={true}
                                />

                                <IngredientsDIV>
                                  <IngredientsInput
                                    name="ingredientQuantity"
                                    value={ingredient.quantity || ''}
                                    onChange={(e) =>
                                      handleFieldChange(
                                        'quantity',
                                        parseInt(e.target.value, 10),
                                        index,
                                        values,
                                        setFieldValue,
                                      )
                                    }
                                  />

                                  <StyledSelectCL
                                    className="select-measure"
                                    classNamePrefix="Select"
                                    options={measures}
                                    name="measure"
                                    id="measure"
                                    value={measureVal || ''}
                                    onChange={({ value }) =>
                                      handleFieldChange(
                                        'measure',
                                        value,
                                        index,
                                        values,
                                        setFieldValue,
                                      )
                                    }
                                    placeholder="cl"
                                    isSearchable={false}
                                  />
                                </IngredientsDIV>
                              </SelectorsDIV>

                              <RemoveItemButton
                                type="button"
                                onClick={() =>
                                  handleRemoveIngredientById(
                                    index,
                                    values,
                                    setFieldValue,
                                  )
                                }
                              >
                                <FiX size={iconSize} />
                              </RemoveItemButton>
                            </ListDIV>
                          );
                        })}
                      </ContainerDIV>
                    )}
                  </>
                )}
              />
            </AddIngredientsForm>
          );
        }}
      </Formik>
    </DrinkIngredientsFieldsDiv>
  );
};

export default DrinkIngredientsFields;
