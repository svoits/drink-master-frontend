import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 335px;
  @media screen and (max-width: 374.98px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const Link = styled(NavLink)`
  color: #f3f3f3;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33;
  text-decoration: underline;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.286;
  }
`;
export const Nav = styled.nav`
  display: block;
  margin: 0 auto;
`;
