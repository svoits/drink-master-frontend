import styled from 'styled-components';

export const MyDrinksLIST = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  column-gap: 14px;
  row-gap: 80px;
`;

export const MyDrinksITEM = styled.li`
  width: 400px;
  height: 676px;
  // margin-bottom: 80px;
  // &:nth-child(2n){
  //     margin-right: 0;}
`;

export const MyDrinksIMG = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 8px;
`;

export const MyDrinksH5 = styled.h5`
  margin-top: 24px;
  margin-bottom: 0;
  font-family: Manrope;
  color: #f3f3f3;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;
export const MyDrinksSpan = styled.span`
  margin-top: 4px;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: #f3f3f380;
`;
export const MyDrinksTEXT = styled.p`
  height: 92px;
  overflow: hidden;

  margin-top: 24px;
  font-family: Manrope;
  color: #f3f3f3;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
`;

export const MyDrinksButtonDiv = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 8px;
  align-items: center;
`;
export const MyDrinksButton = styled.button`
  width: 160px;
  height: 54px;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-right: 44px;
  padding-left: 44px;
  padding: 18px, 44px, 18px, 44px;
  border-radius: 42px;
  border: none;
  gap: 10px;
  background-color: #161f37;
  color: #f3f3f3;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
`;

export const MyDrinksTEXTDIV = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
