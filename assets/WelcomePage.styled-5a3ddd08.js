import{s as e}from"./index-3b455809.js";const t="/drink-master-frontend/assets/bg-welcomePage-mobile-4764bbe3.jpg",i="/drink-master-frontend/assets/bg-welcomePage-mobile@2x-b8f15be0.jpg",n="/drink-master-frontend/assets/bg-welcomePage-ac45039b.jpg",a="/drink-master-frontend/assets/bg-welcomePage@2x-2b9ac8e0.jpg",o=e.section`
 padding-top: 120px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,g=e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,s=e.h1`
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
`,d=e.p`
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
`,p=e.div`
  background:
    linear-gradient(0deg, rgba(10, 10, 17, 0.2) 0%, rgba(10, 10, 17, 0.2) 100%),
    linear-gradient(1deg, #0a0a11 -0.56%, rgba(10, 10, 17, 0) 21.93%),
    linear-gradient(82deg, #0a0a11 11.89%, rgba(10, 10, 17, 0) 82.65%),
    lightgray -3px -13.319px / 100.511% 101.679% no-repeat;

  background-image: url(${t});
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  width: 70%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${i});
  }
  @media screen and (min-width: 768px) {
    background-image: url(${n});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${a});
    }
  }
  &:before {
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
      
      /* transform: translateY(-50%, 50%); */
      border-radius: 550px;
      background: rgba(64, 112, 205, 0.5);
      filter: blur(104.8543701171875px);

      z-index: -1;
    }
  
`;export{p as B,o as S,g as W,s as a,d as b};
