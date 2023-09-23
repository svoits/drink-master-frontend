import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderAndMenuWrapper = styled.div`
  position: relative;
`;

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderContainer = styled.header`
  position: relative;
  padding-top: 20px;
  padding-bottom: 19px;
  border-bottom: 1px solid ${({ theme }) => theme.headerBorderBottom};
  min-width: 320px;
  z-index: 10;
  background-color: ${({ theme }) => theme.mainBackground};

  @media screen and (min-width: 768px) {
    padding-top: ${(props) => (props.isopen === 'true' ? 23 : 20)}px;

    padding-bottom: ${(props) => (props.isopen === 'true' ? 22 : 19)}px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 8px 16px;
  color: ${({ theme }) => theme.headerText}; /* White text color */

  &.active {
    color: #00baff; /* Blue text color on hover/focus */
    text-shadow:
      0 0 5px #00baff,
      0 0 10px #00baff,
      0 0 20px #00baff,
      0 0 40px #00baff,
      0 0 80px #00baff;
  }
`;

export const UserMenuWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 14px;
  @media screen and (min-width: 1440px) {
    column-gap: 28px;
  }
`;
