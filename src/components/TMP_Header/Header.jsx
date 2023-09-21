import {
  HeaderContainer,
  Navigation,
  StyledLink,
  IconWrapper,
} from './Header.styled';
import sprite from '../../assets/sprite.svg';
import { DrinkDetails } from '../../pages/DrinkPage/DrinkPage';
import { DrinkPageHero } from '../DrinkPageHero/DrinkPageHero';

export const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <StyledLink to="/welcome">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Welcome
        </StyledLink>
        <StyledLink to="/signup">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Sign Up
        </StyledLink>
        <StyledLink to="/signin">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Sign In
        </StyledLink>

        <StyledLink to="/home">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Home
        </StyledLink>
        <StyledLink to="/drinks">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Drinks
        </StyledLink>
        <StyledLink to="/add">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Add Drink
        </StyledLink>
        <StyledLink to="/favorites">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Favorite Drinks
        </StyledLink>
        <StyledLink to="/drink/123">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Drink
        </StyledLink>
        <StyledLink to="/my">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          My Drinks
        </StyledLink>
      </Navigation>
      <DrinkDetails>Hello</DrinkDetails>
    </HeaderContainer>
  );
};
