import AddDrinkForm from '../../components/AddDrinkForm/AddDrinkForm';
import FollowUs from '../../components/FollowUs/FollowUs';
import PopularDrinks from '../../components/PopularDrinks/PopularDrinks';
import PageTitle from '../../components/PageTitle/PageTitle';

export default function AddDrinkPage() {
  return (
    <div>
      <PageTitle title="Add drink"/>
      <AddDrinkForm />
      <FollowUs />
      <PopularDrinks />
    </div>
  )
};