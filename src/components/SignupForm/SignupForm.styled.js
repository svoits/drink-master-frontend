import { Form, Field } from 'formik';
import styled from 'styled-components';

export const AuthForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 335px;
`;
export const Input = styled(Field)`
  /* width: 335px; */
  background-color: transparent;
  padding: 18px 24px;
  color: ${({ theme }) => theme.mainText};

  border: 1px solid rgba(243, 243, 243, 0.2);
  font-size: 14px;
  border-radius: 42px;
  line-height: 1.28;
`;
export const SignupBtn = styled.button`
  /* width: 335px; */
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
`;
