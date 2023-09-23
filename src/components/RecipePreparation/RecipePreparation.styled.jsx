import styled from 'styled-components';

export const RecipePreparationTitle = styled.h2`
  color: ${({ theme }) => theme.mainText};
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  margin-top: 80px;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 100px;
  }
`;

export const RecipePreparationDescription = styled.p`
  color: ${({ theme }) => theme.mainText};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-top: 40px;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 60px;
  }
`;

export const RecipePreparationImage = styled.img`
  width: 335px;
  height: 430px;
  margin-top: 40px;
  margin-bottom: 80px;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 430px;
  }

  @media screen and (min-width: 1440px) {
    width: 631px;
    height: 480px;
  }
`;

export const RecipePreparationWrap = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    column-gap: 60px;
  }
`;
