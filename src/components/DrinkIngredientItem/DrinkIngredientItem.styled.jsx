import styled from 'styled-components';

export const IngredientDescription = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  color: ${({ theme }) => theme.mainText};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  align-items: center;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
    margin-top: 14px;
  }
`;

export const IngredientPhoto = styled.img`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 157px;
    height: 157px;
  }
`;

export const IngredientPhotoWrapper = styled.div`
  width: 100%;
  /* max-width: 158px; */
  padding: 25px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.drinkPageIngredientBg};

  @media screen and (min-width: 768px) {
    height: 220px;
    padding: 31px;
  }
`;

export const IngredientTitle = styled.p`
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    width: 150px;
  }
`;

export const IngredientMeasure = styled.p`
  margin-bottom: 0;
  color: ${({ theme }) => theme.subTitleText};
  font-size: 14px;
  line-height: 1.29;
  text-align: end;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const StubPhotoWrapper = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 157px;
    height: 157px;
  }
`;
