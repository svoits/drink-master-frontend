import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding-top: 41px;
  padding-bottom: 20px;
  border-top: 1px solid ${({ theme }) => theme.footerBorder};
  min-width: 320px;
  background: radial-gradient(
      circle,
      rgba(188, 230, 210, 0.4) 10%,
      rgba(255, 255, 255, 0) 70%
    ),
    ${({ theme }) => theme.footerBg};
  background-size: 700px 700px;
  background-repeat: no-repeat;
  background-position-x: -260px;
  background-position-y: 330px;

  @media screen and (min-width: 768px) {
    padding-top: 79px;
    padding-bottom: 24px;
    background: radial-gradient(
        circle,
        rgba(188, 230, 210, 0.4) 10%,
        rgba(255, 255, 255, 0) 70%
      ),
      radial-gradient(
        circle,
        rgba(64, 112, 205, 0.5) 0%,
        rgba(255, 255, 255, 0) 65%
      ),
      ${({ theme }) => theme.footerBg};
    background-size:
      1100px 1100px,
      900px 900px;

    background-repeat: no-repeat;

    background-position-x: calc(40vw - 550px), calc(60vw - 300px);
    background-position-y: 260px, 350px;
  }

  @media screen and (min-width: 1440px) {
    background: radial-gradient(
        circle,
        rgba(188, 230, 210, 0.4) 30%,
        rgba(255, 255, 255, 0) 70%
      ),
      radial-gradient(
        circle,
        rgba(64, 112, 205, 0.5) 0%,
        rgba(255, 255, 255, 0) 65%
      ),
      ${({ theme }) => theme.footerBg};
    background-size:
      1250px 1250px,
      900px 900px;

    background-repeat: no-repeat, no-repeat;

    background-position-x: calc(50vw - 650px), calc(60vw - 400px);
    background-position-y: 260px, 270px;
  }
`;

export const LogoAndSocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media screen and (min-width: 768px) {
    row-gap: 28px;
  }

  @media screen and (min-width: 1440px) {
    row-gap: 40px;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 222px;
    row-gap: 80px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: wrap;
    /* column-gap: 230px; */
    row-gap: 80px;
    justify-content: space-between;
  }
`;

export const SecondaryWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    row-gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    column-gap: 410px;
    row-gap: 40px;
  }
`;
