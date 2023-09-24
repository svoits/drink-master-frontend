import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import transition from '../../utils/transition';

export const MyDrinksList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 80px;
`;
