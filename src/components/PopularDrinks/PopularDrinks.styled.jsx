import styled from 'styled-components';

//   @media screen and (min-width: 768px) {
//   }

//   @media screen and (min-width: 1440px) {
//   }
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
  gap: 24px;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
    // width: 704px;
    margin-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    gap: 28px;
    margin-bottom: 0px;
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
`;

export const DrinksImg = styled.img`
  border-radius: 7px;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  max-width: 232px;
  margin-left: 14px;
`;

export const DrinksInfoTitle = styled.h3`
  color: #f3f3f3;
  color: ${({ theme }) => theme.mainText};

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;
`;

export const DrinksInfoDescr = styled.p`
  overflow: hidden;
  color: rgba(243, 243, 243, 0.5);
  color: ${({ theme }) => theme.subTitleText};
  text-overflow: ellipsis;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;

  @media screen and (min-width: 768px) {
    width: 232px;
  }

  @media screen and (min-width: 1440px) {
    width: 209px;
  }
`;
