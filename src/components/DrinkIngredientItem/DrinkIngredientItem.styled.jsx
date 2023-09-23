import styled from 'styled-components';

export const IngredientDescription = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  color: ${({ theme }) => theme.mainText};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  p {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
    margin-top: 14px;
  }
`;

export const IngredientFoto = styled.img`
  width: 107px;
  height: 107px;

  @media screen and (min-width: 768px) {
    width: 157px;
    height: 157px;
`;

export const IngredientFotoWrapper = styled.div`
  width: 157px;
  height: 157px;
  border-radius: 8px;
  background-color: rgba(22, 31, 55, 0.5);

  @media screen and (min-width: 768px) {
    width: 220px;
    height: 220px;
`;
