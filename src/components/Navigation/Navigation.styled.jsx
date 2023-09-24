import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import transition from '../../utils/transition';

export const StyledNavLink = styled(NavLink)`
  font-weight: 500;
  line-height: 1.6;
  padding: 8px 16px;
  color: ${({ theme }) => theme.headerText};
  border: 1px solid ${({ theme }) => theme.navLinkBorder};
  border-radius: 40px;
  display: inline-block;
  transition: border-color ${transition};

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.navLinkBorderHover};
  }

  &.active {
    color: ${({ theme }) => theme.activeNavLinkText};
    background-color: ${({ theme }) => theme.activeNavLinkBg};
    border-color: ${({ theme }) => theme.activeNavLinkBg};
  }
`;

export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;

export const ListItem = styled.li``;
