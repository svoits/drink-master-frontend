// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

export const DrinksList = () => {

    // const dispatch = useDispatch();

    // const { isLoading, error } = useSelector(selectDrinks);

    // const visibleDrinks = useSelector(selectVisibleDrinks);

    // const handleDeleteDrink = ({ id }) => {
    //     dispatch(deleteDrink(id));
    // }

    //Тестовий рядок
    const drinksArr = ['Berry Deadly', 'English Rose Cocktail', 'Elderflower Caipirinha', 'Blueberry Mojito', 'Greyhound', 'Gin Lemon'];

    return (
        <>
            {drinksArr.length > 0 && 
                <ul>
                    {/* {isLoading &&
                        <Loader />
                    }
                    {error &&
                        <p>
                            {error}
                        </p>
                    } */}
                    {drinksArr.map((drink) => (
                        <li
                            // key={drink.id}
                            key={drinksArr.indexOf(drink)}
                        >
                            <h5>
                                {/* Drink Title */}
                                {drink}
                            </h5>
                            <span>
                                {/* Drink category */}
                            </span>
                            <p>
                                {/* Drink discription */}
                            </p>
                            <div>
                                <button>See more</button>
                                <button
                                    // onClick={handleDeleteDrink(drink)}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            }
        </>
    )

}