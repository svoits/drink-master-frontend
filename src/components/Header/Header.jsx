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
import UserLogoPopup from '../UserLogoPopup/UserLogoPopup';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);

  const { width: windowWidth } = useResize();

  const handleToggleMenu = () => {
    setIsMenuOpen((state) => !state);
    isMenuOpen ? enableBodyScroll(document) : disableBodyScroll(document);
  };

  const handleOpenUserPopup = () => {
    setIsUserPopupOpen(true);
  };

  const handleCloseUserPopup = () => {
    setIsUserPopupOpen(false);
  };

  windowWidth >= 1440 && enableBodyScroll(document);

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
                !isMenuOpen && (
                  <UserLogo
                    handleOpenPopup={handleOpenUserPopup}
                    handleClosePopup={handleCloseUserPopup}
                    isPopupOpen={isUserPopupOpen}
                  />
                )
              ) : (
                <UserLogo
                  handleOpenPopup={handleOpenUserPopup}
                  handleClosePopup={handleCloseUserPopup}
                  isPopupOpen={isUserPopupOpen}
                />
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
      <UserLogoPopup
        isPopupOpen={isUserPopupOpen}
        handleClosePopup={handleCloseUserPopup}
      />

      {windowWidth < 1440 && (
        <MobileMenu
          isMenuOpen={isMenuOpen}
          handleToggleMenu={handleToggleMenu}
        />
      )}
    </>
  );
};
