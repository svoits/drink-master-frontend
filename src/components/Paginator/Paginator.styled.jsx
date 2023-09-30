import styled from 'styled-components';
import transition from '../../utils/transition';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 14px;

  @media screen and (max-width: 374.98px) {
    column-gap: 3.7vw;
  }

  @media screen and (max-width: 319.98px) {
    column-gap: 11.5px;
  }
`;

export const Button = styled.button`
  width: 27px;
  height: 27px;
  border-radius: 50%;
  color: ${({ theme }) => theme.paginatorBtnText};
  transition:
    background-color ${transition},
    color ${transition};
  padding: 0;
  font-size: 12px;
  font-weight: 500;
  background-color: transparent;
  border: none;
  font-style: normal;

  &.active,
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.paginatorBtnTextActive};
    background-color: ${({ theme }) => theme.paginatorBtnBgActive};
  }
`;

export const Wrapper = styled.div`
  padding: 14px 0px;
`;

export const StyledArrows = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.paginatorArrow};
  background-color: transparent;
  border: none;
  padding: 0;
  transition: color ${transition};

  &:first-child {
    margin-right: 30px;

    @media screen and (max-width: 374.98px) {
      margin-right: 8vw;
    }

    @media screen and (max-width: 354.98px) {
      margin-right: 6vw;
    }

    @media screen and (max-width: 334.98px) {
      margin-right: 4vw;
    }

    @media screen and (max-width: 319.98px) {
      margin-right: 12.8px;
    }
  }

  &:last-child {
    margin-left: 30px;

    @media screen and (max-width: 374.98px) {
      margin-left: 8vw;
    }

    @media screen and (max-width: 354.98px) {
      margin-left: 6vw;
    }

    @media screen and (max-width: 334.98px) {
      margin-left: 4vw;
    }

    @media screen and (max-width: 319.98px) {
      margin-left: 12.8px;
    }
  }

  &:disabled {
    cursor: default;
  }

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    color: ${({ theme }) => theme.paginatorArrowHover};
  }
`;
