import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import transition from '../../utils/transition';

export const MyDrinksList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 335px);
  justify-content: center;
  grid-row-gap: 40px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 342px);
    grid-gap: 80px 20px;
  }

  @media screen and (min-width: 1440px){
    grid-template-columns: repeat(3, 400px);
  }
`;

export const DrinkListItem = styled.li`
  max-width: 100%;
  height: auto;
  
  @media screen and (min-width: 768px) {
    height: auto;
  }
`

export const DrinkIMG = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`
export const DrinkTITLE = styled.h5`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`
export const DrinkCATEGORY = styled.span`
  font-size: 14px;
  color: #F3F3F380;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

`
export const AboutDRINK = styled.p`
  font-size: 14px;
  line-height: 18px;
  
  margin: 24px 0; /* Забезпечуємо відсутність внутрішніх відступів */
  white-space: normal; /* Забезпечуємо відображення кількох рядків тексту */
  -webkit-line-clamp: 4; /* Встановлюємо максимальну кількість видимих рядків */
  -webkit-box-orient: vertical;
  display: -webkit-box;
  text-overflow: ellipsis; /* Вставляємо трьохкрапку, якщо текст не вміщується */
  overflow: hidden;
  font-size: 14px;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
`
export const ButtonsWRAPPER = styled.div`
  display: grid;
  grid-template-columns: 143px 46px;
  grid-column-gap: 8px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 160px 56px;
  }
`
export const DrinkPageLINK = styled(NavLink)`
  padding: 14px 40px 14px 40px;
  cursor: pointer;
  border-radius: 42px;
  background-color: #161F37;
  color: #F3F3F3;
`
export const DeleteDrinkBTN = styled.button`
  width: 100%;
  padding: 11px 0;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 40px;
  background-color: #161F37;
  color: #F3F3F3;
  border: none;
`