import styled from 'styled-components';

export const DrinksPageSection = styled.section`
  width: 100%;
  margin: 0;
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 160px;
    padding-bottom: 160px;
  }
`;

export const DrinksPageContainer = styled.div`
      display: flex;
      flex-direction: column;
      gap: 80px;

  @media screen and (min-width: 768px) {

  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 94px;
  }
`;
