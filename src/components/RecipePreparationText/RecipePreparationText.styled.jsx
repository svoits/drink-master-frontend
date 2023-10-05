import { Form as FormikForm } from 'formik';
import styled from 'styled-components';
import transition from '../../utils/transition';

export const RecipePreparationTitle = styled.h2`
  margin-bottom: 40px;

  color: #f3f3f3;
  color: ${({ theme }) => theme.mainText};
  font-family: Manrope;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.1;

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`;

export const Form = styled(FormikForm)`
  width: 100%;
  margin-bottom: 20px;
`;

export const StyledTextarea = styled.textarea`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 18px;
  padding-right: 18px;
  resize: none;
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.inputBorder};
  opacity: 0.8;
  background: transparent;


  color: ${({ theme }) => theme.mainText};
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;

  width: 100%;
  height: 184px;

  transition: border-color ${transition};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.inputBorderFocus};
  }

  @media screen and (min-width: 768px) {
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 24px;
    padding-right: 24px;
    font-size: 17px;
    line-height: 1.56;
    width: 480px;
    border-radius: 20px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;
