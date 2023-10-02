import styled from 'styled-components';
// import transition from '../../utils/transition';

import { Field, Form } from 'formik';

import ReactSelect from 'react-select';
import transition from '../../utils/transition';

export const FormContainer = styled.div`
  width: 100%;
  margin-bottom: 80px;

`;

export const SearchForm = styled(Form)`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  align-content: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    column-gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    column-gap: 40px;
  }
`;
//=====================================
export const PhotoContainer = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  width: 100%;
  height: 320px;
  background-color: ${({ theme }) => theme.AddPhotoBackgroundColor};

  border-radius: 8px;

  @media screen and (min-width: 768px) {
    max-width: 320px;
    height: 320px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 400px;
    height: 400px;
  }
`;

export const PhotoPreview = styled.img`
  height: 100%;
  position: absolute;
  width: 100%;
  object-fit: cover;
`;

export const PhotoField = styled(Field)`
  // background-color: pink;
  // position: absolute;
  // width: 0;
  // height: 0;
  // opacity: 0;
  // visibility: hidden;
  // overflow: hidden;
`;

export const AddPhotoButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 18px;
  padding: 0;
  color: #f3f3f3;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  background-color: transparent;
  border: none;
  pointer-events: none;
`;

//=========================================

export const FieldsAndRadioWrapper = styled.div`
  display: flex;
  row-gap: 40px;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    row-gap: 40px;
  }
  @media screen and (min-width: 1440px) {
    width: 394px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  @media screen and (min-width: 1440px) {
    row-gap: 40px;
  }
`;

export const SearchDrinkInput = styled(Field)`
  padding: 0;
  padding-bottom: 14px;

  width: 100%;

  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.inputBorder};
  background-color: transparent;
  color: ${({ theme }) => theme.mainText};
  font-size: 14px;
  font-weight: 400;

  line-height: 1.357;
  transition: border-color ${transition};

  &:focus {
    outline: transparent;
    border-color: ${({ theme }) => theme.inputBorderFocus};
  }

  &::placeholder {
    // color: ${({ theme }) => theme.mainText};
    line-height: 1.285;
    font-size: 16px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;

    line-height: 1.285;

    padding-bottom: 18px;
  }
`;
export const SearchDrinkLabel = styled.label`
  color: ${({ theme }) => theme.mainText};
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
  }
  // #categories {
  //   width: 100%;
  // }

  // #ingredients {
  //   width: 100%;
  // }
`;

export const SearchDrinkText = styled.p`
  // padding-bottom: 15px;
  width: 100%;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid ${({ theme }) => theme.inputBorder};
  color: ${({ theme }) => theme.selectDownOptionRegular};
  font-size: 14px;
  font-weight: 400;

  line-height: 1.357;
  transition: border-color ${transition};

  @media screen and (min-width: 768px) {
    font-size: 16px;

    line-height: 22px;

    padding-bottom: 19px;
  }
`;

export const StyledSelect = styled(ReactSelect)`
  & .Select__control {
    min-width: 100px;
    padding-bottom: 15px;

    background-color: transparent;
    border: none;
    box-shadow: none;
    cursor: pointer;
    border-bottom: 1px solid ${({ theme }) => theme.inputBorder};

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
      // padding-bottom: 19px;
    }
    &:active,
    &:hover,
    &:focus {
      border-bottom: 1px solid ${({ theme }) => theme.inputBorder};
    }
  }

  & .Select__value-container {
    padding: 0 8px;
  }

  & .Select__indicator-separator {
    display: none;
  }

  & .Select__clear-indicator {
    display: none;
  }

  & .Select__indicator {
    color: ${({ theme }) => theme.selectDownOptionText};
    padding: 0;

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
    color: ${({ theme }) => theme.mainText};
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
    max-width: 150px;
    width: 100%;

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

    min-width: 135px;

    top: 32px;
    right: 0;

    @media screen and (min-width: 768px) {
      border-radius: 20px;
      min-width: 155px;
    }

    @media screen and (min-width: 1440px) {
      border-radius: 20px;
      min-width: 180px;
    }
  }

  & .Select__menu-list {
    padding: 8px;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.selectDropdownBackground};
    display: flex;
    flex-direction: column;
    row-gap: 2px;
    max-height: 300px;

    @media screen and (min-width: 768px) {
      padding: 12px;

      border-radius: 20px;
      max-height: 400px;
    }

    @media screen and (min-width: 768px) {
      padding: 12px;

      border-radius: 20px;
      max-height: 460px;
    }
  }

  & .Select__option {
    padding: 4px 6px;
    border-radius: 12px;
    color: ${({ theme }) => theme.selectDropdownOptionText};
    transition:
      color ${transition},
      background-color ${transition};
    background-color: transparent;
    cursor: pointer;
    line-height: 1.285;
    font-size: 12px;

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.mainText};
    }

    &:active {
      color: ${({ theme }) => theme.selectDropdownOptionTextActive};
      background-color: ${({ theme }) => theme.selectDropdownOptionBgActive};
    }

    @media screen and (min-width: 768px) {
      font-size: 14px;
      line-height: 1.56;
      border-radius: 16px;
    }

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }
`;

//=========================================
export const RadioBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 14px;
`;

export const RadioLabelWrapper = styled.label`
  color: ${({ theme }) => theme.inputBorder};
  line-height: 1.35;
  letter-spacing: -0.02em;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  column-gap: 6px;
  
  &:hover,
  &:focus {
    // color: #F3F3F3;
    color: ${({ theme }) => theme.selectDownOptionText};
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
    column-gap: 8px;
  }
`;

export const RadioField = styled(Field)`
  appearance: none;
  width: 20px;
  height: 20px;

  border: 2px solid ${({ theme }) => theme.selectDownOptionText};
  border-radius: 50%;
  background-color: transparent;
  transition: border-color ${transition};
  cursor: pointer;
  position: relative;

  &:not(:checked) {
    // border: 2px solid #F3F3F380
    // border: 2px solid #0A0A1180
    border: 1px solid  ${({ theme }) => theme.selectDownOptionRegular};

  }

  &:checked::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    left: 3.2px;
    top: 3.2px;
    background-color: ${({ theme }) => theme.selectDownOptionText};
    border-radius: 50%;
  }

  &:not(:checked)::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    left: 3.2px;
    top: 3.2px;
    background-color: transparent;
    border-radius: 50%;
    transition: background-color ${transition};
  }
`;

export const RadioLabel = styled.span`
  transition: color ${transition};
  ${RadioField}:checked ~ & {
    // color: ${({ theme }) => theme.mainText};
    color: ${({ theme }) => theme.mainText};
  }
`;
