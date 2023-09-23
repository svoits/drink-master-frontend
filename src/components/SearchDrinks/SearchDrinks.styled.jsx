import styled from 'styled-components';

import { Field, Form } from 'formik';

export const SearchDrinksForm = styled(Form)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SearchDrinksField = styled(Field)`
  // background-color: #161F37;
  background-color: pink;
  width: 199px;
  height: 56px;
  // padding: 15px, 68px, 15px, 24px;
  border-radius: 200px;
  border: none;

  color: #f3f3f3;
  font-family: Manrope;
  font-size: 17px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;
`;

export const SearchDrinksUL = styled.ul`
  background-color: #161f37;
  width: 199px;
  height: 405px;
  padding: 14px, 23px, 14px, 23px;
  border-radius: 20px;
`;

export const SearchDrinksOption = styled.option`
  background-color: #161f37;
`;
