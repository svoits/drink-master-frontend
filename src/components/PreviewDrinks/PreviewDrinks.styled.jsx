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
  object-fit: cover;
  border-radius: 8px;
  background: #161f37;
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
  padding: 14px 40px;

  background: ${({ theme }) => theme.hoverBackgroundColorLink};
  color: ${({ theme }) => theme.themeSwitcher};
  border: 2px solid transparent;
  border-radius: 42px;
  transition: color ${transition};
  transition: background-color ${transition};
  font-weight: 500;
  line-height: 1.285;

  &:active {
    border: 2px solid rgba(64, 112, 205, 0.5);
  }

  &:hover,
  &:focus {
    color: #f3f3f3;
    background: #161f37;
  }

  &:disabled {
    color: rgba(243, 243, 243, 0.2);
    background: #434d67;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 16px 40px;
    margin: 80px auto 0px;
  }
`;
