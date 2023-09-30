import AddDrinkForm from '../../components/AddDrinkForm/AddDrinkForm';
import FollowUs from '../../components/FollowUs/FollowUs';
import PopularDrinks from '../../components/PopularDrinks/PopularDrinks';
import PageTitle from '../../components/PageTitle/PageTitle';
import { Container } from '../../components/Container/Container.styled';
<<<<<<< Updated upstream
import { DrinksPageSection,
  DrinksPageContainer
 } from './AddDrinkPage.styled';
=======
import { DrinksPageSection } from './AddDrinkPage.styled';
>>>>>>> Stashed changes


export default function AddDrinkPage() {
  return (
    <DrinksPageSection>
      <Container>
        <DrinksPageContainer>
        <PageTitle title="Add drink" />
        <div>
        <AddDrinkForm />
        </div>
      <div>
      <FollowUs />
        <PopularDrinks />

      </div>
     
        </DrinksPageContainer>
      </Container>
    </DrinksPageSection>
  );
}
