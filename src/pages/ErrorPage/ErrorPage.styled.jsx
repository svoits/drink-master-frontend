import styled from 'styled-components';
export const Section = styled.section`
  position: relative;
  padding-left: 47px;
  padding-right: 47px;
  padding-top: 188px;
  padding-bottom: 260px;

  @media screen and (min-width: 768px) {
    padding-top: 200px;
    padding-bottom: 170px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 140px;
  }
`;

export const ContainerError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.errorFour};
  font-size: 120px;
  font-weight: 600;
  line-height: 1.02;

  @media screen and (min-width: 768px) {
    font-size: 150px;
    line-height: 1.23;
  }
  @media screen and (min-width: 1440px) {
    font-size: 200px;
    line-height: 1;
  }
`;
