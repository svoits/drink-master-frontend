import styled from 'styled-components';
import {  NavLink } from 'react-router-dom';
export const Wrap = styled.div`
 margin-top:191px;
     display: flex;
    justify-content: center;
    flex-direction: column;

  

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const Link = styled(NavLink)`
color: #F3F3F3;
font-size: 12px;
font-weight: 600;
line-height: 1.33; 
text-decoration-line: none;
`;
export const Nav = styled.nav`
    display: flex;
    justify-content: center;
     @media screen and (min-width: 768px) {
      display:block;
      margin-left:142px;
  }
`;