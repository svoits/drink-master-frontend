import styled from 'styled-components';
import { Link } from 'react-router-dom';
import transition from '../../utils/transition';

export const List = styled.ul`
  margin-bottom: 40px;
  display: grid;
  grid-row-gap: 28px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 40px;
    margin-bottom: 80px;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 80px;
  }
`;
export const Item = styled.li`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const Image = styled.img`
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

export const TextWrapper = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`;

export const DrinkTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.12;
  color: ${({ theme }) => theme.mainText};

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const DrinkLink = styled(Link)`
  font-weight: 500;
  line-height: 1.285;
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
