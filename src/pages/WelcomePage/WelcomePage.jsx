import AuthNav from '../../components/AuthNav/AuthNav';
import {
  WelcomeSubtitle,
  WelcomeTitle,
  WelcomeWrap,
  Section,

} from './WelcomePage.styled';

export default function WelcomePage() {
  return (
    <>
      
      <Section>
        <WelcomeWrap>
          <WelcomeTitle>Welcome to the app!</WelcomeTitle>
          <WelcomeSubtitle>
            This app offers more than just a collection of recipes - it is
            designed to be your very own digital cookbook. You can easily save
            and retrieve your own recipes at any time.
          </WelcomeSubtitle>
          <AuthNav />
        </WelcomeWrap>
      </Section>
    </>
  );
}
