import { MainContainer, StyledNavLink } from './MobileMenu.styled';

export default function MobileMenu({ isMenuOpen }) {
  return (
    <MainContainer isopen={isMenuOpen ? 'true' : 'false'}>
      <StyledNavLink to="/home">Home</StyledNavLink>
      <StyledNavLink to="/drinks">Drinks</StyledNavLink>
      <StyledNavLink to="/add">Add drink</StyledNavLink>
      <StyledNavLink to="/my">My drinks</StyledNavLink>
      <StyledNavLink to="/favorites">Favorites</StyledNavLink>
    </MainContainer>
  );
}
