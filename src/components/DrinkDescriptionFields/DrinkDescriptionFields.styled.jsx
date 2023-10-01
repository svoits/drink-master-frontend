import styled from 'styled-components';
// import transition from '../../utils/transition';

import { Field, Form } from 'formik';

import ReactSelect from 'react-select';
import transition from '../../utils/transition';

export const FormContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }
`;

export const SearchForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-content: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
  }
`;
//=====================================
export const PhotoContainer = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 335px;
  height: 320px;
  background-color: ${({ theme }) => theme.addPhotoBackgroundColor};

  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 320px;
    height: auto;
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`;

export const PhotoPreview = styled.img`
  // background-color: ${({ theme }) => theme.addPhotoBackgroundColor};
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
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
  gap: 18px;

  color: #f3f3f3;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  background-color: transparent;
  border: none;
`;

//=========================================

export const SearchandRarioDiv = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 31px;

  @media screen and (min-width: 768px) {
    width: 352px;
  }

  @media screen and (min-width: 1440px) {
    gap: 40px;
  }
`;

export const SearchDrinkInput = styled(Field)`
  padding-bottom: 15px;

  width: 100%;

  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.inputBorder};
  background-color: transparent;
  color: ${({ theme }) => theme.mainText};
  font-size: 14px;
  font-weight: 400;

  line-height: 2.41;
  transition: border-color ${transition};

  &:focus {
    outline: transparent;
    border-color: ${({ theme }) => theme.inputBorderFocus};
  }

  &::placeholder {
    line-height: 1.285;
  }

  @media screen and (min-width: 768px) {
    // width: 352px;
    font-size: 16px;

    line-height: 22px;

    padding-bottom: 19px;
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

  line-height: 2.41;
  transition: border-color ${transition};

  @media screen and (min-width: 768px) {
    font-size: 16px;

    line-height: 22px;

    padding-bottom: 19px;
  }
`;

export const StyledSelect = styled(ReactSelect)`
  & .Select__control {
    width: 150px;
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
    // padding-left: 8px;
    // padding-bottom: 19px;
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

//=========================================
export const RadioButtonDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const RadioLabel = styled.label`
  color: ${({ theme }) => theme.inputBorder};
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: -0.02em;
  text-align: left;

  display: flex;

  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 4px;

  @media screen and (min-width: 768px) {
    font-size: 16px;

    line-height: 22px;

    gap: 8px;
  }
`;

export const RadioField = styled(Field)``;
export const RadioSpan = styled.span`
  // &::before {
  //   width: 24px;
  //   height: 24px;
  //   border-radius: 50%;
  //   background: white;
  //   border: 1px solid #ccc;
  //   // border-color: ${({ theme }) => theme.inputBorderFocus};
  // }
`;
