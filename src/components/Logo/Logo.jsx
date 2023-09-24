import LogoIcon from '../LogoIcon/LogoIcon';
import { StyledLink } from './Logo.styled';

export default function Logo({ isInFooter }) {
  console.log(isInFooter);
  return (
    <>
      <StyledLink to="/home" isinfooter={isInFooter}>
        <LogoIcon />
        Drink Master
      </StyledLink>
    </>
  );
}
