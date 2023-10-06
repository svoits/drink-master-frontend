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
  max-width: 35vw;
  max-width: 140px;

  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  @media screen and (max-width: 374.98px) {
    font-size: 3.6vw;
    max-width: 37vw;
  }

  @media screen and (max-width: 319.98px) {
    font-size: 11.5px;
    max-width: 118.4px;
  }

  @media screen and (min-width: 768px) {
    column-gap: 14px;
    font-size: 16px;
    line-height: 1.5;
    max-width: unset;
  }
`;
