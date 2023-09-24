import {  useSelector } from "react-redux";
import { selectDrinks  } from '../../redux/drinks/drinks-selectors'
import { ItemCoctail } from "./ItemCoctail";
import {
    HomeDrinksLIST,
  } from '../HomeDrinksList/HomeDrinksList.styled';

export const CoctailsCategory = () => { 
    const drinks = useSelector(selectDrinks);
    console.log(drinks)
    // const drinks = {
    //     "category1": ['Berry Deadly', 'English Rose Cocktail', 'Elderflower Caipirinha', 'Blueberry Mojito', 'Greyhound', 'Gin Lemon'],
    //     "category2": ['Berry Deadly', 'English Rose Cocktail', 'Elderflower Caipirinha', 'Blueberry Mojito', 'Greyhound', 'Gin Lemon'],
    //     "category3": ['Berry Deadly', 'English Rose Cocktail', 'Elderflower Caipirinha', 'Blueberry Mojito', 'Greyhound', 'Gin Lemon'],
    // }  ;

    
    
    return (
        <>
        {Object.keys(drinks).length > 0 && 

         Object.keys(drinks).map((category, idx) => (

            <div key={idx}>
                <p>{category} </p>
                <HomeDrinksLIST>

                    {drinks[category].map((item) => (
                        
                            <ItemCoctail key={item._id} item={item}/>
                        
                    
                    ))} 
                </HomeDrinksLIST>
            </div>
         ))}
        </>
    )

}

