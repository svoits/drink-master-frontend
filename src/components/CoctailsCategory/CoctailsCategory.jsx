import {  useSelector } from "react-redux";
import { selectDrinks  } from '../../redux/drinks/drinks-selectors'
import { ItemCoctail } from "./ItemCoctail";


export const CoctailsCategory = () => { 
    //const drinks = useSelector(selectDrinks);

    const drinks = {
        "category1": ['Berry Deadly', 'English Rose Cocktail', 'Elderflower Caipirinha', 'Blueberry Mojito', 'Greyhound', 'Gin Lemon'],
        "category2": ['Berry Deadly', 'English Rose Cocktail', 'Elderflower Caipirinha', 'Blueberry Mojito', 'Greyhound', 'Gin Lemon'],
        "category3": ['Berry Deadly', 'English Rose Cocktail', 'Elderflower Caipirinha', 'Blueberry Mojito', 'Greyhound', 'Gin Lemon'],
    }  ;

    
    
    return (
        <>
        {Object.keys(drinks).length > 0 && 

         Object.keys(drinks).map((category) => (

            <div key={category}>
                <p>{category} </p>
                <ul>

                    {drinks[category].map((item) => (
                        
                            <ItemCoctail key={item._id} item={item}/>
                        
                    
                    ))} 
                </ul>
            </div>
         ))}
        </>
    )

}

