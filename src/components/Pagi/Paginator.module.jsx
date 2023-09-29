import styled from 'styled-components';

export const StyledPagination = styled.div`
  padding: 14px 0px;

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    width: 27px;
    height: 27px;
    border-radius: 50%;
    color: #f3f3f3;
    transition: background-color 0.5s;
    font-size: 12px;
    font-weight: 500;
    background-color: transparent;
    border: none;
    font-style: normal;
    margin: 0 10px;
  }

  button.active {
    background-color: rgba(64, 112, 205, 0.5);
  }
`;

export const StyledArrows = styled.button`
  width: 27px;
  height: 27px;
  fill: rgba(243, 243, 243, 0.3);
  background-color: transparent;
  border: none;
  margin: 0 10px;
`;
