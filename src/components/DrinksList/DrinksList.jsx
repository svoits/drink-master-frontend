import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDrinks } from '../../redux/drinks/drinks-selectors';
import { removeOwnDrink } from '../../redux/drinks/drinks-operations';
import Loader from '../Loader';
import { NavLink } from 'react-router-dom';
import { MyDrinksList } from './DrinksList.styled';
import { getOwnDrinks, getMainPageAllDrinks } from '../../redux/drinks/drinks-operations';


export const DrinksList = () => {

    const dispatch = useDispatch();

    // const { drinks, isLoading, error } = useSelector(selectDrinks);
    // console.log(drinks);

    useEffect(() => {
        dispatch(getMainPageAllDrinks());
    }, [dispatch]);

    const handleDeleteDrink = (id) => {
        dispatch(removeOwnDrink(id));
    }

    // ТЕСТОВИЙ РЯДОК
    const drinks = ['Berry Deadly', 'English Rose Cocktail', 'Elderflower Caipirinha', 'Blueberry Mojito', 'Greyhound', 'Gin Lemon'];

    return (
        <>
            {drinks.length > 0 && 
                <MyDrinksList>
                    {/* {
                        isLoading &&
                        <Loader />
                    }
                    {
                        error &&
                        <p>
                            {error}
                        </p>
                    } */}
                    {drinks.map((drink) => (
                        <li
                            // key={drink._id}
                            // ТЕСТОВИЙ РЯДОК
                            key={drinks.indexOf(drink)}
                        >
                            <h5>
                                Drink Title
                                { drink }
                            </h5>
                            <img src={'drink'}/>
                            <span>
                                Drink category
                                {drink.category}
                            </span>
                            <p>
                                Drink discription
                                {drink.description}
                            </p>
                            <div>
                                <NavLink
                                    to={`/drink/${drink._id}`}
                                >See more
                                </NavLink>
                                <button
                                    onClick={() => handleDeleteDrink(drink._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </MyDrinksList>
            }
        </>
    )
}