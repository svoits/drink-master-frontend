import styled from 'styled-components';

import { Field, Form } from 'formik';

import ReactSelect from 'react-select';
import transition from '../../utils/transition';

export const StyledSelect = styled(ReactSelect)`
  & .Select__control {
    width: 100%;
    background-color: #161f37;

    border: none;
    border-radius: 40px;

    color: #f3f3f3;
    box-shadow: none;
    cursor: pointer;
    svg {
      transform: rotate(0deg);
      transition: transform ${transition};
    }

    &.Select__control--menu-is-open {
      svg {
        transform: rotate(-180deg);
      }
    }
  }

  & .Select__value-container {
    padding: 17px 24px;
    padding-right: 0;

    @media screen and (min-width: 768px) {
      padding: 15px 24px;
      padding-right: 0;
    }
  }

  & .Select__indicator-separator {
    display: none;
  }

  & .Select__clear-indicator {
    display: none;
  }

  & .Select__indicator {
    color: #f3f3f3;
    padding: 17px 24px;
    padding-left: 8px;

    cursor: pointer;

    &:hover {
      color: #f3f3f3;
    }

    @media screen and (min-width: 768px) {
      padding: 18px 24px;
      padding-left: 8px;
    }
  }

  & .Select__input-container {
    color: #f3f3f3;
    margin: 0;
    padding: 0;

    &:hover {
      color: #f3f3f3;
    }

    @media screen and (min-width: 768px) {
      font-size: 17px;
    }
  }
  & .Select__input {
    line-height: 1.285 !important;

    @media screen and (min-width: 768px) {
      line-height: 1.56 !important;
    }
  }

  & .Select__placeholder,
  & .Select__single-value {
    color: #f3f3f3;
    line-height: 1.285;
    margin: 0;

    @media screen and (min-width: 768px) {
      font-size: 17px;
      line-height: 1.56;
    }
  }

  & .Select__menu {
    margin: 0;
    margin-top: 4px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.selectDropdownBackground};
  }

  & .Select__menu-list {
    padding: 14px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.selectDropdownBackground};
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    max-height: 400px;
  }

  & .Select__option {
    padding: 0 8px;
    border-radius: 20px;
    color: ${({ theme }) => theme.selectDropdownOptionText};
    transition:
      color ${transition},
      background-color ${transition};
    background-color: transparent;
    cursor: pointer;
    line-height: 1.285;

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.mainText};
    }

    &:active {
      color: ${({ theme }) => theme.selectDropdownOptionTextActive};
      background-color: ${({ theme }) => theme.selectDropdownOptionBgActive};
    }

    @media screen and (min-width: 768px) {
      font-size: 17px;
      line-height: 1.56;
    }
  }
`;

export const SearchIconWrapper = styled.span`
  position: absolute;
  top: 17px;
  right: 24px;
  pointer-events: none;
  color: ${({ theme }) => theme.mainText};
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchDrinksForm = styled(Form)`
  display: flex;
  color: #f3f3f3;
  align-items: center;
  margin-bottom: 40px;
  row-gap: 14px;
  flex-direction: column;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    column-gap: 8px;
    margin-top: 60px;
  }

  @media screen and (min-width: 1440px) {
    width: 680px;
    margin-top: 80px;
  }

  #categories {
    width: 100%;
  }

  #ingredients {
    width: 100%;
  }
`;

export const SearchDrinksInput = styled(Field)`
  position: relative;
  background-color: transparent;
  width: 100%;
  padding: 17px 23px;
  border: none;
  border-radius: 40px;
  border: 1px solid ${({ theme }) => theme.inputBorder};
  color: ${({ theme }) => theme.mainText};
  line-height: 1.285;
  transition: border-color ${transition};

  &:focus {
    outline: transparent;
    border-color: ${({ theme }) => theme.inputBorderFocus};
  }

  &::placeholder {
    color: ${({ theme }) => theme.mainText};
    line-height: 1.285;
  }

  @media screen and (min-width: 768px) {
    width: 264px;
    font-size: 17px;
    line-height: 1.56;
    padding: 14px 23px;
  }
`;
