import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import { useFilter } from '../../hooks/useFilter';
// import { allIngredients } from '../../hooks/useFilter';

import { getCategories } from '../../redux/filters/filters-operation';
import { getIngredients } from '../../redux/filters/filters-operation';
import {
  selectCategories,
  // selectError,
  selectIngredients,
} from '../../redux/filters/selectors';

import { Formik } from 'formik';
// import { ErrorMessage } from 'formik';

// import Select from 'react-select';
import * as Yup from 'yup';
// import styled from 'styled-components';
import {
  SearchDrinksForm,
  SearchDrinksInput,
  SearchDrinksField,
  SearchDrinksOption,
} from './SearchDrinks.styled';

const initialValues = {
  searchQuery: '',
  category: '',
  ingredient: '',
};
const validationSchema = Yup.object({
  // category: Yup.string().required('Please select a category').oneOf(category),
  // ingredient: Yup.string().required('Please select a category').oneOf(ingredient),
  category: Yup.string().required('Please select a category'),
  ingredient: Yup.string().required('Please select a category'),
});

// const ErrorText = styled.p`
//   color: red;
// `;

// const FormError = ({ name }) => {
//   return (
//     <ErrorMessage
//       name={name}
//       render={(message) => <ErrorText>{message}</ErrorText>}
//     />
//   );
// };

export const SearchDrinks = () => {
  const dispatch = useDispatch();

  // const ingredients = useFilter();

  const categories = useSelector(selectCategories);
  // console.log(categories);

  const ingredients = useSelector(selectIngredients);
  // console.log(ingredients);
  // const isLoading = useSelector(selectIsLoading);

  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getIngredients());
  }, [dispatch]);

  //   // Отримуємо значення фільтру зі стану
  //   const filter = useSelector(selectFilter);

  //   // Зміна значення фільтру
  //   const handleFilterChange = event => {
  //     dispatch(setFilter(event.target.value));

  const handleSubmit = (values, action) => {
    console.log(values);
    action.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <SearchDrinksForm autoComplete="off">
        <div>
          <label htmlFor="name">
            <SearchDrinksInput name="searchQuery" type="text" placeholder="Enter the text" />
            {/* <button type="submit">submit</button> */}
            {/* <FormError name="name" /> */}
          </label>
        </div>
        <div>
          <label htmlFor="category"></label>
          <div>
            {categories.length > 0 && (
              <SearchDrinksField name="categories" as="select">
                <option value="">All categories</option>
                {categories.map((category) => (
                  <SearchDrinksOption value={category} key={category}>
                    {category}
                  </SearchDrinksOption>
                ))}
              </SearchDrinksField>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="ingredient"></label>
          <div>
            {ingredients.length > 0 && (
              <SearchDrinksField name="ingredients" as="select">
                <option value="">Ingredients</option>
                {ingredients.map(({ _id, title }) => (
                  <SearchDrinksOption value={title} key={_id}>
                    {title}
                  </SearchDrinksOption>
                ))}
              </SearchDrinksField>
            )}
          </div>
        </div>
      </SearchDrinksForm>
    </Formik>
  );
};
