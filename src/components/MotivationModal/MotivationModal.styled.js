import { Box } from '@mui/material';
import { IoClose } from 'react-icons/io5';
import styled from 'styled-components';
import transition from '../../utils/transition';

export const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.modalBg};
  background-image: linear-gradient(
      0deg,
      rgba(10, 10, 17, 0.4) 0%,
      rgba(10, 10, 17, 0.4) 100%
    ),
    url(${(props) => props.background.mobile[0]});

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);
  width: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        0deg,
        rgba(10, 10, 17, 0.4) 0%,
        rgba(10, 10, 17, 0.4) 100%
      ),
      url(${(props) => props.background.mobile[1]});
  }
  @media screen and (min-width: 768px) {
    width: 500px;
    height: 500px;
    border-radius: 30px;
    background-image: linear-gradient(
        0deg,
        rgba(10, 10, 17, 0.4) 0%,
        rgba(10, 10, 17, 0.4) 100%
      ),
      url(${(props) => props.background.tablet[0]});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          0deg,
          rgba(10, 10, 17, 0.4) 0%,
          rgba(10, 10, 17, 0.4) 100%
        ),
        url(${(props) => props.background.tablet[1]});
    }
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  left: 95px;
  bottom: -70px;
  width: 48px;
  height: 48px;
  background-color: #161f37;
  border-radius: 50%;
  padding: 0;
  border: none;
  color: #f3f3f3;
  transition: transform ${transition};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover,
  &:focus {
    transform: scale(1.25);
  }
  @media screen and (min-width: 768px) {
    left: 105px;
    bottom: -40px;
    width: 28px;
    height: 28px;
  }
`;

export const CloseIcon = styled(IoClose)`
  width: 28px;
  height: 28px;

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Wrap = styled.div`
  position: absolute;
  top: 60px;
`;
