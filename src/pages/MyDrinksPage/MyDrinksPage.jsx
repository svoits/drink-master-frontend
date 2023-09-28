import { DrinksList } from '../../components/DrinksList/DrinksList';
import PageTitle from '../../components/PageTitle/PageTitle';

import { Wrapper } from './MyDrinksPage.styled';

export default function MyDrinksPage() {
  return (
    <Wrapper>
      <PageTitle title={'My Drinks'} />
      {/* {drinks.length > 0 || !isLoading && <DrinksList />} */}
      <DrinksList />
    </Wrapper>
  );
}
