import styled from 'styled-components';
import { Field, Form as FormikForm } from 'formik';
import transition from '../../utils/transition';

export const Form = styled(FormikForm)`
  /* display: flex;
  flex-direction: column; */
  width: 308px;
`;

export const FormText = styled.p`
  color: ${({ theme }) => theme.footerText};
  line-height: 1.428;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const Input = styled(Field)`
  width: 100%;
  padding: 17px 23px;
  background-color: transparent;
  border: none;
  border: 1px solid ${({ theme }) => theme.footerBorder};
  border-radius: 40px;

  outline: transparent;
  transition: border-color ${transition};
  color: ${({ theme }) => theme.footerText};
  line-height: 1.285;

  &::placeholder {
    color: ${({ theme }) => theme.footerText};
  }
  &:focus {
    border-color: ${({ theme }) => theme.footerBorderHover};
  }

  @media screen and (min-width: 768px) {
    font-size: 17px;
    padding: 14px 23px;
    line-height: 1.56;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 17px;
  color: ${({ theme }) => theme.footerText};
  border: 1px solid ${({ theme }) => theme.footerBorder};
  border-radius: 40px;
  transition: border-color ${transition};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.125;
  width: 100%;
  margin-top: 18px;

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.footerBorderHover};
  }
`;
