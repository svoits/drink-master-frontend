import LogoIcon from '../LogoIcon/LogoIcon';
import { StyledLink } from './Logo.styled';

export default function Logo() {
  return (
    <>
      <StyledLink to="/home">
        <LogoIcon />
        Drink Master
      </StyledLink>
    </>
  );
}
