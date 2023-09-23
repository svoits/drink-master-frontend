import styled from 'styled-components';
import transition from '../../utils/transition';

export const Link = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.footerBorder};
  padding: 8px;
  color: ${({ theme }) => theme.footerText};
  transition: border-color ${transition};

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.footerBorderHover};
  }
`;

export const List = styled.ul`
  display: flex;
  column-gap: 14px;
`;

export const ListItem = styled.li``;
