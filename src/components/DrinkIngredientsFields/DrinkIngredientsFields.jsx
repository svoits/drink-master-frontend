import { getIngredients } from '../../redux/filters/filters-operation';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Field, Form, Formik, FieldArray } from 'formik';
import Select from 'react-select';
import { IoMdClose } from 'react-icons/io';
// import _ from 'lodash';

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

// const handleMeasureChange = (selectedOption, index) => {
//   const newSelectedMeasures = [...selectedMeasures];
//   newSelectedMeasures[index] = selectedOption;
//   setSelectedMeasures(newSelectedMeasures);
// };

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

  const handleAddIngredient = (arrayHelpers) => {
    if (ingredientsCount < maxIngredientCount) {
      arrayHelpers.push({
        ingredient: '',
        measure: '',
        quantity: '',
      });
      setIngredientsCount(ingredientsCount + 1);
    }
  };

  const handleRemoveIngredient = (arrayHelpers, index) => {
    if (ingredientsCount > 1) {
      arrayHelpers.remove(index);
      setIngredientsCount(ingredientsCount - 1);
    }
  };

  return (
    <>
      <h2>Ingredients</h2>
      <Formik initialValues={{ ...formData }} innerRef={refId}>
        <Form>
          <FieldArray
            name="ingredients"
            render={(arrayHelpers, index) => (
              <div>
                <div key={index}>
                  <button
                    type="button"
                    onClick={() => handleRemoveIngredient(arrayHelpers, index)}
                  >
                    -
                  </button>
                  <span>{ingredientsCount}</span>
                  <button
                    type="button"
                    onClick={() => handleAddIngredient(arrayHelpers)}
                  >
                    +
                  </button>
                </div>
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
                                handleFieldChange('ingredientId', value, index)
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
                          <button type="button" onClick={handleRemoveIngredient}>
                            <IoMdClose />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          />
        </Form>
      </Formik>
    </>
  );
};

export default DrinkIngredientsFields1;





// <FieldArray
//      name="friends"
//      render={arrayHelpers => (
//        <div>
//          {values.friends.map((friend, index) => (
//            <div key={index}>
//              {/** both these conventions do the same */}
//              <Field name={`friends[${index}].name`} />
//              <Field name={`friends.${index}.age`} />
 
//              <button type="button" onClick={() => arrayHelpers.remove(index)}>
//                -
//              </button>
//            </div>
//          ))}
//          <button
//            type="button"
//            onClick={() => arrayHelpers.push({ name: '', age: '' })}
//          >
//            +
//          </button>
//        </div>
//      )}
//    />

// const measures = [
//   { value: 'ml', label: 'ml' },
//   { value: 'oz', label: 'oz' },
//   { value: 'cl', label: 'cl' },
//   { value: 'tsp', label: 'tsp' },
//   { value: 'pinch', label: 'pinch' },
//   { value: 'sprigs', label: 'sprigs' },
//   { value: 'cup', label: 'cup' },
//   { value: 'cups', label: 'cups' },
//   { value: 'tblsp', label: 'tblsp' },
// ];

// const validationSchema = Yup.object().shape({
//   ingredients: Yup.array().of(
//     Yup.object().shape({
//       ingredient: Yup.string().required('The ingredient is mandatory'),
//       measure: Yup.string().required('Measure is mandatory'),
//       quantity: Yup.number()
//         .typeError('The quantity must be a number')
//         .positive('The number must be positive')
//         .required('Quantity is required'),
//     }),
//   ),
// });

// const DrinkIngredientsFields = ({
//   formData,
//   setFormData,
//   handleSubmit,
//   refId,
// }) => {
//   const dispatch = useDispatch();
//   const [ingredientCount, setIngredientCount] = useState(3);
//   const ingredients = useSelector((state) => state.filters.ingredients);
//   const [selectedIngredients, setSelectedIngredients] = useState(
//     Array(ingredientCount).fill(null),
//   );
//   const [selectedMeasures, setSelectedMeasures] = useState(
//     Array(ingredientCount).fill(null),
//   );

//   const maxIngredientCount = 10;

//   const handleFieldChange = (field, val, index) => {
//     const ing = formData.ingredients[index];

//     if (ing) {
//       const ingredients = [...formData.ingredients];
//       ingredients[index][field] = val;

//       setFormData({ ...formData, ingredients });
//     }
//   };

//   const handleIngredientChange = (selectedOption, index, form) => {
//     const newSelectedIngredients = [...selectedIngredients];
//     newSelectedIngredients[index] = selectedOption;
//     setSelectedIngredients(newSelectedIngredients);

//     console.log(selectedOption, index);
//     const updatedFormData = {
//       ...formData,
//       ingredients: formData.ingredients.map((ingredient, i) =>
//         i === index
//           ? {
//               ...ingredient,
//               ingredient: selectedOption ? selectedOption.value : '',
//             }
//           : ingredient,
//       ),
//     };
//     setFormData(updatedFormData);
//   };

//   const handleMeasureChange = (selectedOption, index) => {
//     const newSelectedMeasures = [...selectedMeasures];
//     newSelectedMeasures[index] = selectedOption;
//     setSelectedMeasures(newSelectedMeasures);
//   };

//   useEffect(() => {
//     dispatch(getIngredients());
//   }, [dispatch]);

//   const handleAddIngredient = () => {
//     if (ingredientCount < maxIngredientCount) {
//       setIngredientCount(ingredientCount + 1);
//     }
//   };

//   const handleRemoveIngredient = () => {
//     if (ingredientCount > 1) {
//       setIngredientCount(ingredientCount - 1);
//     }
//   };

//   return (
//     <div>
//       <h2>Ingredients</h2>
//       <div>
//         <button type="button" onClick={handleRemoveIngredient}>
//           -
//         </button>
//         <span>{ingredientCount}</span>
//         <button type="button" onClick={handleAddIngredient}>
//           +
//         </button>
//       </div>
//       <Formik
//         innerRef={refId}
//         initialValues={{ ...formData }}
//         // validationSchema={validationSchema}
//       >
//         <Form>
//           {[...Array(ingredientCount)].map((_, index) => (
//             <div key={index}>
//               <label htmlFor={`ingredient${index}`}>
//                 <Field name={`ingredient${index}`}>
//                   {({ field, form }) => (
//                     <Select
//                       closeMenuOnSelect={true}
//                       isMulti={false}
//                       isClearable={true}
//                       options={ingredients.map(({ _id, title }) => ({
//                         value: _id,
//                         label: title,
//                       }))}
//                       name={`ingredients[${index}]`}
//                       id={`ingredientId${index}`}
//                       {...field}
//                       value={selectedIngredients[index]}
//                       onChange={(selectedOption) => {
//                         handleIngredientChange(selectedOption, index, form);
//                         handleFieldChange('title', selectedOption.label, index);
//                         handleFieldChange(
//                           'ingredientId',
//                           selectedOption.value,
//                           index,
//                         );
//                       }}
//                       placeholder=""
//                     />
//                   )}
//                 </Field>
//               </label>
//               <div>
//                 <Field
//                   name={`quantity${index}`}
//                   placeholder="Enter the quantity"
//                   onChange={(evt) =>
//                     handleFieldChange(
//                       'quantity',
//                       parseInt(evt.target.value, 10),
//                       index,
//                     )
//                   }
//                 />
//                 <ErrorMessage name={`quantity${index}`} component="div" />
//                 <label htmlFor={`measure${index}`}>
//                   <Select
//                     options={measures}
//                     name={`measures[${index}]`}
//                     value={selectedMeasures[index]}
//                     onChange={(selectedOption) =>
//                       handleMeasureChange(selectedOption, index)
//                     }
//                     placeholder="cl"
//                   />
//                 </label>
//                 <button type="button" onClick={handleRemoveIngredient}>
//                   <IoMdClose />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default DrinkIngredientsFields;
