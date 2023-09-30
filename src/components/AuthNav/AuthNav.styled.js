import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import transition from '../../utils/transition';
export const Link = styled(NavLink)`
  text-decoration: none;
  background-color: transparent;
  border-radius: 42px;
  padding: 14px 40px;
  color: #f3f3f3;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  border: 1px solid rgba(243, 243, 243, 0.2);
  transition: border-color ${transition};

  &:hover {
    background-color: ${({ theme }) => theme.hoverBackgroundColorLink};
    color: ${({ theme }) => theme.hoverColorTextLink};
    transition: background-color ${transition};
  }

  @media screen and (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
    line-height: 1.12;
  }
`;
export const Nav = styled.nav`
  display: flex;
  gap: 14px;
`;
