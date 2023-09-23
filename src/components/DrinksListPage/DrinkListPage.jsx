// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { useContacts } from 'hooks/useContacts';

// import { deleteContact, updateContact } from 'redux/contacts/operations';

import recipes from './recipes.json';

import {
  DrinksPageIMG,
  DrinksPageLIST,
  DrinksPageP,
  DrinksPageA,
  DrinksPageTEXTDIV,
} from './DrinksPage.styled';

export function DrinksListPage() {
  // const dispatch = useDispatch();

  // const { isLoading, error } = useSelector(selectDrinks);

  // const visibleDrinks = useSelector(selectVisibleDrinks);

  // const handleDeleteDrink = ({ id }) => {
  //     dispatch(deleteDrink(id));
  // }
  return (
    <div>
      <DrinksPageLIST>
        {/* {isLoading &&
                        <Loader />
                    }
                    {error &&
                        <p>
                            {error}
                        </p>
                    } */}
        {recipes.map(({ id, drink, drinkThumb }) => (
          <li key={id}>
            <DrinksPageIMG src={drinkThumb} alt={drink} />
            <DrinksPageTEXTDIV>
              <DrinksPageP>{drink}</DrinksPageP>
              <DrinksPageA>See more</DrinksPageA>
            </DrinksPageTEXTDIV>
          </li>
        ))}
      </DrinksPageLIST>
    </div>
  );
}
