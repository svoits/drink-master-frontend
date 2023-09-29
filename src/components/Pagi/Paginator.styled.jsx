import styled from 'styled-components';
import transition from '../../utils/transition';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 14px;
`;

export const Button = styled.button`
  width: 27px;
  height: 27px;
  border-radius: 50%;
  color: #f3f3f3;
  transition:
    background-color ${transition},
    color ${transition};
  padding: 0;
  font-size: 12px;
  font-weight: 500;
  background-color: transparent;
  border: none;
  font-style: normal;

  &.active,
  &:hover,
  &:focus {
    background-color: rgba(64, 112, 205, 0.5);
  }
`;

export const Wrapper = styled.div`
  padding: 14px 0px;
`;

export const StyledArrows = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 27px;
  height: 27px;
  color: rgba(243, 243, 243, 0.3);
  background-color: transparent;
  border: none;
  padding: 0;
  transition: color ${transition};

  &:first-child {
    margin-right: 44px;
  }

  &:last-child {
    margin-left: 44px;
  }

  &:hover:not([disabled]),
  &:focus:not([disabled]) {
    color: #f3f3f3;
  }
`;
