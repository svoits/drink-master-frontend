import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import transition from '../../utils/transition';


export const CategoryDrinksDiv = styled.div`
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`;

export const DrinkCategoryTitle = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 32px;
  margin-bottom: 24px;
`;

export const CategoryDrinksLIST = styled.ul`
 
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  

  @media screen and (min-width: 768px) {
    display: flex;
    gap:20px;
  }
`;

export const CategoryDrinksITEM = styled.li`
  width: 335px;
  height: 360px;
`;

export const CategoryDrinksIMG = styled.img`
  width: 335px;
  height: 360px;
  border-radius: 8px;
`;

export const CategoryDrinksP = styled.p`
  font-family: Manrope;
  color: #f3f3f3;
  color: ${({ theme }) => theme.mainText};
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
 
`;

export const CategoryDrinksLink = styled(NavLink)`
  
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: right;
  color: ${({ theme }) => theme.mainBackground};
  
`;

export const CategoryDrinksTEXTDIV = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CategoryDrinkToDrink = styled(NavLink)`
  display: block;
  max-width: 168px;
  min-height: 46px;
  margin: 60px auto;
  padding: 14px 40px;


  background: ${({ theme }) => theme.userPopupBtnText};
  color: ${({ theme }) => theme.userPopupText};
  border: 2px solid transparent;
  border-radius: 42px;
  transition: color ${transition};
  transition: background ${transition};
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`
