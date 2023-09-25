import { Container } from '../../components/Container/Container.styled';
import PageTitle from '../../components/PageTitle/PageTitle';
import SignupForm from '../../components/SignupForm/SignupForm';
import { BackgroundImage } from '../WelcomePage/WelcomePage.styled';
import { Link, Wrap, Nav } from '../SignupPage/SignupPage.styled';
export default function SignupPage() {
  return (<>
   <BackgroundImage />
      <section>
        <Container>
          <Wrap>
            <PageTitle title="Sign Up" />
            <SignupForm />
            <Nav>
              <Link to="/signin"> Sign In</Link>
            </Nav>
          </Wrap>
        </Container>
    </section>
  </>
   
  );
}
