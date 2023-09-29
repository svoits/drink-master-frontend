import { Form, Field } from 'formik';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import transition from '../../utils/transition';

import styled, { css } from 'styled-components';

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
  width: 100%;
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

    transition:
      border ${transition},
      background-color ${transition};
  }
  /* &::placeholder {
    color: rgba(243, 243, 243, 0.5);
  } */
  /* &::selection {
    color: rgba(243, 243, 243, 0.5);
  } */

  ${({ error }) =>
    error === 'true' &&
    css`
      border: 1px solid red;
    `}
  ${({ success }) =>
    success === 'true' &&
    css`
      border: 1px solid green;
    `}
    
  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 1.56;
  }
`;

export const Button = styled.button`
  padding: 18px;
  background-color: #f3f3f3;
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
    color: #f3f3f3;
    border: 1px solid rgba(243, 243, 243, 0.58);
    transition:
      border ${transition},
      background-color ${transition};
  }
`;

export const TogglePasswordButton = styled.button`
  background-color: transparent;
  border: none;
`;
export const PasswordInputWrap = styled.div`
  position: relative;
`;
export const StyledDontShowPasswordIcon = styled(AiOutlineEye)`
  fill: #f3f3f3;
  width: 18px;
  height: 18px;
  position: absolute;
  top: 20px;
  left: 239px;
  @media screen and (min-width: 375px) {
    left: 290px;
  }

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
export const StyledShowPasswordIcon = styled(AiOutlineEyeInvisible)`
  fill: #f3f3f3;
  width: 18px;
  height: 18px;
  position: absolute;
  top: 20px;
  left: 239px;
  @media screen and (min-width: 375px) {
    left: 290px;
  }

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
export const ErrorBorder = styled.div`
  border: 1px solid red;
`;

export const SuccessBorder = styled.div`
  border: 1ch solid green;
`;
export const ErrorIcon = styled(AiOutlineExclamationCircle)`
  color: red;
  width: 18px;
  height: 18px;
  position: absolute;
  top: 20px;
  left: 239px;
  @media screen and (min-width: 375px) {
    left: 290px;
  }

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const SuccessIcon = styled(AiOutlineCheckCircle)`
  color: green;
  width: 18px;
  height: 18px;
  position: absolute;
  top: 20px;
  left: 239px;
  @media screen and (min-width: 375px) {
    left: 290px;
  }

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
