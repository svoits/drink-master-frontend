import AddDrinkForm from '../../components/AddDrinkForm/AddDrinkForm';
import FollowUs from '../../components/FollowUs/FollowUs';
import PopularDrinks from '../../components/PopularDrinks/PopularDrinks';
import PageTitle from '../../components/PageTitle/PageTitle';
import { Container } from '../../components/Container/Container.styled';

export default function AddDrinkPage() {
  return (
    <div>
      <Container>
        <PageTitle title="Add drink" />
        <AddDrinkForm />
        <FollowUs />
        <PopularDrinks />
      </Container>
    </div>
  );
}
