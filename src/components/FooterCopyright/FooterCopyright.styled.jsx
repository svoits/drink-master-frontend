import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import transition from '../../utils/transition';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  column-gap: 14px;

  @media screen and (min-width: 768px) {
    column-gap: 18px;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.footerCopyright};
  font-size: 12px;
  line-height: 1.333;
  letter-spacing: -0.24px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
