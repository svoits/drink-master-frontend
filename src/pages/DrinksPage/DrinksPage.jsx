// import { DrinkList } from './DrinkList';

import { SearchDrinks } from '../../components/SearchDrinks/SearchDrinks';

// import { useSelector } from 'react-redux';

// import { selectFilteredDrinks } from "redux/drinks/drinks-selectors";

import { DrinksPageTITLE } from './DrinksPage.styled';

export default function DrinksPage() {
  // const filteredDrinks = useSelector(selectFilteredDrinks);

  // const location = useLocation();
  return (
    <>
      <DrinksPageTITLE>Drinks</DrinksPageTITLE>
      <SearchDrinks />
      {/* <DrinkList /> */}
    </>
  );
}
