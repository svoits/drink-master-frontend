import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import transition from '../../utils/transition';

export const MainContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: ${(props) => (props.isopen === 'true' ? 1 : 0)};
  visibility: ${(props) => (props.isopen === 'true' ? 'visible' : 'hidden')};
  z-index: 9;
  transform: ${(props) =>
    props.isopen === 'true' ? 'translateY(0)' : 'translateY(-100%)'};

  transition:
    opacity ${transition},
    visibility ${transition},
    transform ${transition};

  /* overflow: hidden; */
  padding: 20px;
  padding-top: 92px;
  background-color: ${({ theme }) => theme.mainBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 16px;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 8px 16px;
  color: ${({ theme }) => theme.headerText};
  border-radius: 40px;
  border: 1px solid ${({ theme }) => theme.navLinkBorder};

  &.active {
    background-color: ${({ theme }) => theme.activeNavLinkBg};
    color: ${({ theme }) => theme.activeNavLinkText};
    border-color: ${({ theme }) => theme.activeNavLinkBg};
  }

  @media screen and (min-width: 768px) {
    line-height: 1.6;
  }
`;
