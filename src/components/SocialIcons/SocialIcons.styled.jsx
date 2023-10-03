import styled from 'styled-components';
import transition from '../../utils/transition';

export const Link = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid
    ${({ theme, isinfooter }) =>
      isinfooter === 'true' ? theme.footerBorder : theme.socialIconBorder};
  padding: 8px;
  color: ${({ theme, isinfooter }) =>
    isinfooter === 'true' ? theme.footerText : theme.socialIcon};
  transition: border-color ${transition};

  &:hover,
  &:focus {
    border-color: ${({ theme, isinfooter }) =>
      isinfooter === 'true'
        ? theme.footerBorderHover
        : theme.navLinkBorderHover};
  }
`;

export const List = styled.ul`
  display: flex;
  column-gap: 14px;
`;

export const ListItem = styled.li``;
