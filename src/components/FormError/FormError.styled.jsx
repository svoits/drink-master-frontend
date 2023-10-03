import styled from 'styled-components';

export const ErrorText = styled.p`
  position: ${({ absolute }) => (absolute === 'true' ? 'absolute' : 'static')};
  left: 25px;
  bottom: -24px;
  color: #da1414;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.16;
  margin-left: ${({ absolute }) => (absolute === 'true' ? '0' : '25px')};
  margin-top: ${({ absolute }) => (absolute === 'true' ? '0' : '8px')};
`;
