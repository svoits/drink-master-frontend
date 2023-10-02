import styled from 'styled-components';

export const PopularDrinksTitle = styled.h3`
  margin-bottom: 28px;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;

  color: #f3f3f3;
  color: ${({ theme }) => theme.mainText};

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 24px;
    line-height: 1.33;
  }
`;

export const DrinksList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
`;

export const DrinksItem = styled.li`
  display: flex;
  align-items: center;
`;

export const DrinksLink = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  column-gap: 14px;
`;

export const DrinksImg = styled.img`
  border-radius: 8px;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 8px;
  text-overflow: ellipsis;
`;

export const DrinksInfoTitle = styled.h3`
  color: ${({ theme }) => theme.mainText};

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;
`;

export const DrinksInfoDescr = styled.p`
  overflow: hidden;

  color: ${({ theme }) => theme.subTitleText};
  text-overflow: ellipsis;

  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  @media screen and (min-width: 768px) {
    width: 232px;
  }

  @media screen and (min-width: 1440px) {
    width: 209px;
  }
`;
