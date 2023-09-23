import { MainContainer, StyledNavLink } from './MobileMenu.styled';

export default function MobileMenu({ isMenuOpen, handleToggleMenu }) {
  return (
    <MainContainer isopen={isMenuOpen ? 'true' : 'false'}>
      <StyledNavLink to="/home" onClick={handleToggleMenu}>
        Home
      </StyledNavLink>
      <StyledNavLink to="/drinks" onClick={handleToggleMenu}>
        Drinks
      </StyledNavLink>
      <StyledNavLink to="/add" onClick={handleToggleMenu}>
        Add drink
      </StyledNavLink>
      <StyledNavLink to="/my" onClick={handleToggleMenu}>
        My drinks
      </StyledNavLink>
      <StyledNavLink to="/favorites" onClick={handleToggleMenu}>
        Favorites
      </StyledNavLink>
    </MainContainer>
  );
}
