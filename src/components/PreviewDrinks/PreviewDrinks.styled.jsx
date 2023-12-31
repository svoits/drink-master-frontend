import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import transition from '../../utils/transition';

export const SectionContainer = styled.section`
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-bottom: 140px;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;

  @media screen and (min-width: 768px) {
    row-gap: 80px;
  }
`;

export const CategoryDrinksDiv = styled.div``;

export const DrinkCategoryTitle = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 1.14;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }
`;

export const CategoryDrinksLIST = styled.ul`
  display: flex;

  align-content: center;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    column-gap: 20px;
  }
`;

export const CategoryDrinksITEM = styled.li`
  width: 100%;
`;

export const CategoryDrinksIMG = styled.img`
  width: 100%;
  height: 360px;
  border-radius: 8px;
  object-fit: ${({ placeholder }) =>
    placeholder === 'true' ? 'contain' : 'cover'};
  background-color: #161f37;
  padding: ${({ placeholder }) => (placeholder === 'true' ? '28px' : 0)};

  @media screen and (min-width: 1440px) {
    height: 400px;
  }
`;

export const CategoryDrinksP = styled.p`
  font-family: Manrope;
  color: #f3f3f3;
  color: ${({ theme }) => theme.mainText};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.12;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const CategoryDrinksLink = styled(NavLink)`
  font-weight: 500;
  line-height: 18px;
  white-space: nowrap;

  color: ${({ theme }) => theme.subTitleText};
  transition: color ${transition};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.subTitleTextHover};
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const CategoryDrinksTEXTDIV = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`;

export const CategoryDrinkToDrink = styled(NavLink)`
  display: block;
  width: 185px;
  margin: 0 auto;
  margin-top: 60px;
  padding: 15px 41px;
  text-align: center;
  background: ${({ theme }) => theme.basicBtnBg};
  color: ${({ theme }) => theme.basicBtnText};
  border: 1px solid transparent;
  border-radius: 42px;
  font-weight: 500;
  line-height: 1.285;
  transition:
    color ${transition},
    background-color ${transition},
    border-color ${transition};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.basicBtnTextHover};
    background: ${({ theme }) => theme.basicBtnBgHover};
    border-color: ${({ theme }) => theme.basicBtnBorderHover};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 16px 40px;
    margin: 80px auto 0px;
  }
`;
