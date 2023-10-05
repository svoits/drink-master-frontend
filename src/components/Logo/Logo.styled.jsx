import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  color: ${({ theme, isinfooter }) =>
    isinfooter === 'true' ? theme.footerText : theme.headerText};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.125;
  text-transform: capitalize;
  display: inline-flex;
  align-items: center;
  column-gap: 8px;
  padding-top: 5px;
  padding-bottom: 5px;

  @media screen and (max-width: 374.98px) {
    font-size: 4.2vw;
  }

  @media screen and (max-width: 319.98px) {
    font-size: 13.4px;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.22;
    column-gap: 14px;
  }
`;
