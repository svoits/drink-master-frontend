import styled from 'styled-components';

import bgImageMobile from '../../images/welcome/bg-welcome-mobile.jpg';
import bgImageMobile2x from '../../images/welcome/bg-welcome-mobile@2x.jpg';
import bgImageTablet from '../../images/welcome/bg-welcome-tablet.jpg';
import bgImageTablet2x from '../../images/welcome/bg-welcome-tablet@2x.jpg';
import bgImageDesc from '../../images/welcome/bg-welcome-desc.jpg';
import bgImageDesc2x from '../../images/welcome/bg-welcome-desc@2x.jpg';

export const Section = styled.section`
  /* padding-top: 120px; */
  position: relative;
    

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;


export const WelcomeWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
      padding-top: 304px;

  

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const WelcomeTitle = styled.h1`
  color: #fafafa;
  font-feature-settings: 'liga' off;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;
  letter-spacing: -0.56px;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
    letter-spacing: -0.8px;
  }
`;
export const WelcomeSubtitle = styled.p`
  color: #fafafa;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: -0.28px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
    letter-spacing: -0.36px;
  }
`;

export const BackgroundImage = styled.div`
  background:
   radial-gradient(
      circle,
      rgba(64, 112, 205, 0.5),
      rgb(64, 112, 205, 0),
     
    ),
    radial-gradient(circle, rgba(188, 230, 210, 0.4)),
    radial-gradient(circle, rgba(64, 112, 205, 0.5));
    /* linear-gradient(0deg, rgba(10, 10, 17, 0.2) 0%, rgba(10, 10, 17, 0.2) 100%),
    linear-gradient(1deg, #0a0a11 -0.56%, rgba(10, 10, 17, 0) 21.93%),
    linear-gradient(82deg, #0a0a11 11.89%, rgba(10, 10, 17, 0) 82.65%); */
    
    /* background-image:radial-gradient(circle, rgba(64, 112, 205, 0.5) 25%, rgb(64, 112, 205, 0) 65%),
            radial-gradient(circle, rgba(188, 230, 210, 0.4)),
            radial-gradient(circle, rgba(64, 112, 205, 0.5)),
            linear-gradient(0deg, rgba(10, 10, 17, 0.2) 0%, rgba(10, 10, 17, 0.2) 100%),
            linear-gradient(1deg, #0a0a11 -0.56%, rgba(10, 10, 17, 0) 21.93%),
            linear-gradient(82deg, #0a0a11 11.89%, rgba(10, 10, 17, 0) 82.65%),url(${bgImageMobile}); */
    background-image:linear-gradient(0deg, rgba(10, 10, 17, 0.2) 0%, rgba(10, 10, 17, 0.2) 100%),
    linear-gradient(1deg, #0a0a11 -0.56%, rgba(10, 10, 17, 0) 21.93%),
    linear-gradient(82deg, #0a0a11 11.89%, rgba(10, 10, 17, 0) 82.65%),url(${bgImageMobile});
  position: absolute;
  /* top: 0; */
  right: -145px;
  z-index: -1;
  min-width: 320px;
  /* width: 70%;
  height: 100%;  */
  /* width: 100vw;   */
  height: 100vh;
  /* /* background-repeat: no-repeat; */
  background-position: center;

  /* background-position-x: 498px , 84px , 20px , right , center , left ,  center;
  background-position-y: -251px,-368px,546px, bottom,center,left,center; */
  /* background-size:
    549px 543px,
    257px 247px,
    520px 550px,
    contain,
    contain,
    contain,
   cover; */

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgImageMobile2x});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${bgImageTablet});
    right: -10px;

  
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgImageTablet2x});
    }
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${bgImageDesc});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgImageDesc2x});
    }
  }`;
  /* &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
   
    width: 257px;
    height: 247px;
     transform: translate(-80%, -140%);
    background: radial-gradient(
      ellipse at center,
      rgba(188, 230, 210, 0.4) 0%,
      rgba(188, 230, 210, 0.4) 100%
    );
    border-radius: 257px;
    filter: blur(104.8543701171875px);
    z-index: -1;}

    &:after {
      content: '';
      position: absolute;
          top: -20%;
    right: 90%;
      width: 520px;
      height: 550px;
      
      transform: translateY(-50%, 50%);
       border-radius: 550px;
      background: rgba(64, 112, 205, 0.5);
      filter: blur(104.8543701171875px);

      z-index: -1;
    }   */

