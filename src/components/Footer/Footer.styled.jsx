import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding-top: 41px;
  padding-bottom: 20px;
  border-top: 1px solid ${({ theme }) => theme.footerBorder};
  min-width: 320px;
  background-color: ${({ theme }) => theme.footerBg};

  @media screen and (min-width: 768px) {
    padding-top: 79px;
    padding-bottom: 24px;
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
    column-gap: 230px;
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
