import styled from 'styled-components';
import transition from '../../utils/transition';

export const Backdrop = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${({ ispopupopen }) => (ispopupopen === 'true' ? 1 : 0)};
  visibility: ${({ ispopupopen }) =>
    ispopupopen === 'true' ? 'visible' : 'hidden'};

  transition:
    opacity ${transition},
    visibility ${transition};
  transition-duration: 500ms;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 72px;
  right: 20px;
  padding: 18px;
  background-color: ${({ theme }) => theme.modalBg};
  border-radius: 8px;
  opacity: ${({ ispopupopen }) => (ispopupopen === 'true' ? 1 : 0)};
  visibility: ${({ ispopupopen }) =>
    ispopupopen === 'true' ? 'visible' : 'hidden'};
  transform: ${({ ispopupopen }) =>
    ispopupopen === 'true' ? 'translateY(0)' : 'translateY(-100%)'};
  display: flex;
  flex-direction: column;
  row-gap: 38px;
  z-index: 5;

  transition:
    opacity ${transition},
    visibility ${transition},
    transform ${transition};

  @media screen and (min-width: 375px) {
    right: calc(((100vw - 375px) / 2) + 20px);
  }
  @media screen and (min-width: 768px) {
    right: calc(((100vw - 768px) / 2) + 32px);
    top: 85px;
  }
  @media screen and (min-width: 1440px) {
    right: calc(((100vw - 1280px) / 2) + 20px);
  }
`;

export const EditProfile = styled.button`
  color: ${({ theme }) => theme.modalText};
  border: none;
  background-color: transparent;
  padding: 0;
  font-weight: 500;
  line-height: 1.285;
  display: inline-flex;
  align-items: center;
  column-gap: 56px;
  transition: column-gap ${transition};

  &:hover,
  &:focus {
    transition: column-gap ${transition};
    animation: expandGap 2s infinite;
  }

  @keyframes expandGap {
    0% {
      column-gap: 56px;
    }
    50% {
      column-gap: 12px;
    }
    100% {
      column-gap: 56px;
    }
  }
`;

export const LogoutBtn = styled.button`
  min-width: 141px;
  border: none;
  background-color: transparent;
  padding: 12px;
  border-radius: 42px;
  background-color: ${({ theme }) => theme.modalBtnBg};
  border: 1px solid ${({ theme }) => theme.modalBg};

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
