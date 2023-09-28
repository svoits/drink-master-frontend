import { DrinksList } from '../../components/DrinksList/DrinksList';
import WelcomePageTitle from '../../components/WelcomePageTitle/WelcomePageTitle';
import { Wrapper } from './MyDrinksPage.styled';

export default function MyDrinksPage() {
  return (
    <Wrapper>
      <WelcomePageTitle title={'My Drinks'} />
      {/* {drinks.length > 0 || !isLoading && <DrinksList />} */}
      <DrinksList />
    </Wrapper>
  );
}
