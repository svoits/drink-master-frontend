import WelcomePageTitle from '../../components/WelcomePageTitle/WelcomePageTitle';
import SignupForm from '../../components/SignupForm/SignupForm';
import { Section } from '../WelcomePage/WelcomePage.styled';
import { Link, Wrap, Nav } from '../SignupPage/SignupPage.styled';

export default function SignupPage() {
  return (
    <>
      <Section>
        <Wrap>
          <WelcomePageTitle title="Sign Up" />
          <SignupForm />
          <Nav>
            <Link to="/signin">Sign In</Link>
          </Nav>
        </Wrap>
      </Section>
    </>
  );
}
