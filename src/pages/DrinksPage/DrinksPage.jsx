
// import { useSelector } from 'react-redux';

// import { selectFilteredDrinks } from "redux/drinks/drinks-selectors";


import {HomeDrinksList} from 'components/HomeDrinksList/HomeDrinksList';
// import {DrinksList} from 'components/DrinksList/DrinksList';
import {SearchDrinks} from 'components/SearchDrinks/SearchDrinks';

import {
  DrinksPageTITLE,

} from './DrinksPage.styled';

export default function DrinksPage() {
  // const filteredDrinks = useSelector(selectFilteredDrinks);


    // const location = useLocation();
    return (
      <>
      <DrinksPageTITLE>Drinks</DrinksPageTITLE>
      <SearchDrinks />
      
      <HomeDrinksList />
  
      {/* <DrinksList /> */}

      </>
    );
    
  
}
