import LogoIcon from '../LogoIcon/LogoIcon';
import { StyledLink } from './Logo.styled';

export default function Logo({ isInFooter }) {
  return (
    <>
      <StyledLink to="/home" isinfooter={isInFooter.toString()}>
        <LogoIcon />
        Drink Master
      </StyledLink>
    </>
  );
}
