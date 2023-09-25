import PageTitle from '../../components/PageTitle/PageTitle';
import SigninForm from '../../components/SigninForm/SigninForm';
import { Container } from "../../components/Container/Container.styled";
import { BackgroundImage } from "../WelcomePage/WelcomePage.styled";
import { Link, Wrap, Nav} from "../SignupPage/SignupPage.styled";
export default function SigninPage() {
  return (
   
    <section>
      <BackgroundImage />
      <Container>
        <Wrap>
         <PageTitle title="Sign In" />
         <SigninForm />
         <Nav><Link to="/signin"> Sign Up</Link></Nav>
       </Wrap>
      </Container>
   </section>
  
  );
}
