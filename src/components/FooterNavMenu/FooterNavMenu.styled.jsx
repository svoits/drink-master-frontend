import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import transition from '../../utils/transition';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 14px;

  @media screen and (min-width: 768px) {
    row-gap: 16px;
  }
`;

export const ListItem = styled.li``;

export const Link = styled(NavLink)`
  color: ${({ theme }) => theme.footerText};
  font-weight: 500;
  line-height: 1.6;
  display: inline-block;
  transition: transform ${transition};

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
