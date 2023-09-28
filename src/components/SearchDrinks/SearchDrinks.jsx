import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { LuSearch } from 'react-icons/lu';
import { getCategories } from '../../redux/filters/filters-operation';
import { getIngredients } from '../../redux/filters/filters-operation';
import { getRequestedDrink } from '../../redux/drinks/drinks-operations';
// import makeAnimated from 'react-select/animated';
// import { useDrink } from '../../redux/hooks/useDrink';
// import { useFilter } from '../../redux/hooks/useDrink';
import {
  selectCategories,
  // selectError,
  selectIngredients,
} from '../../redux/filters/selectors';

import Select from 'react-select';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

// import { ErrorMessage } from 'formik';
// import styled from 'styled-components';
import {colourStyles} from './colourStyles';

import {
  SearchDrinksForm,
  // SearchDrinksField,
  SearchDrinksInput,
} from './SearchDrinks.styled';

const initialValues = {
  searchQuery: '',
  categories: '',
  ingredients: '',
};
const validationSchema = Yup.object().shape({
  // searchQuery: Yup.string().required('searchQuery is required!'),
  // categories: Yup.string().required('Please select a categories'),
  // ingredients: Yup.string().required('Please select a ingredients'),
  searchQuery: Yup.string(),
  categories: Yup.string(),
  ingredients: Yup.string(),
});

// const animatedComponents = makeAnimated();

export const SearchDrinks = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [ingredient, setIngredient] = useState('');

  const dispatch = useDispatch();


  const categories = useSelector(selectCategories);

  const ingredients = useSelector(selectIngredients);

  // Опрацювання форми
  const handleSubmit = (values) => {
    setQuery(values.searchQuery);
    setCategory(values.categories);
    setIngredient(values.ingredients);

    console.log(category);
    // Очистка полів
  };

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getIngredients());

    // if(category === null) {
    //   return;
    // }
    dispatch(getRequestedDrink({ query, category, ingredient }));
  }, [dispatch, query, category, ingredient]);

  // console.log(formValues);
  // console.log(query);
  console.log(category);
  // console.log(ingredient);
  //---- Опрацювання полів форми -----
  const handleSearchChange = (event) => setQuery(event.target.value);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <SearchDrinksForm onSubmit={props.handleSubmit}>
          <div>
            <label htmlFor="searchQuery">
              <SearchDrinksInput
                name="searchQuery"
                type="text"
                // className={searchQuery ? "active" : ""}
                placeholder="Enter the text"
                // autoCorrect="off"
                // autoComplete="name"
                onChange={handleSearchChange}
                // valid={touched.fullname && !errors.fullname}
                // error={touched.fullname && errors.fullname}
              />
              <LuSearch
                style={{
                  color: '#F3F3F3',
                  position: 'absolute',
                  width: '20px',
                  height: '20px',
                  top: '10%',
                  left: '37%',
                }}
              />
            </label>
          </div>
          <div>
            <label htmlFor="categories">
              <Field name="categories">
                {({ field, form }) => (
                  <Select
                    styles={colourStyles}
                    // classNamePrefix='filter'
                    closeMenuOnSelect={true}
                    // components={animatedComponents}
                    isClearable={true}
                    classNames={{
                      control: (state) =>
                        state.isFocused
                          ? 'border-orange-600'
                          : 'border-grey-300',
                    }}
                    options={categories.map((category) => ({
                      value: category,
                      label: category,
                    }))}
                    name={field.name}
                    id="categories"
                    {...field}
                    value={category ? { value: category, label: category } : ''}
                    onChange={(selectedOption) => {
                      setCategory(selectedOption ? selectedOption.value : '');
                      form.setFieldValue(
                        'categories',
                        selectedOption ? selectedOption.value : '',
                      );
                    }}
                    handleGategory
                    placeholder="All categories"
                  />
                )}
              </Field>
            </label>
          </div>
          <div>
            <label htmlFor="ingredients">
              <Field name="ingredients">
                {({ field, form }) => (
                  <Select
                    styles={colourStyles}
                    closeMenuOnSelect={true}
                    // components={animatedComponents}
                    isClearable={true}
                    classNames={{
                      control: (state) =>
                        state.isFocused
                          ? 'border-orange-600'
                          : 'border-grey-300',
                    }}
                    options={ingredients.map((ingredient) => ({
                      value: ingredient.title,
                      label: ingredient.title,
                    }))}
                    name={field.name}
                    id="ingredients"
                    {...field}
                    value={
                      ingredient ? { value: ingredient, label: ingredient } : ''
                    }
                    onChange={(selectedOption) => {
                      setIngredient(selectedOption ? selectedOption.value : '');
                      form.setFieldValue(
                        'ingredient',
                        selectedOption ? selectedOption.value : '',
                      );
                    }}
                    placeholder="Ingredients"
                  />
                )}
              </Field>
            </label>
          </div>
          {/* <button type="submit" disabled={props.isSubmitting}>
    Submit
  </button> */}
        </SearchDrinksForm>
      )}
    </Formik>
  );
};

//==========================================

// <Formik
//   initialValues={initialValues}
//   validationSchema={validationSchema}
//   onSubmit={handleSubmit}
// >
//   {(props) => (
//     <SearchDrinksForm onSubmit={props.handleSubmit}>
//       <div>
//         <label htmlFor="searchQuery">

//           <SearchDrinksField
//             name="searchQuery"
//             type="text"
//             placeholder="Enter the text"
//             autoCorrect="off"
//             autoComplete="name"
//             // valid={touched.fullname && !errors.fullname}
//             // error={touched.fullname && errors.fullname}
//           />

//         </label>
//       </div>
//       <div>
//         <label htmlFor="categories"></label>

//         <div>
//           {categories.length > 0 && (
//             <select
//               name="categories"
//               value={props.values.categories}
//               onChange={props.handleChange}
//               onBlur={props.handleBlur}
//             >
//               <SearchDrinksOption value="" label="All categories">
//                 {' '}
//                 All categories{' '}
//               </SearchDrinksOption>

//               {categories.map((category) => (
//                 <option
//                   value={props.values.category}
//                   key={category}
//                   label={props.values.category}
//                   className="bg-white"
//                 >
//                   {category}
//                 </option>
//               ))}
//             </select>
//           )}
//         </div>
//         {props.errors.categories && (
//           <div className="input-feedback">{props.errors.categories}</div>
//         )}
//       </div>

//       <div>
//         <label htmlFor="ingredients"></label>

//         <div>
//           {ingredients.length > 0 && (
//             <select
//               name="ingredients"
//               value={props.values.ingredients}
//               onChange={props.handleChange}
//               onBlur={props.handleBlur}
//               style={{ display: 'block' }}
//             >
//               <option value="" label="Ingredients">
//                 {' '}
//                 Ingredients{' '}
//               </option>

//               {ingredients.map(({ _id, title }) => (
//                 <option
//                   value={props.values.title}
//                   key={_id}
//                   label={props.values.title}
//                 >
//                   {title}
//                 </option>
//               ))}
//             </select>
//           )}
//         </div>
//         {props.errors.ingredients && (
//           <div className="input-feedback">{props.errors.ingredients}</div>
//         )}
//       </div>
//       <button type="submit" disabled={props.isSubmitting}>
//         Submit
//       </button>
//     </SearchDrinksForm>
//   )}
// </Formik>
