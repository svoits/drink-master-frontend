import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import { useFilter } from '../../hooks/useFilter';
// import { allIngredients } from '../../hooks/useFilter';
import { useDrink } from '../../redux/hooks/useDrink';
import { getCategories } from '../../redux/filters/filters-operation';
import { getIngredients } from '../../redux/filters/filters-operation';
import { getRequestedDrink } from '../../redux/drinks/drinks-operations';
import {
  selectCategories,
  // selectError,
  selectIngredients,
} from '../../redux/filters/selectors';

// import { selectVisibleDrinks } from '../../redux/drinks/drinks-selectors';
import Select from 'react-select';
import { Formik, Field } from 'formik';
// import { useFormik } from 'formik';
// import { ErrorMessage } from 'formik';

import * as Yup from 'yup';
// import styled from 'styled-components';
import {
  SearchDrinksForm,
  SearchDrinksField,
  SearchDrinksOption,
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

export const SearchDrinks = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [ingredient, setIngredient] = useState('');

  const dispatch = useDispatch();

  const { drinks } = useDrink();

  const categories = useSelector(selectCategories);

  const ingredients = useSelector(selectIngredients);

  // const drinks = useSelector(selectVisibleDrinks);

  //   const handleSubmit = (values, action) => {
  //     console.log(values);
  //     setFormValues(values);
  //     action.resetForm();
  // };

  // Опрацювання форми
  const handleSubmit = (values) => {
    console.log(values);
    // setFormValues(values);
    setQuery(values.searchQuery);
    setCategory(values.categories);
    setIngredient(values.ingredients);
    // const form = event.target;

    // Додавання контакту
    // dispatch(getRequestedDrink({ query, category, ingredient }));

    // Очистка полів
    // setFormValues([]);
    console.log(query);
    console.log(category);
    console.log(ingredient);
  };
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getIngredients());
    dispatch(getRequestedDrink({ query, category, ingredient }));
  }, [dispatch, query, category, ingredient]);

  // console.log(formValues);
  console.log(query);
  console.log(category);
  console.log(ingredient);

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
              <SearchDrinksField
                name="searchQuery"
                type="text"
                placeholder="Enter the text"
                autoCorrect="off"
                autoComplete="name"
                // valid={touched.fullname && !errors.fullname}
                // error={touched.fullname && errors.fullname}
              />
            </label>
          </div>
          <div>
            <label htmlFor="categories"></label>

            <div>
              {categories.length > 0 && (
                <select
                  name="categories"
                  value={props.values.categories}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                >
                  <SearchDrinksOption value="" label="All categories">
                    {' '}
                    All categories{' '}
                  </SearchDrinksOption>

                  {categories.map((category) => (
                    <option
                      value={props.values.category}
                      key={category}
                      label={props.values.category}
                      className="bg-white"
                    >
                      {category}
                    </option>
                  ))}
                </select>
              )}
            </div>
            {props.errors.categories && (
              <div className="input-feedback">{props.errors.categories}</div>
            )}
          </div>

          <div>
            <label htmlFor="ingredients"></label>

            <div>
              {ingredients.length > 0 && (
                <select
                  name="ingredients"
                  value={props.values.ingredients}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  style={{ display: 'block' }}
                >
                  <option value="" label="Ingredients">
                    {' '}
                    Ingredients{' '}
                  </option>

                  {ingredients.map(({ _id, title }) => (
                    <option
                      value={props.values.title}
                      key={_id}
                      label={props.values.title}
                    >
                      {title}
                    </option>
                  ))}
                </select>
              )}
            </div>
            {props.errors.ingredients && (
              <div className="input-feedback">{props.errors.ingredients}</div>
            )}
          </div>
          <button type="submit" disabled={props.isSubmitting}>
            Submit
          </button>
        </SearchDrinksForm>
      )}
    </Formik>
  );
};
