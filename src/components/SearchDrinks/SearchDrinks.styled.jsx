import styled from 'styled-components';

import { Field, Form } from 'formik';

import ReactSelect from "react-select";


export const MultiSelect = styled(ReactSelect)`
&. control  {
  background-color: #161f37;
}
    &.Select--multi  {

        .Select-value {
            display: inline-flex;
            align-items: center;
        }
    }

    & .Select-placeholder {
      color: #f3f3f3;
      fontSize: 17px;
      fontWeight: 400;
      lineHeight: 1.5;
      letterSpacing: 0em;
      textAlign: center;
    }
`
export const EditIconWrapper = styled.span`
  position: absolute;
  top: 16px;
  right: 24px;
  pointer-events: none;
`;

export const FileInputWrapper = styled.div`
  position: relative;

  @media screen and (min-width: 768px) {
    width: 262px;
    // border-radius: 50%;
    // height: 80px;
    // width: 80px;
    // margin-bottom: 38px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const SearchDrinksForm = styled(Form)`
  display: flex;
  color: #f3f3f3;
  align-items: center;
  margin-bottom: 40px;
  gap: 8px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const SearchDrinksInput = styled.input`
  position: relative;

  background-color: #161f37;
  opacity: 0.8px;
  width: 335px;
  height: 54px;

  // padding: 15px, 68px, 15px, 24px;
  border-radius: 200px;
  border: 1px solid #f3f3f333;

  color: #f3f3f3;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0em;
  text-align: center;

  ::placeholder {
    font-family: Manrope;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0em;
    text-align: center;

    color: #f3f3f3;
  }

  @media screen and (min-width: 768px) {
    width: 264px;
    height: 56px;
  }

  @media screen and (min-width: 1440px) {
    width: 264px;
    height: 56px;
  }
`;

export const SearchDrinksField = styled(Field)`
  background-color: #161f37;

  width: 335px;
  height: 54px;

  // padding: 15px, 68px, 15px, 24px;
  border-radius: 200px;
  border: none;

  color: #f3f3f3;
  font-family: Manrope;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0em;
  text-align: center;
  &.active {
    background-color: var(--brand-orange);
    color: var(--text-white);
  }
  &::placeholder {
    color: #f3f3f3;
  }

  @media screen and (min-width: 768px) {
    width: 199px;
    height: 56px;
  }

  @media screen and (min-width: 1440px) {
    width: 199px;
    height: 56px;
  }
`;

