import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularDrinks } from "../../redux/drinks/drinks-operations";
import { selectDrinks } from "../../redux/drinks/drinks-selectors";

import Loader from '../Loader/Loader';


const PopularDrinks = () => {
    const dispatch = useDispatch();
    const popularList = useSelector(state => state.drinks.popularDrinks);
    const { isLoading, error } = useSelector(selectDrinks);

    useEffect(() => {
        dispatch(getPopularDrinks());
    }, [dispatch]);

    return (
        <div>
            {isLoading && <Loader />}
            {error && <p>Sorry. There are no images ... 😭</p>}
            <ul>
                {popularList.map(({ _id, drinkThumb, drink, shortDescription }) => (
                    <li key={_id}>
                        <a href={`/api/drinks/popular/${_id}`}>
                            <img src={drinkThumb} alt={drink} width={90} height={90} />
                            <h3>{drink}</h3>
                            <p>{shortDescription}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default PopularDrinks;