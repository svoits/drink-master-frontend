import styled from 'styled-components';

export const CategoryDrinksLIST = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  column-gap: 14px;
  row-gap: 80px;
`;

export const CategoryDrinksITEM = styled.li`
  width: 400px;
  height: 438px;
`;

export const CategoryDrinksIMG = styled.img`
  width: 335px;
  height: 448px;
  border-radius: 8px;
`;

export const CategoryDrinksP = styled.p`
  font-family: Manrope;
  color: #f3f3f3;
  color: ${({ theme }) => theme.mainText};
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;
export const CategoryDrinksButton = styled.p`
  font-family: Manrope;
  font-size: 16px;
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
