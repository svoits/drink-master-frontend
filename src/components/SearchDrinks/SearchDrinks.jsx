import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/filters/filters-operation';
// import {  getIngridients } from '../../redux/filters/filters-operation';
<<<<<<< Updated upstream
import {
  selectCategories,
  // selectError,
  // selectIngridients,
} from '../../redux/filters/selectors';
=======
// import {
//   selectCategories,
//   // selectError,
//   selectIngridients,
// } from '../../redux/filters/selectors';


>>>>>>> Stashed changes


import { Formik, Field, ErrorMessage } from 'formik';
// import Select from 'react-select';
import * as Yup from 'yup';

import {
  SearchDrinksForm,
  SearchDrinksField,
  SearchDrinksOption,
} from './SearchDrinks.styled';
import { styled } from 'styled-components';

const categorys = [
  { id: '1', category: 'Ordinary Drink' },
  { id: '2', category: 'Cocktail' },
  { id: '3', category: 'Shake' },
  { id: '4', category: 'Other/Unknown' },
  { id: '5', category: 'Cocoa' },
  { id: '6', category: 'Shot' },
  { id: '7', category: 'Coffee/Tea' },
  { id: '8', category: 'Homemade Liqueur' },
  { id: '9', category: 'Punch/Party Drink' },
  { id: '10', category: 'Beer' },
  { id: '11', category: 'Soft Drink' },
];

const initialValues = {
  name: '',
  category: '',
};
const validationSchema = Yup.object({
  category: Yup.string().required('Please select a category').oneOf(categorys),
});

const ErrorText = styled.p`
  color: red;
`;

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={(message) => <ErrorText>{message}</ErrorText>}
    />
  );
};

export const SearchDrinks = () => {
  const dispatch = useDispatch();

  // getting a list of contacts from the state
<<<<<<< Updated upstream
  const categories = useSelector(selectCategories);
=======
  const categories = useSelector(state => state.filter.categories);
>>>>>>> Stashed changes
  // const ingridient = useSelector(selectIngridients);
  // getting isLoading value from the state
  // const isLoading = useSelector(selectIsLoading);
  // getting error value from the state
  // const error = useSelector(selectError);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  //   // Отримуємо значення фільтру зі стану
  //   const filter = useSelector(selectFilter);

  //   const dispatch = useDispatch();
  //   // Зміна значення фільтру
  //   const handleFilterChange = event => {
  //     dispatch(setFilter(event.target.value));

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <SearchDrinksForm>
        {/* <Select category={categorys} /> */}
        <div>
          <label htmlFor="name">
            <Field name="name" type="text" />
            <FormError name="name" />
            {/* <input type="text" value={value} onChange={onChange} /> */}
          </label>
        </div>

        <div>
          <label htmlFor="categoty"></label>
          <div>
            <SearchDrinksField name="categoty" as="select">
              <option value="">All categories</option>
              {categories.map(({ id, category }) => (
                <SearchDrinksOption value={category} key={id}>
                  {category}
                </SearchDrinksOption>
              ))}
            </SearchDrinksField>
          </div>
        </div>
        <button type="submit">submit</button>
      </SearchDrinksForm>
    </Formik>
  );
};