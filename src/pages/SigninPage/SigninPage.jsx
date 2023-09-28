import WelcomePageTitle from '../../components/WelcomePageTitle/WelcomePageTitle';
import SigninForm from '../../components/SigninForm/SigninForm';
import { Section } from '../WelcomePage/WelcomePage.styled';
import { Link, Wrap, Nav } from '../SignupPage/SignupPage.styled';
export default function SigninPage() {
  return (
    <>
      <Section>
        <Wrap>
          <WelcomePageTitle title="Sign In" />
          <SigninForm />
          <Nav>
            <Link to="/signup"> Sign Up</Link>
          </Nav>
        </Wrap>
      </Section>
    </>
  );
}
