//   @media screen and (min-width: 768px) {
//   }

//   @media screen and (min-width: 1440px) {
//   }

import styled from 'styled-components';

export const FollowUsTitle = styled.h3`
  margin-bottom: 20px;

  color: #f3f3f3;
  color: ${({ theme }) => theme.mainText};
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;

    font-size: 24px;
  }
`;

export const FollowUsWrap = styled.div`
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`;
