import styled from 'styled-components';
import transition from '../../utils/transition';

export const DrinkSubTitle = styled.p`
  color: ${({ theme }) => theme.drinkPageSubtitle};
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
  padding: 13.5px 39px;
  color: ${({ theme }) => theme.themeSwitcher};
  font-family: inherit;
  font: inherit;
  font-weight: 600;
  line-height: 1.285;
  margin-top: 40px;

  background-color: ${({ theme }) => theme.mainAccent};
  border-radius: 42px;
  border: 1px solid transparent;
  transition:
    color ${transition},
    background-color ${transition},
    border ${transition};

  &:active {
    border: 1px solid rgba(64, 112, 205, 0.5);
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.activeNavLinkText};
    background: ${({ theme }) => theme.activeNavLinkBg};
  }

  &:disabled {
    color: ${({ theme }) => theme.navLinkBorder};
    background: #434d67;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.16;
    padding: 17px 43.5px;
  }
`;

export const DrinkPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 4px;
`;

export const DrinkHeroWrapper = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const DrinkPhotoWrapper = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 80px;
  border-radius: 8px;

  @media screen and (min-width: 1440px) {
    margin: 0;
    width: 400px;
  }
`;

export const DrinkDescriptionWrapper = styled.div`
  @media screen and (min-width: 1440px) {
    padding-top: 26px;
    max-width: 592px;
  }
`;

export const DrinkSvgWrapper = styled.div`
  padding: 133px 102px;
  margin-top: 80px;
  background-color: rgba(22, 31, 55, 0.5);

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 400px;
    padding: 133px 286px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
    padding: 133px 135px;
  }
`;
