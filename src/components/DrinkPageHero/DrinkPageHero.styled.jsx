import styled from 'styled-components';

export const DrinkTitle = styled.h1`
  color: ${({ theme }) => theme.mainText};
  text-shadow:
    0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  margin-top: 80px;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    font-size: 56px;
    line-height: 60px;
    margin-top: 140px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 64px;
    line-height: 68px;
    margin-top: 158px;
  }
`;

export const DrinkSubTitle = styled.h3`
  color: ${({ theme }) => theme.subTitleText};
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  margin-top: 8px;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const DrinkDescription = styled.p`
  color: ${({ theme }) => theme.mainText};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-top: 20px;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const AddToFavoriteButton = styled.button`
  width: 224px;
  height: 46px;
  color: ${({ theme }) => theme.themeSwitcher};
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  margin-top: 40px;

  background-color: ${({ theme }) => theme.mainAccent};
  border-radius: 42px;
  border: 1px solid transparent;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 250px;
    height: 54px;
    font-size: 16px;
  }
`;

export const DrinkPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 4px;

  @media screen and (min-width: 1440px) {
    width: 400px;
  }
`;

export const DrinkHeroWrapper = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    column-gap: 249px;
  }
`;

export const DrinkPhotoWrapper = styled.div`
  width: 335px;
  height: 400px;
  margin-top: 80px;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 400px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`;

export const DrinkDescriptionWrapper = styled.div`
  @media screen and (min-width: 1440px) {
    max-width: 593px;
  }
`;
