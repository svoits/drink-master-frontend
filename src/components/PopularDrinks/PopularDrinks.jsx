import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getPopularDrinks } from '../../redux/drinks/drinks-slice';
import Loader from '../Loader/Loader';


const PopularDrinks = () => {
    const dispatch = useDispatch();
    const popularList = useSelector(state => state.drinks.drinks.popular);

    useEffect(() => {
        dispatch();
    });

    return (
        <div>
            {popularList.isLoading ? (
                <Loader />
            ) : popularList.error ? (
                <p>{popularList.error}</p>
            ) : (
                <ul>
                    {popularList.items.map(drink => (
                        <li key={drink.id}>
                            <a href={`/drink/${drink.id}`}>
                                <img src={drink.drinkThumb} alt={drink.drink} />
                                <h3>{drink.drink}</h3>
                                <p>{drink.shortDescription}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
};

export default PopularDrinks;