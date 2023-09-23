// import {  useSelector } from "react-redux";
// import { getDrinks  } from '../../redux/drinks/drinks-selectors'
import { ItemCoctail } from "./ItemCoctail";


export const CoctailsCategory = () => { 
    // const drinks = useSelector(getDrinks);

    const drinks = [
        {category1: ['Berry Deadly', 'English Rose Cocktail', 'Elderflower Caipirinha', 'Blueberry Mojito', 'Greyhound', 'Gin Lemon']},
        {category2: ['Berry Deadly', 'English Rose Cocktail', 'Elderflower Caipirinha', 'Blueberry Mojito', 'Greyhound', 'Gin Lemon']},
        {category3: ['Berry Deadly', 'English Rose Cocktail', 'Elderflower Caipirinha', 'Blueberry Mojito', 'Greyhound', 'Gin Lemon']},
    ]
    ;
    
    return (
        <>
        { drinks.length > 0 && 
         drinks.map((category, idx) => {
            <div>
                <p>Name category </p>
                <ul>
                    <li key={idx} >
                        <ItemCoctail />
                    </li> 
                </ul>
            </div>
        })
        }
        </>
    )

}

