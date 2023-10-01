import styled from 'styled-components';
import ReactSelect from 'react-select';

import { Field, Form } from 'formik';
import transition from '../../utils/transition';

export const DrinkIngredientsFieldsDiv = styled.div`
  position: relative;
  margin-bottom: 80px;
`;

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
  width: 335px;
  // margin-bottom: 80px;
  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    width: 540px;
  }

  //   #categories {
  //     width: 100%;
  //   }

  //   #ingredients {
  //     width: 100%;
  //   }
`;
//============================================

export const CulculationButtonDiv = styled.div`
  position: absolute;
  top: -2%;
  left: 69%;
  display: flex;
  padding: 10px 16px;
  gap: 16px;
  justify-content: center;
  align-items: center;
  max-width: 104px;
  border: 1px solid ${({ theme }) => theme.inputBorder};
  border-radius: 40px;
  box-shadow: none;

  @media screen and (min-width: 768px) {
    top: 5%;
    left: 84%;
    gap: 18px;
    max-width: 114px;
  }
  @media screen and (min-width: 1440px) {
    left: 79%;
  }
`;

export const PlusMinusButton = styled.button`
  font-size: 16px;
  background-color: transparent;
  color: ${({ theme }) => theme.mainText};
  border: none;

  &:focus {
    outline: transparent;
    border-color: ${({ theme }) => theme.inputBorderFocus};
  }
  @media screen and (min-width: 768px) {
  }
`;

export const CulculationSpan = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;

  color: ${({ theme }) => theme.mainText};

  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 27px;
  }
`;

//============================================

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
  // width: 335px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 188px;
  }

  @media screen and (min-width: 1440px) {
    gap: 40px;
  }
`;
export const SelectorsDIV = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`;
export const IngredientsDIV = styled.div`
  display: flex;
  width: 101px;
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
    width: 150px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const IngredientsInput = styled(Field)`
  background-color: transparent;
  width: 35px;
  padding: 16px 24px;
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
    width: 45px;
  }
`;

export const StyledSelectCL = styled(ReactSelect)`
  & .Select__control {
    width: 67px;
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
    @media screen and (min-width: 768px) {
      width: 95px;
    }
  }

  & .Select__value-container {
    padding: 17px 0;
    padding-right: 0;

    @media screen and (min-width: 768px) {
      padding: 17px 18px;
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
    // padding: 17px 24px;
    padding-left: 8px;
    cursor: pointer;

    &:hover {
      //   color: #f3f3f3;
      color: ${({ theme }) => theme.selectDownOptionText};
    }

    @media screen and (min-width: 768px) {
      // padding: 18px 24px;
      // padding-left: 8px;
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
    // width: 100%;
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
    @media screen and (min-width: 768px) {
      width: 332px;
    }
    @media screen and (min-width: 1440px) {
      width: 316px;
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

export const RemoveItemButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.mainText};
`;
