import { Box } from '@mui/material';
import styled from 'styled-components';
import transition from '../../utils/transition';

export const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.modalBg};
  border-radius: 16px;
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);
  padding: 25px;
  padding-top: 50px;
  padding-bottom: 50px;
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
