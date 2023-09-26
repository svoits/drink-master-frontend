import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DrinksListPageLIST = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  column-gap: 28px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    column-gap: 20px;
    row-gap: 40px;
    margin-bottom: 80px;
  }

  @media screen and (min-width: 1440px) {
    row-gap: 80px;
  }
`;
export const DrinksListPageITEM = styled.li`
  width: 335px;
  height: 392px;

  @media screen and (min-width: 768px) {
    width: 342px;
    height: 398px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 438px;
  }
`;

export const DrinksListPagesIMG = styled.img`
  width: 335px;
  height: 360px;

  border-radius: 8px;

  // Linear Gradient
  // rgba(10, 10, 17, 0.02)
  // rgba(10, 10, 17, 0.77)

  @media screen and (min-width: 768px) {
    width: 342px;
    height: 360px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`;
export const DrinksListPageTEXTDIV = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const DrinksListPageH5 = styled.h5`
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme }) => theme.mainText};

  @media screen and (min-width: 768px) {
    font-size: 18px;

    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const DrinksListPageLink = styled(Link)`
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: #f3f3f380;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
