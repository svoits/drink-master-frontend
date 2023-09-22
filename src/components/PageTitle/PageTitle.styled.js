import styled from 'styled-components';

export const Title = styled.h1`
  color: ${({ theme }) => theme.mainText};
  font-feature-settings: 'liga' off;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;
  letter-spacing: -0.56px;
  margin-bottom: 28px;
`;