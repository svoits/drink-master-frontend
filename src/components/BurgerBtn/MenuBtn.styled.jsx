import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  background-color: transparent;
  border: none;
  padding: 0;
  color: ${({ theme }) => theme.mainAccent};
`;
