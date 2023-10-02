import { Field, Form as FormikForm } from 'formik';
import styled from 'styled-components';
import transition from '../../utils/transition';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SelectAvatarInput = styled(Field)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: transparent;
  opacity: 0;
  display: block;
  cursor: pointer;
`;

export const ChangeNameInput = styled(Field)`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.modalInputBorder};
  border-radius: 40px;
  padding: 17px 23px;
  color: ${({ theme }) => theme.modalText};
  line-height: 1.285;
  width: 100%;
  transition: border-color ${transition};

  &:focus {
    outline: transparent;
    border-color: ${({ theme }) => theme.modalInputBorderFocus};
  }

  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 1.56;
    padding: 14px 23px;
  }
`;

export const Image = styled.img`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export const FileInputWrapper = styled.div`
  position: relative;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  margin-bottom: 38px;

  @media screen and (min-width: 768px) {
    margin-bottom: 66px;
    width: 100px;
    height: 100px;
  }
`;

export const NameInputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }
`;

export const EditIconWrapper = styled.span`
  position: absolute;
  top: 19px;
  right: 24px;
  pointer-events: none;
  color: ${({ theme }) => theme.modalText};

  @media screen and (min-width: 768px) {
    top: 18px;
  }
`;

export const SubmitBtn = styled.button`
  min-width: 285px;
  border: none;
  background-color: transparent;
  padding: 17px;
  border-radius: 42px;
  line-height: 1.285;
  background-color: ${({ theme }) => theme.modalBtnBg};
  border: 1px solid ${({ theme }) => theme.modalBg};
  color: ${({ theme }) => theme.modalBtnText};

  transition:
    background-color ${transition},
    border-color ${transition},
    color ${transition};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.modalText};
    background-color: ${({ theme }) => theme.modalBg};
    border: 1px solid ${({ theme }) => theme.modalBtnBorderHover};
  }

  @media screen and (min-width: 768px) {
    min-width: 400px;
    font-size: 16px;
    line-height: 1.125;
  }
`;

export const AddIconWrapper = styled.span`
  position: absolute;
  z-index: 9;
  bottom: -14px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  background-color: #546081;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  pointer-events: none;
`;
