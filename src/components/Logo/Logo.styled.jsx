import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.headerText};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.125;
  text-transform: capitalize;
  display: inline-flex;
  align-items: center;
  column-gap: 8px;
  padding-top: 5px;
  padding-bottom: 5px;
`;
