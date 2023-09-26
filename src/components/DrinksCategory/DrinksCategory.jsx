import { useDrink } from '../../redux/hooks/useDrink';  
import { ItemDrink } from './ItemDrink'
import {
    HomeDrinksLIST,
  } from '../HomeDrinksList/HomeDrinksList.styled';

export const DrinksCategory = () => { 
    const { drinks } = useDrink();
    console.log("DrinksCategory =>", drinks)
 
    return (
        <>
        {Object.keys(drinks).length > 0 && 

         Object.keys(drinks).map((category, idx) => (

            <div key={idx}>
                <p>{category} </p>
                <HomeDrinksLIST>

                    {drinks[category].map((item) => (
                        
                            <ItemDrink key={item._id} item={item}/>
                        
                    
                    ))} 
                </HomeDrinksLIST>
            </div>
         ))}
        </>
    )

}

