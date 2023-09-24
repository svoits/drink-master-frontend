import { Form, Field } from 'formik';

import styled from 'styled-components';

export const AuthForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 335px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const Input = styled(Field)`
  background-color: transparent;
  padding: 18px 24px;
  color: rgba(243, 243, 243, 0.5);
  border: 1px solid rgba(243, 243, 243, 0.2);
  font-size: 14px;
  border-radius: 42px;
  line-height: 1.28;
  outline: none;
  &:focus,
  &:hover {
    border: 1px solid rgba(243, 243, 243, 0.5);
    background-color: transparent;
    color: ${({ theme }) => theme.mainText};
  }
  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 1.56;
  }
`;

export const Button = styled.button`
  padding: 18px;
  background-color: ${({ theme }) => theme.mainText};
  border-radius: 42px;
  line-height: 1.28;
  color: #161f37;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  margin-bottom: 14px;
  margin-top: 14px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  border: none;
  &:focus,
  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.mainText};
    border: 1px solid rgba(243, 243, 243, 0.58);
  }
`;
