import PageTitle from '../../components/PageTitle/PageTitle';
import SigninForm from '../../components/SigninForm/SigninForm';
import { Section } from '../WelcomePage/WelcomePage.styled';
import { Link, Wrap, Nav } from '../SignupPage/SignupPage.styled';
export default function SigninPage() {
  return (
    <>
      <Section>
        <Wrap>
          <PageTitle title="Sign In" />
          <SigninForm />
          <Nav>
            <Link to="/signup"> Sign Up</Link>
          </Nav>
        </Wrap>
      </Section>
    </>
  );
}
