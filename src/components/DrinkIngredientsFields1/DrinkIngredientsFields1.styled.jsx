import styled from 'styled-components';
import ReactSelect from 'react-select';

import { Field, Form } from 'formik';
import transition from '../../utils/transition';

export const SearchDrinkTitle = styled.h2`
  margin-bottom: 40px;

  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;
  letter-spacing: 0em;

  color: ${({ theme }) => theme.mainText};

  @media screen and (min-width: 768px) {
    font-size: 40px;

    line-height: 2.24;
  }
`;

export const SearchDrinkForm = styled(Form)`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }

  //   #categories {
  //     width: 100%;
  //   }

  //   #ingredients {
  //     width: 100%;
  //   }
`;

export const ContainerDIV = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;
export const ListDIV = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`;
export const IngredientsDIV = styled.div`
  display: flex;
  width: 140px;
  justify-content: space-between;

  opacity: 0.8px;
  background-color: transparent;

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
    // width: 264px;
    // font-size: 17px;
    // line-height: 1.56;
    // padding: 14px 23px;
  }
`;
export const IngredientsInput = styled(Field)`
  background-color: transparent;
  width: 50px;
  padding: 16px 18px;
  padding-right: 0;
  border: none;

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
  }
`;

export const StyledSelectCL = styled(ReactSelect)`
  & .Select__control {
    // width: 200px;
    background-color: transparent;
    border: none;
    border-radius: 40px;
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
    color: ${({ theme }) => theme.selectDownOptionText};
    padding: 17px 24px;
    padding-left: 8px;
    cursor: pointer;

    &:hover {
      //   color: #f3f3f3;
      color: ${({ theme }) => theme.selectDownOptionText};
    }

    @media screen and (min-width: 768px) {
      padding: 18px 24px;
      padding-left: 8px;
    }
  }

  & .Select__input-container {
    color: ${({ theme }) => theme.selectDropdownOptionTextActive};
    margin: 0;
    padding: 0;

    &:hover {
      // color: ${({ theme }) => theme.selectDropdownOptionTextActive};
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
    color: ${({ theme }) => theme.selectDownOptionText};
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
    border-radius: 24px;
    background-color: ${({ theme }) => theme.selectDropdownBackground};
  }

  & .Select__menu-list {
    padding: 10px;
    border-radius: 24px;
    background-color: ${({ theme }) => theme.selectDropdownBackground};
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    max-height: 400px;
  }

  & .Select__option {
    padding: 4px 14px;
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

export const StyledSelect = styled(ReactSelect)`
  & .Select__control {
    width: 200px;
    background-color: transparent;
    border: none;
    border-radius: 40px;
    box-shadow: none;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.inputBorder};

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
    color: ${({ theme }) => theme.selectDownOptionText};
    padding: 17px 24px;
    padding-left: 8px;
    cursor: pointer;

    &:hover {
      //   color: #f3f3f3;
      color: ${({ theme }) => theme.selectDownOptionText};
    }

    @media screen and (min-width: 768px) {
      padding: 18px 24px;
      padding-left: 8px;
    }
  }

  & .Select__input-container {
    color: ${({ theme }) => theme.selectDropdownOptionTextActive};
    margin: 0;
    padding: 0;

    &:hover {
      // color: ${({ theme }) => theme.selectDropdownOptionTextActive};
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
    color: ${({ theme }) => theme.selectDownOptionText};
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
    border-radius: 24px;
    background-color: ${({ theme }) => theme.selectDropdownBackground};
  }

  & .Select__menu-list {
    padding: 10px;
    border-radius: 24px;
    background-color: ${({ theme }) => theme.selectDropdownBackground};
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    max-height: 400px;
  }

  & .Select__option {
    padding: 4px 14px;
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
