import { useEffect } from 'react';
import { useDrink } from '../../redux/hooks/useDrink';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';

import { getRequestedDrink } from '../../redux/drinks/drinks-operations';

// import Loader from 'components/Loader';

import {
  DrinksListPageLIST,
  DrinksListPageITEM,
  DrinksListPagesIMG,
  DrinksListPageH5,
  DrinksListPageLink,
  DrinksListPageTEXTDIV,
} from './DrinksListPage.styled';

// import drink from './drink.json'
export const DrinksListPage = () => {
  // const category = "Cocktail";
  // const ingredient = 'Light rum';
  // const query = "Milk";
  const dispatch = useDispatch();
  const { drinks } = useDrink();

  // const  {total}  = useDrink();

  // console.log(total);

  // const {drinks, total} = drinks;
  // const { drinks  } = useDrink();
  // console.log(drinks)
  // console.log(drinks.drinks)

  // const { drinks, isLoading, error } = useSelector(selectDrinks);
  // const { drinks } = useSelector(selectDrinks);

  useEffect(() => {
    dispatch(getRequestedDrink());
  }, [dispatch]);

  return (
    <>
      {/* {Object.keys(drink).length > 0 &&  */}
      <DrinksListPageLIST>
        {/* {isLoading && <Loader />} */}
        {/* {error && <p>Sorry. There are no images ... 😭</p>} */}
        {/* {error &&
        toast.error('Sorry. There are no muvies ... 😭', {
          position: 'top-center',
          theme: 'light',
        })} */}

        {drinks.map(({ _id, drink, drinkThumb }) => (
          <DrinksListPageITEM key={_id}>
            {drinkThumb ? (
              <DrinksListPagesIMG src={drinkThumb} alt={drink} />
            ) : (
              <DrinksListPagesIMG src="" />
            )}
            <DrinksListPageTEXTDIV>
              <DrinksListPageH5>{drink}</DrinksListPageH5>
              <DrinksListPageLink to={`/drinks/${_id}`}>
                See more
              </DrinksListPageLink>
              {/* <DrinksListPageButton>See more</DrinksListPageButton> */}
            </DrinksListPageTEXTDIV>
          </DrinksListPageITEM>
        ))}
      </DrinksListPageLIST>
      {/* } */}
    </>
  );
};
//============================================================================================
