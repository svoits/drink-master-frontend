import styled from 'styled-components';

export const IngredientDescription = styled.div`
  width: 157px;
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  color: ${({ theme }) => theme.mainText};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 220px;
    font-size: 18px;
    line-height: 24px;
    margin-top: 14px;
  }
`;

export const IngredientPhoto = styled.img`
  width: 107px;
  height: 107px;

  @media screen and (min-width: 768px) {
    width: 157px;
    height: 157px;
`;

export const IngredientPhotoWrapper = styled.div`
  width: 157px;
  height: 157px;
  padding: 20px;
  border-radius: 8px;
  background-color: rgba(22, 31, 55, 0.5);

  @media screen and (min-width: 768px) {
    width: 220px;
    height: 220px;
    padding: 31px;
`;

export const IngredientTitle = styled.p`
  width: 100px;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    width: 150px;
  }
`;

export const IngredientMeasure = styled.p`
  margin-bottom: 0;
  color: ${({ theme }) => theme.subTitleText};
  font-size: 14px;
  line-height: 18px;
  text-align: end;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }
`;
