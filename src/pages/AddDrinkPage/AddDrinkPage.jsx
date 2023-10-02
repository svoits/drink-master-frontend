import AddDrinkForm from '../../components/AddDrinkForm/AddDrinkForm';
import FollowUs from '../../components/FollowUs/FollowUs';
import PopularDrinks from '../../components/PopularDrinks/PopularDrinks';
import PageTitle from '../../components/PageTitle/PageTitle';
import { Container } from '../../components/Container/Container.styled';
import { PageSection, DrinksPageContainer } from './AddDrinkPage.styled';

export default function AddDrinkPage() {
  return (
    <PageSection>
      <Container>
        <PageTitle title="Add drink" />
        <DrinksPageContainer>
          <div>
            <AddDrinkForm />
          </div>

          <div>
            <FollowUs />
            <PopularDrinks />
          </div>
        </DrinksPageContainer>
      </Container>
    </PageSection>
  );
}
