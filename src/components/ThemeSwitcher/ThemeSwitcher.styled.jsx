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
    top: 1.2px;
    right: 1.2px;
    width: 18px;
    height: 18px;
    transition:
      background-color ${transition},
      transform ${transition};
    z-index: 1;
  }

  &:checked:after {
    transform: translateX(-110%);
  }
`;
