import AuthNav from '../../components/AuthNav/AuthNav';
import { Container } from '../../components/Container/Container.styled';
import {
  BackgroundImage,
  WelcomeSubtitle,
  WelcomeTitle,
  WelcomeWrap,
} from './WelcomePage.styled';
export default function WelcomePage() {
  return (
    <main>
      <section>
        <BackgroundImage/>
        <Container>
          <WelcomeWrap>
            <WelcomeTitle>Welcome to the app!</WelcomeTitle>
            <WelcomeSubtitle>
              This app offers more than just a collection of recipes - it is
              designed to be your very own digital cookbook. You can easily save
              and retrieve your own recipes at any time.
            </WelcomeSubtitle>
            <AuthNav />
          </WelcomeWrap>
        </Container>
      </section>
    </main>
  );
}