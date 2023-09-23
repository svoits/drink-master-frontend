import { useState } from 'react';
import {
  HeaderContainer,
  MainWrapper,
  Navigation,
  StyledNavLink,
  UserMenuWrap,
} from './Header.styled';
import Logo from '../Logo/Logo';
import { Container } from '../Container/Container.styled';
import { useResize } from 'src/hooks/useResize';
import UserInfo from '../UserInfo/UserInfo';
import MenuBtn from '../BurgerBtn/MenuBtn';
import MobileMenu from '../MobileMenu/MobileMenu';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { width: windowWidth } = useResize();

  const handleToggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <HeaderContainer>
        <Container>
          <MainWrapper>
            <Logo />
            {windowWidth >= 768 && (
              <Navigation>
                <StyledNavLink to="/welcome">Welcome</StyledNavLink>
                <StyledNavLink to="/signup">Sign Up</StyledNavLink>
                <StyledNavLink to="/signin">Sign In</StyledNavLink>

                <StyledNavLink to="/home">Home</StyledNavLink>
                <StyledNavLink to="/drinks">Drinks</StyledNavLink>
                <StyledNavLink to="/add">Add Drink</StyledNavLink>
                <StyledNavLink to="/favorites">Favorite Drinks</StyledNavLink>
                <StyledNavLink to="/drink/123">Drink</StyledNavLink>
                <StyledNavLink to="/my">My Drinks</StyledNavLink>
              </Navigation>
            )}
            <UserMenuWrap>
              {windowWidth <= 1439.98 ? (
                isMenuOpen && <ThemeSwitcher />
              ) : (
                <ThemeSwitcher />
              )}
              {windowWidth <= 1439.98 ? (
                !isMenuOpen && <UserInfo />
              ) : (
                <UserInfo />
              )}
              {windowWidth <= 1439.98 && (
                <MenuBtn
                  handleToggleMenu={handleToggleMenu}
                  isMenuOpen={isMenuOpen}
                />
              )}
            </UserMenuWrap>
          </MainWrapper>
        </Container>
      </HeaderContainer>

      {/* {isMenuOpen && <MobileMenu isMenuOpen={isMenuOpen} />} */}

      <MobileMenu isMenuOpen={isMenuOpen} />
    </>
  );
};
