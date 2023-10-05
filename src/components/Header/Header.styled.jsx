import styled from 'styled-components';
import transition from '../../utils/transition';

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const HeaderContainer = styled.header`
  position: relative;
  padding-top: 20px;
  padding-bottom: 19px;
  border-bottom: 1px solid ${({ theme }) => theme.headerBorderBottom};
  min-width: 320px;
  z-index: 10;
  background-color: ${({ theme }) => theme.mainBackground};
  transition: background-color ${transition};

  @media screen and (min-width: 768px) {
    padding-top: ${(props) => (props.isopen === 'true' ? 23 : 20)}px;

    padding-bottom: ${(props) => (props.isopen === 'true' ? 22 : 19)}px;
  }
`;

export const UserMenuWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 14px;
  justify-content: flex-end;

  @media screen and (max-width: 374.98px) {
    column-gap: 3.5vw;
  }

  @media screen and (max-width: 345px) {
    column-gap: 2.8vw;
  }

  @media screen and (max-width: 319.98px) {
    column-gap: 8.95px;
  }

  @media screen and (min-width: 1440px) {
    column-gap: 28px;
  }
`;
