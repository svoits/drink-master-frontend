import { useState } from 'react';
import { HeaderContainer, MainWrapper, UserMenuWrap } from './Header.styled';
import Logo from '../Logo/Logo';
import { Container } from '../Container/Container.styled';
import { useResize } from 'src/hooks/useResize';
import UserLogo from '../UserLogo/UserLogo';
import MenuBtn from '../MenuBtn/MenuBtn';
import MobileMenu from '../MobileMenu/MobileMenu';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import Navigation from '../Navigation/Navigation';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { width: windowWidth } = useResize();

  const handleToggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <HeaderContainer isopen={isMenuOpen ? 'true' : 'false'}>
        <Container>
          <MainWrapper>
            <Logo isInFooter="false" />
            {windowWidth >= 1440 && <Navigation />}
            <UserMenuWrap>
              {windowWidth <= 1439.98 ? (
                isMenuOpen && <ThemeSwitcher />
              ) : (
                <ThemeSwitcher />
              )}
              {windowWidth <= 1439.98 ? (
                !isMenuOpen && <UserLogo />
              ) : (
                <UserLogo />
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

      <MobileMenu isMenuOpen={isMenuOpen} handleToggleMenu={handleToggleMenu} />
    </>
  );
};
