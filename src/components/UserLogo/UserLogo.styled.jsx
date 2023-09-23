import styled from 'styled-components';

export const Image = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  font: inherit;
  padding: 0;
  display: inline-flex;
  align-items: center;
  column-gap: 8px;
  color: ${({ theme }) => theme.headerText};
  font-weight: 500;
  line-height: 1.428;

  @media screen and (min-width: 768px) {
    column-gap: 14px;
    font-size: 16px;
    line-height: 1.5;
  }
`;
