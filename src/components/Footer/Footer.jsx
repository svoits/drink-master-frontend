import { Container } from '../Container/Container.styled';
import FooterCopyright from '../FooterCopyright/FooterCopyright';
import FooterForm from '../FooterForm/FooterForm';
import FooterNavMenu from '../FooterNavMenu/FooterNavMenu';
import Logo from '../Logo/Logo';
import SocialIcons from '../SocialIcons/SocialIcons';
import {
  FooterContainer,
  LogoAndSocialWrapper,
  MainWrapper,
  SecondaryWrapper,
} from './Footer.styled';

export default function Footer() {
  return (
    <FooterContainer>
      <Container>
        <MainWrapper>
          <SecondaryWrapper>
            <LogoAndSocialWrapper>
              <Logo />
              <SocialIcons />
            </LogoAndSocialWrapper>
            <FooterNavMenu />
          </SecondaryWrapper>
          <FooterForm />
          <FooterCopyright />
        </MainWrapper>
      </Container>
    </FooterContainer>
  );
}
