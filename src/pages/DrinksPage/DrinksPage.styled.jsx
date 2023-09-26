import styled from 'styled-components';

export const DrinksPageTITLE = styled.h1`
  // margin-top: 80px;
  margin-bottom: 40px;
  font-family: Manrope;
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme }) => theme.mainText};

  @media screen and (min-width: 768px) {
    // margin-top: 140px;
    margin-bottom: 60px;

    font-size: 56px;

    line-height: 60px;
  }

  @media screen and (min-width: 1440px) {
    // margin-top: 160px;
    margin-bottom: 80px;

    font-size: 64px;
    line-height: 68px;
  }
`;
export const DrinksPageSECTION = styled.section`
  margin-left: auto;
  margin-right: auto;
  max-width: 365px;
  padding: 100px 15px;

  @media screen and (min-width: 768px) {
    max-width: 734px;
    padding: 100px 15px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1270px;
  }
`;

export const DrinksPageContainer = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;
