import styled from 'styled-components';
import transition from '../../utils/transition';

export const Text = styled.p`
  color: ${({ theme }) => theme.modalText};
  text-align: center;
  line-height: 1.285;
  letter-spacing: -0.28px;
  margin-bottom: 25px;
`;

export const LogoutBtn = styled.button`
  border: none;
  padding: 16px;
  background-color: ${({ theme }) => theme.modalBtnBg};
  border-radius: 40px;
  border: 1px solid ${({ theme }) => theme.modalBg};
  color: ${({ theme }) => theme.modalBtnText};
  font-size: 16px;
  width: 100%;

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
`;

export const CancelBtn = styled.button`
  border: none;
  padding: 16px;
  color: ${({ theme }) => theme.modalText};
  border-radius: 40px;
  border: 1px solid #434d67;

  background-color: #434d67;
  font-size: 16px;
  width: 100%;

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
`;

export const BtnWrapper = styled.div`
  display: flex;

  column-gap: 8px;
  min-width: 285px;

  @media screen and (min-width: 768px) {
    column-gap: 12px;
  }
`;
