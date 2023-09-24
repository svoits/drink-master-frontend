import styled from 'styled-components';
import transition from '../../utils/transition';

export const Switch = styled.label`
  margin: auto;
  position: relative;
`;

export const SwitchInput = styled.input`
  display: block;
  background-color: ${({ theme }) => theme.mainAccent};
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.1) inset;
  border-radius: 20px;
  outline: transparent;
  position: relative;
  width: 40px;
  height: 20px;
  -webkit-appearance: none;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  transition: background-color ${transition};
  cursor: pointer;

  &:focus {
    outline: auto;
  }

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
  }

  &::before {
    background-color: ${({ theme }) => theme.mainAccent};
    border-radius: inherit;
    inset: 0;
    transition: background-color ${transition};
  }
  &::after {
    background-color: ${({ theme }) => theme.themeSwitcher};
    border-radius: 50%;
    top: 1.9px;
    right: 1.9px;
    width: 16.5px;
    height: 16.5px;
    transition:
      background-color ${transition},
      transform ${transition};
    z-index: 1;

    @media screen and (min-width: 768px) {
      top: 1.8px;
    }

    @media screen and (min-width: 1440px) {
      top: 1.6px;
    }
  }

  &:checked:after {
    transform: translateX(-119%);

    /* @media screen and (min-width: 1440px) {
      transform: translateX(-116%);
    } */
  }
`;
