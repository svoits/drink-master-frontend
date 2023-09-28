import styled from 'styled-components';

export const Title = styled.h1`
  color: ${({ theme }) => theme.mainText};
  font-size: 32px;
  font-weight: 600;
  line-height: 1.1875;

  @media screen and (min-width: 768px) {
    font-size: 56px;
    line-height: 1.07;
  }

  @media screen and (min-width: 1440px) {
    font-size: 64px;
  }
`;
