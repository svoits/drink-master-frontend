import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const CategoryDrinksDiv = styled.div`
  margin-bottom: 40px;
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
  column-gap: 14px;
  row-gap: 80px;
  
  @media screen and (min-width: 768px) {
    display: flex;
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
  color: #f3f3f380;
  
`;

export const CategoryDrinksTEXTDIV = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
// @media screen and (min-width: 768px) {
//   padding-top: 120px;
//   padding-bottom: 123px;
//   gap: 54px;
// }

// @media screen and (min-width: 1440px) {
//   padding-top: 185px;
//   padding-bottom: 218px;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   gap: 130px;
// }
// if (window.innerWidth >= 1440) {
//   imagePlaceholder = placeholderDesk;
// } else if (window.innerWidth >= 768) {
//   imagePlaceholder = placeholderTablet;
// }