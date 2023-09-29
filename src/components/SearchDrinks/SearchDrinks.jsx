import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import { useSearchParams } from 'react-router-dom';
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
import { toast } from 'react-toastify';
import Select from 'react-select';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

// import { ErrorMessage } from 'formik';
// import styled from 'styled-components';
import { colourStyles } from './colourStyles';
// import { useTheme } from '@mui/material/styles';

import {
  FileInputWrapper,
  SearchDrinksForm,
  EditIconWrapper,
  SearchDrinksInput,
  // MultiSelect,
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
  // const [searchParams, setSearchParams] = useSearchParams();
  // const theme = useTheme()
  // const formThemeColors = getSelectTheme(theme)
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [ingredient, setIngredient] = useState('');

  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);

  const ingredients = useSelector(selectIngredients);

  // Опрацювання форми
  const handleSubmit = (values) => {
    if (query.trim() === '') {
      toast('🦄 Type a name of picture.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }
    setQuery(values.searchQuery);
    setCategory(values.categories);
    setIngredient(values.ingredients);

    console.log(category);

    // Очистка полів
    setQuery('');
  };
  // const movieName = searchParams.get('query');

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getIngredients());

    // if (!query) {
    //   return;
    // }

    dispatch(getRequestedDrink({ query, category, ingredient }));
  }, [dispatch, query, category, ingredient]);

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
            <FileInputWrapper>
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
                <EditIconWrapper>
                  <LuSearch size={24} />
                </EditIconWrapper>
              </label>
            </FileInputWrapper>
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
                    // theme={theme => ({
                    //   ...theme,})}
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

