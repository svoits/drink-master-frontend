import { Box } from '@mui/material';
import styled from 'styled-components';
import transition from '../../utils/transition';

export const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 16px;
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);
  padding: 50px 25px;
  /* background: radial-gradient(
      circle,
      rgba(188, 230, 210, 0.4) -20%,
      rgba(255, 255, 255, 0) 70%
    ),
    radial-gradient(
      circle,
      rgba(64, 112, 205, 0.5) 0%,
      rgba(255, 255, 255, 0) 65%
    ),
    ${({ theme }) => theme.modalBg}; */
  background: ${({ gradient, theme }) =>
    gradient === 'true'
      ? `radial-gradient(
      circle,
      rgba(188, 230, 210, 0.4) -20%,
      rgba(255, 255, 255, 0) 70%
    ),
    radial-gradient(
      circle,
      rgba(64, 112, 205, 0.5) 0%,
      rgba(255, 255, 255, 0) 65%
    ),
    ${theme.modalBg}`
      : `${theme.modalBg}`};
  background-size:
    350px 350px,
    400px 400px;

  background-repeat: no-repeat;

  background-position-x: -110px, 200px;
  background-position-y: -150px, 200px;

  @media screen and (min-width: 768px) {
    padding: 50px;

    background-size:
      350px 350px,
      400px 400px;

    background-repeat: no-repeat;

    background-position-x: -100px, 300px;
    background-position-y: -160px, 250px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  background-color: transparent;
  padding: 0;
  border: none;
  color: #f3f3f3;
  transition: transform ${transition};

  &:hover,
  &:focus {
    transform: scale(1.25);
  }
`;
