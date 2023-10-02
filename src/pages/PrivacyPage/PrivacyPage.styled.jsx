import styled from 'styled-components';

export const PrivacyPolicySection = styled.section`
    padding-top: 80px;
    padding-bottom: 80px;

    @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
    }
`;

export const PrivacyPolicyTitle = styled.h2`
  color: ${({ theme }) => theme.mainText};
  font-size: 18px;
  font-weight: 600;
  line-height: 1.14;
  margin-top: 80px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 25px;
    line-height: 1.1;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 100px;
  }
`;

export const PrivacyPolicyList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 40px;
`;

export const PrivacyPolicyNameItem = styled.h3`
  color: ${({ theme }) => theme.mainText};
  display: flex;
  gap: 20px;
  margin-left: 15px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.285;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.375;
  }

  @media screen and (min-width: 1440px) {
    margin: 0;
  }
`;

export const PrivacyPolicyDescription = styled.p`
  color: ${({ theme }) => theme.mainText};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.285;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.375;
  }

  @media screen and (min-width: 1440px) {
    margin: 0;
  }
`;