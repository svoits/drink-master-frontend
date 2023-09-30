import styled from 'styled-components';
export const Section = styled.section`
  position: relative;
  padding-left: 47px;
  padding-right: 47px;
  padding-top: 188px;
  padding-bottom: 260px;
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 520px;
    height: 550px;
    transform: translate(-120%, -60%);
    background: rgba(64, 112, 205, 0.5);
    border-radius: 550px;
    filter: blur(104.8543701171875px);
    z-index: 1;

    @media screen and (min-width: 768px) {
      width: 784px;
      height: 829.931px;
      border-radius: 829.931px;
      top: 130%;
      left: 3%;
      transform: translate(-110%, -120%);
    }
    @media screen and (min-width: 1440px) {
      height: 849px;
      border-radius: 849px;
      left: 8%;
      transform: translate(-120%, -100%);
    }
  }
`;

export const ContainerError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  color:${({ theme }) => theme.errorFour};
  font-size: 120px;
  font-weight: 600;
  line-height: 1.02;

  @media screen and (min-width: 768px) {
    font-size: 150px;
    line-height: 1.23;
  }
  @media screen and (min-width: 1440px) {
    font-size: 200px;
    line-height: 1;
  }
`;

