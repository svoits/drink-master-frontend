import styled from 'styled-components';

export const FavoritesContainer = styled.div`
  width: 100%;
  margin: 0;
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 158px;
    padding-bottom: 140px;
  }
`;

export const DrinksFavoriveTITLE = styled.h1`
  margin-top: 160px;
  margin-bottom: 62px;
  font-family: Manrope;
  font-size: 64px;
  font-weight: 600;
  line-height: 68px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme }) => theme.mainText};
`;

export const StyledDefaultContainer = styled.div`
  margin: 0 auto;
  padding-top: 91px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding-top: 100px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 67px;
  }
`;
export const DefaultContainer = styled.div`
  margin: 0 auto;
  padding-top: 91px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding-top: 100px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 67px;
  }
`;
export const DefaultDescr = styled.p`
  width: 205px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  margin-top: 32px;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 236px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.38;
  }
`;
export const DefaultImg = styled.img`
  width: 198px;
  height: 247px;

  @media screen and (min-width: 768px) {
    width: 261px;
    height: 326px;
  }
`;
export const ListFavorite = styled.div`
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`;
