// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import { FiSearch } from 'react-icons/fi';

// import React from 'react';
// import { Formik } from 'formik';

//=====================================================

import {
    SearchDrinksMainDIV,
    SearchDrinksBUTTON,
    SearchDrinksUL,
  } from './DrinksPage.styled';
  // import category from './category.json';
  
  const categorys = [
    { category: 'Ordinary Drink' },
    { category: 'Cocktail' },
    { category: 'Shake' },
    { category: 'Other/Unknown' },
    { category: 'Cocoa' },
    { category: 'Shot' },
    { category: 'Coffee/Tea' },
    { category: 'Homemade Liqueur' },
    { category: 'Punch/Party Drink' },
    { category: 'Beer' },
    { category: 'Soft Drink' },
  ];
  export const SearchDrinks = () => {
    //   // Отримуємо значення фільтру зі стану
    //   const filter = useSelector(selectFilter);
  
    //   const dispatch = useDispatch();
    //   // Зміна значення фільтру
    //   const handleFilterChange = event => {
    //     dispatch(setFilter(event.target.value));
  
    return (
      <SearchDrinksMainDIV>
        <label>
          {/* <input type="text" value={filter} onChange={handleFilterChange} /> */}
          <input type="text" />
        </label>
        <div>
          <SearchDrinksBUTTON>All categories</SearchDrinksBUTTON>
          <SearchDrinksUL>
            {categorys.map(({ id, category }) => (
              <li key={id}>
                <p>{category}</p>
              </li>
            ))}
          </SearchDrinksUL>
        </div>
        <div>
          <button>Ingredients</button>
          <ul>
            {categorys.map(({ id, category }) => (
              <li key={id}>
                <p>{category}</p>
              </li>
            ))}
          </ul>
        </div>
      </SearchDrinksMainDIV>
    );
  };