import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { LuSearch } from 'react-icons/lu';
import { getCategories } from '../../redux/filters/filters-operation';
import { getIngredients } from '../../redux/filters/filters-operation';
import { getRequestedDrink } from '../../redux/drinks/drinks-operations';
// import { toast } from 'react-toastify';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import {
  SearchInputWrapper,
  SearchDrinksForm,
  SearchIconWrapper,
  SearchDrinksInput,
  StyledSelect,
} from './SearchDrinks.styled';
import { useFilter } from '../../redux/hooks/useFilter';
// import { useDrink } from '../../redux/hooks/useDrink';
import throttle from 'lodash.throttle';

const initialValues = {
  searchQuery: '',
  categories: '',
  ingredients: '',
};
const validationSchema = Yup.object().shape({
  searchQuery: Yup.string(),
  categories: Yup.string(),
  ingredients: Yup.string(),
});

export const SearchDrinks = ({ page, limit }) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [ingredient, setIngredient] = useState('');
  const { categories, ingredients } = useFilter();
  // const { error } = useDrink();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    throttle(() => setQuery(values.searchQuery), 300);
    setCategory(values.categories);
    setIngredient(values.ingredients);

    setQuery('');
  };

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getIngredients());

    dispatch(getRequestedDrink({ query, category, ingredient, page, limit }));
  }, [dispatch, query, category, ingredient, page, limit]);

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  // if (error) {
  //   throttle(() => {
  //     toast.error('No drinks found for your query. Please try again.');
  //   }, 100);
  // }

  // if (error) {
  //   toast.error('No drinks found for your query. Please try again.');
  // }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <SearchDrinksForm onSubmit={props.handleSubmit}>
          <SearchInputWrapper>
            <SearchDrinksInput
              name="searchQuery"
              type="text"
              value={query}
              placeholder="Enter the text"
              onChange={handleSearchChange}
            />
            <SearchIconWrapper>
              <LuSearch size={20} />
            </SearchIconWrapper>
          </SearchInputWrapper>

          <Field name="categories">
            {({ field, form }) => (
              <StyledSelect
                classNamePrefix="Select"
                closeMenuOnSelect={true}
                isClearable={true}
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
                placeholder="All categories"
              />
            )}
          </Field>

          <Field name="ingredients">
            {({ field, form }) => (
              <StyledSelect
                classNamePrefix="Select"
                closeMenuOnSelect={true}
                isClearable={true}
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

          {/* <button type="submit" disabled={props.isSubmitting}>
    Submit
  </button> */}
        </SearchDrinksForm>
      )}
    </Formik>
  );
};

//==========================================
