import styled from 'styled-components';
import ReactSelect from 'react-select';

import { Field, Form } from 'formik';
import transition from '../../utils/transition';

export const DrinkIngredientsFieldsDiv = styled.div`
  position: relative;
  margin-bottom: 80px;
  width: 100%;

  @media screen and (min-width: 1440px) {
    width: 540px;
  }
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

    line-height: 1.1;
  }
`;

export const SearchDrinkForm = styled(Form)`
  width: 100%;
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

export const IngredientSelectWrapper = styled.label`
  flex: 2;

  @media screen and (min-width: 768px) {
    flex: 2.22;
  }
`;

export const CalculationBtnWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  padding: 10px 15px;
  column-gap: 16px;
  justify-content: space-between;
  align-items: center;
  min-width: 104px;
  border: 1px solid ${({ theme }) => theme.inputBorder};
  border-radius: 40px;
  box-shadow: none;

  @media screen and (min-width: 768px) {
    padding: 11px 17px;

    max-width: 114px;
  }
`;

export const PlusMinusButton = styled.button`
  padding: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.mainText};
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform ${transition};

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
  @media screen and (min-width: 768px) {
  }
`;

export const CalculationNumber = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.285;

  color: ${({ theme }) => theme.mainText};

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`;

//============================================

export const ContainerDIV = styled.div`
  display: flex;
  align-items: center;
  row-gap: 18px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;
export const ListDIV = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 188px;
  }

  @media screen and (min-width: 1440px) {
    gap: 40px;
  }
`;
export const SelectorsDIV = styled.div`
  display: flex;
  column-gap: 8px;
  width: 100%;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`;
export const IngredientsDIV = styled.div`
  flex: 1;
  display: flex;
  background-color: transparent;
  border: none;
  border-radius: 40px;
  border: 1px solid ${({ theme }) => theme.inputBorder};
  color: ${({ theme }) => theme.mainText};
  line-height: 1.285;
  transition: border-color ${transition};
  justify-content: space-between;

  &:focus {
    outline: transparent;
    border-color: ${({ theme }) => theme.inputBorderFocus};
  }

  &::placeholder {
    color: ${({ theme }) => theme.mainText};
    line-height: 1.285;
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const IngredientsInput = styled(Field)`
  background-color: transparent;
  max-width: 35px;
  display: inline-block;
  padding: 15px 17px;
  padding-right: 0;
  padding-top: 18px;
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
    min-width: 65px;
    padding-left: 23px;
  }
`;

export const StyledSelectCL = styled(ReactSelect)`
  & .Select__control {
    background-color: transparent;
    border: none;
    border-radius: 40px;
    box-shadow: none;
    cursor: pointer;
    display: flex;

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
      width: 80px;
    }
  }

  & .Select__value-container {
    padding: 15px 0;
  }

  & .Select__indicator-separator {
    display: none;
  }

  & .Select__clear-indicator {
    display: none;
  }

  & .Select__indicator {
    color: ${({ theme }) => theme.mainText};
    padding: 15px 17px;
    padding-left: 8px;

    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.mainText};
    }

    @media screen and (min-width: 768px) {
      padding: 17px 23px;
      padding-left: 8px;
    }
  }

  & .Select__input-container {
    color: ${({ theme }) => theme.selectDropdownOptionTextActive};
    margin: 0;
    padding: 0;

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
    border-radius: 12px;
    background-color: ${({ theme }) => theme.selectDropdownBackground};
    min-width: 62px;
    right: 0;

    @media screen and (min-width: 768px) {
      border-radius: 20px;
    }
  }

  & .Select__menu-list {
    padding: 8px;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.selectDropdownBackground};
    display: flex;
    flex-direction: column;
    row-gap: 2px;
    max-height: 400px;

    @media screen and (min-width: 768px) {
      padding: 10px;
      border-radius: 20px;
    }
  }

  & .Select__option {
    padding: 4px;
    border-radius: 12px;
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
      font-size: 16px;
    }
  }
`;

export const StyledSelect = styled(ReactSelect)`
  & .Select__control {
    width: 100%;
    background-color: transparent;
    border: none;
    border-radius: 40px;
    box-shadow: none;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.inputBorder};
    transition: border-color ${transition};

    &:hover {
      border-color: ${({ theme }) => theme.inputBorder};
    }
    &.Select__control--is-focused {
      border-color: ${({ theme }) => theme.inputBorderFocus};
    }
    svg {
      transform: rotate(0deg);
      transition: transform ${transition};
    }

    &.Select__control--menu-is-open {
      svg {
        transform: rotate(-180deg);
      }
    }

    @media screen and (min-width: 1440px) {
      width: 316px;
    }
  }

  & .Select__value-container {
    padding: 15px 17px;
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
    padding: 15px 17px;
    padding-left: 8px;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.mainText};
      /* color: ${({ theme }) => theme.selectDownOptionText}; */
    }

    @media screen and (min-width: 768px) {
      padding: 18px 24px;
      padding-left: 8px;
    }
  }

  & .Select__input-container {
    color: ${({ theme }) => theme.mainText};
    margin: 0;
    padding: 0;

    &:hover {
      // color: ${({ theme }) => theme.selectDropdownOptionTextActive};
      /* color: #f3f3f3; */
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

  & .Select__placeholder {
    line-height: 1.285;
    color: ${({ theme }) => theme.subTitleText};

    @media screen and (min-width: 768px) {
      font-size: 17px;
      line-height: 1.56;
    }
  }
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
    border-radius: 12px;
    background-color: ${({ theme }) => theme.selectDropdownBackground};
    overflow: hidden;

    @media screen and (min-width: 768px) {
      border-radius: 20px;
    }
  }

  & .Select__menu-list {
    padding: 8px;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.selectDropdownBackground};
    display: flex;
    flex-direction: column;
    row-gap: 2px;
    max-height: 400px;

    @media screen and (min-width: 768px) {
      padding: 12px;

      border-radius: 20px;
    }
  }

  & .Select__option {
    padding: 4px;
    border-radius: 12px;
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
      border-radius: 20px;
    }

    @media screen and (min-width: 1440px) {
      padding: 4px 6px;
      font-size: 16px;
    }
  }
`;

export const RemoveItemButton = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;
  color: ${({ theme }) => theme.mainText};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform ${transition};

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;
