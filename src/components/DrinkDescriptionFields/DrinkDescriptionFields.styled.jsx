import styled from 'styled-components';
// import transition from '../../utils/transition';

import { Field, Form } from 'formik';

import ReactSelect from 'react-select';
import transition from '../../utils/transition';

// @media screen and (min-width: 1440px) {
//     padding-top: 160px;
//     padding-bottom: 160px;
//   }
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
<<<<<<< Updated upstream
  height: 320px;
=======
//   height: 320px;
>>>>>>> Stashed changes
  background-color: ${({ theme }) => theme.AddPhotoBackgroundColor};

  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 320px;
<<<<<<< Updated upstream
    height: auto;
=======
>>>>>>> Stashed changes
  }
`;

export const PhotoPreview = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
`;

export const PhotoField = styled(Field)`
<<<<<<< Updated upstream
  background-color: pink;
=======
background-color: pink;
>>>>>>> Stashed changes
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  visibility: hidden;
  overflow: hidden;
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
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
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
    // color: ${({ theme }) => theme.mainText};
    line-height: 1.285;
  }

  @media screen and (min-width: 768px) {
    // width: 352px;
<<<<<<< Updated upstream
    font-size: 16px;

    line-height: 22px;

    padding-bottom: 19px;
=======
font-size: 16px;

line-height: 22px;


    padding-bottom: 19px;


>>>>>>> Stashed changes
  }
`;
export const SearchDrinkLabel = styled.label`
  color: ${({ theme }) => theme.mainText};
  display: flex;
  flex-direction: row;
  justify-content: space-between;

<<<<<<< Updated upstream
  //   position: relative;
=======
//   position: relative;
>>>>>>> Stashed changes

  @media screen and (min-width: 768px) {
  }
`;

export const SearchDrinkInput2 = styled(Field)`
  padding-bottom: 15px;

<<<<<<< Updated upstream
  //   width: 100%;
  width: 120px;
=======
//   width: 100%;
width: 120px;
>>>>>>> Stashed changes
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
    // color: ${({ theme }) => theme.mainText};
    line-height: 1.285;
  }

  @media screen and (min-width: 768px) {
    // width: 352px;
<<<<<<< Updated upstream
    font-size: 16px;

    line-height: 22px;

    padding-bottom: 19px;
=======
font-size: 16px;

line-height: 22px;


    padding-bottom: 19px;


>>>>>>> Stashed changes
  }
`;

export const StyledSelect = styled(ReactSelect)`
  & .Select__control {
<<<<<<< Updated upstream
    width: 200px;
    background-color: transparent;
    border: none;
    box-shadow: none;
    cursor: pointer;
    border-bottom: 1px solid ${({ theme }) => theme.inputBorder};

=======
    // position: absolute;
    // top: 0%;
    // left: 59%;
    width: 81px;
    // width: 200px;
    // width: 100%;
    background-color: transparent;

    border: none;
    border-radius: 40px;

    color: #f3f3f3;
    box-shadow: none;
    cursor: pointer;
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    color: ${({ theme }) => theme.selectDownOptionText};
    padding: 17px 24px;
    padding-left: 8px;
    cursor: pointer;

    &:hover {
      //   color: #f3f3f3;
      color: ${({ theme }) => theme.selectDownOptionText};
=======
    color: #f3f3f3;
    padding: 17px 24px;
    padding-left: 8px;

    cursor: pointer;

    &:hover {
      color: #f3f3f3;
>>>>>>> Stashed changes
    }

    @media screen and (min-width: 768px) {
      padding: 18px 24px;
      padding-left: 8px;
    }
  }

  & .Select__input-container {
<<<<<<< Updated upstream
    color: ${({ theme }) => theme.selectDropdownOptionTextActive};
=======
    color: #f3f3f3;
>>>>>>> Stashed changes
    margin: 0;
    padding: 0;

    &:hover {
<<<<<<< Updated upstream
      // color: ${({ theme }) => theme.selectDropdownOptionTextActive};
=======
>>>>>>> Stashed changes
      color: #f3f3f3;
    }

    @media screen and (min-width: 768px) {
      font-size: 17px;
    }
  }
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
  & .Select__input {
    line-height: 1.285 !important;

    @media screen and (min-width: 768px) {
      line-height: 1.56 !important;
    }
  }

  & .Select__placeholder,
  & .Select__single-value {
<<<<<<< Updated upstream
    color: ${({ theme }) => theme.selectDownOptionText};
=======
    color: #f3f3f3;
>>>>>>> Stashed changes
    line-height: 1.285;
    margin: 0;

    @media screen and (min-width: 768px) {
      font-size: 17px;
      line-height: 1.56;
    }
  }

  & .Select__menu {
<<<<<<< Updated upstream
=======
    max-height: 131px;
>>>>>>> Stashed changes
    margin: 0;
    margin-top: 4px;
    border-radius: 24px;
    background-color: ${({ theme }) => theme.selectDropdownBackground};
  }

  & .Select__menu-list {
<<<<<<< Updated upstream
    padding: 10px;
=======
    padding: 8px;
>>>>>>> Stashed changes
    border-radius: 24px;
    background-color: ${({ theme }) => theme.selectDropdownBackground};
    display: flex;
    flex-direction: column;
    row-gap: 4px;
<<<<<<< Updated upstream
    max-height: 400px;
=======
    max-height: 131px;
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    font-size: 16px;

    line-height: 22px;
=======
  
font-size: 16px;

line-height: 22px;

>>>>>>> Stashed changes

    gap: 8px;
  }
`;

export const RadioField = styled(Field)`
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
  border: 1px solid ${({ theme }) => theme.inputBorder};

  &:active {
    color: none;
    // color: ${({ theme }) => theme.selectDropdownOptionTextActive};
    // color: #f3f3f380;
  }
`;
