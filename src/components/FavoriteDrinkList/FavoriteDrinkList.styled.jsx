import styled from 'styled-components';

export const FavoriteList = styled.ul`
  display: grid;
  grid-row-gap: 40px;
  list-style: none;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 80px;
    margin-top: 60px;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 62px;
  }
`;
