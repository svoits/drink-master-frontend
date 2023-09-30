import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DrinksListPageLIST = styled.ul`
  margin-bottom: 40px;

  display: grid;
  grid-row-gap: 40px;
  list-style: none;

  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 80px;
    margin-bottom: 80px;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
export const DrinksListPageITEM = styled.li`
  width: 100%;
  // width: 335px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    // width: 342px;
  }

  @media screen and (min-width: 1440px) {
    // width: 400px;
  }
`;

export const DrinksListPagesIMG = styled.img`
  width: 100%;
  border-radius: 8px;
  background:
    linear-gradient(
      180deg,
      rgba(10, 10, 17, 0.02) 51.18%,
      rgba(10, 10, 17, 0.77) 97.66%
    ),
    url(<path-to-image>),
    lightgray 50% / cover no-repeat;
`;

export const DrinksListPageTEXTDIV = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DrinksListPageH5 = styled.h5`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme }) => theme.mainText};

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const DrinksListPageLink = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme }) => theme.subTitleText};

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
