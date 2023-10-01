import { Box } from '@mui/material';
import styled from 'styled-components';
import transition from '../../utils/transition';
// import motivationOne from '../../images/motivation/Motivation.jpg';
// import motivationOne2x from '../../images/motivation/Motivation@2x.jpg';
// import motivationTwo from '../../images/motivation/Motivation1.jpg';
// import motivationTwo2x from '../../images/motivation/Motivation1@2x.jpg';
// import motivationTree from '../../images/motivation/Motivation2.jpg';
// import motivationTree2x from '../../images/motivation/Motivation2@2x.jpg';

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
    url(${(props) => props.background[0]});

  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  border-radius: 16px;
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);
  /* padding: 25px;
  padding-top: 50px;
  padding-bottom: 50px; */
  width: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${(props) => props.background[1]});
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  /* top: 18px;
  right: 18px; */
  bottom: 30px;
  width: 48px;
  height: 48px;

  background-color: #161f37;
  border-radius: 50%;
  padding: 0;
  border: none;
  color: #f3f3f3;
  transition: transform ${transition};

  &:hover,
  &:focus {
    transform: scale(1.25);
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
`;
