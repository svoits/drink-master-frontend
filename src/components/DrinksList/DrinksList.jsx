// // import React from 'react';
// // import { useDispatch, useSelector } from 'react-redux';

// export const DrinksList = () => {

//     // const dispatch = useDispatch();

//     // const { isLoading, error } = useSelector(selectDrinks);

//     // const visibleDrinks = useSelector(selectVisibleDrinks);

//     // const handleDeleteDrink = ({ id }) => {
//     //     dispatch(deleteDrink(id));
//     // }

//     //Тестовий рядок
//     const drinksArr = ['Berry Deadly', 'English Rose Cocktail', 'Elderflower Caipirinha', 'Blueberry Mojito', 'Greyhound', 'Gin Lemon'];

//     return (
//         <>
//             {drinksArr.length > 0 &&
//                 <ul>
//                     {/* {isLoading &&
//                         <Loader />
//                     }
//                     {error &&
//                         <p>
//                             {error}
//                         </p>
//                     } */}
//                     {drinksArr.map((drink) => (
//                         <li
//                             // key={drink.id}
//                             key={drinksArr.indexOf(drink)}
//                         >
//                             <h5>
//                                 {/* Drink Title */}
//                                 {drink}
//                             </h5>
//                             <span>
//                                 {/* Drink category */}
//                             </span>
//                             <p>
//                                 {/* Drink discription */}
//                             </p>
//                             <div>
//                                 <button>See more</button>
//                                 <button
//                                     // onClick={handleDeleteDrink(drink)}
//                                 >
//                                     Delete
//                                 </button>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             }
//         </>
//     )

// }

import recipes from '../HomeDrinksList/recipes.json';

import {
  MyDrinksLIST,
  MyDrinksITEM,
  MyDrinksIMG,
  // MyDrinksTEXTDIV,
  MyDrinksH5,
  MyDrinksSpan,
  MyDrinksTEXT,
  MyDrinksButtonDiv,
  MyDrinksButton,
} from './DrinksList.styled';
export const DrinksList = () => {
  // const dispatch = useDispatch();

  // const { isLoading, error } = useSelector(selectDrinks);

  // const visibleDrinks = useSelector(selectVisibleDrinks);

  // const handleDeleteDrink = ({ id }) => {
  //     dispatch(deleteDrink(id));
  // }

  //Тестовий рядок
  // const drinksArr = ['Berry Deadly', 'English Rose Cocktail', 'Elderflower Caipirinha', 'Blueberry Mojito', 'Greyhound', 'Gin Lemon'];

  return (
    <>
      {/* {drinksArr.length > 0 &&  */}
      <MyDrinksLIST>
        {/* {isLoading && <Loader />}
      {error && <p>Sorry. There are no images ... 😭</p>}
      {error &&
        toast.error('Sorry. There are no muvies ... 😭', {
          position: 'top-center',
          theme: 'light',
        })} */}
        {recipes.map(({ id, drink, category, description, drinkThumb }) => (
          <MyDrinksITEM key={id}>
            {drinkThumb ? (
              <MyDrinksIMG src={drinkThumb} alt={drink} />
            ) : (
              <MyDrinksIMG src="" />
            )}

            <MyDrinksH5>{drink}</MyDrinksH5>
            <MyDrinksSpan> {category}</MyDrinksSpan>
            <MyDrinksTEXT>{description}</MyDrinksTEXT>
            <MyDrinksButtonDiv>
              <MyDrinksButton>See more</MyDrinksButton>
              <button
              // onClick={handleDeleteDrink(drink)}
              >
                Delete
              </button>
            </MyDrinksButtonDiv>
          </MyDrinksITEM>
        ))}
      </MyDrinksLIST>
      {/* } */}
    </>
  );
};
