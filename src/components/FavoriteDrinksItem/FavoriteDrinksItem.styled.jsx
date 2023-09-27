import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';

export const StyledItem = styled.li`
  width: 335px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
  }
`;

export const StyledImg = styled.img`
  width: 335px;
  height: 360px;
  border-radius: 8px;
  background:
    linear-gradient(
      180deg,
      rgba(10, 10, 17, 0.02) 51.18%,
      rgba(10, 10, 17, 0.77) 97.66%
    ),
    url(<path-to-image>),
    lightgray 50% / cover no-repeat;

  @media screen and (min-width: 768px) {
    width: 342px;
    height: 360px;
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`;

export const StyledType = styled.h3`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  margin-top: 4px;
  color: var(--text-btn-color);
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }
`;

export const StyledName = styled.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-top: 24px;
  }
`;

export const StyledDescr = styled.p`
  height: 74px;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    height: 110px;
    font-size: 16px;
    line-height: 1.38;
    margin-top: 24px;
  }

  @media screen and (min-width: 1440px) {
    height: 90px;
  }
`;

export const ButtonsWRAPPER = styled.div`
  display: grid;
  grid-template-columns: 143px 46px;
  grid-column-gap: 8px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 160px 56px;
  }
`;
export const DrinkPageLINK = styled(NavLink)`
  padding: 14px 40px 14px 40px;
  cursor: pointer;
  border-radius: 42px;
  background-color: #161f37;
  color: #f3f3f3;
`;

export const SeeMoreBtn = styled(NavLink)`
  border-radius: 42px;
  background-color: #161f37;
  color: #f3f3f3;
  //   font-size: 14px;
  //   font-weight: 600;
  //   line-height: calc(18 / 14);
  //   text-align: center;
  padding: 14px 40px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: 1px solid transparent;
  transition:
    background-color 400ms ease,
    border-color 400ms ease,
    color 400ms ease;

  &:hover {
    background-color: #f3f3f3;
    color: #161f37;
  }

  @media (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
    line-height: calc(18 / 16);
  }
`;
// export const DeleteBtn = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 46px;
//   height: 46px;
//   border-radius: 40px;
//   border: none;
//   background-color: #161f37;
//   transition: background-color 0.3s ease;
//   margin-left: 8px;

//   @media (min-width: 768px) {
//     width: 54px;
//     height: 54px;
//   }

//   &:hover,
//   &:active {
//     background-color: #f3f3f3;
//   }

//   &:hover svg,
//   &:active svg {
//     stroke: #161f37;
//     fill: #f3f3f3;
//   }
// `;
// export const TrashIcon = styled(FiTrash2)`
//   fill: ${({ theme }) => theme.mainText} (колір)
//   width: 18px;
//   height: 18px;
//   @media screen and (min-width: 768px) {
//     width: 20px;
//     height: 20px;
//   }`;

export const DeleteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  border-radius: 40px;
  border: none;
  background-color: #161f37;
  transition: background-color 0.3s ease;
  margin-left: 8px;

  @media (min-width: 768px) {
    width: 54px;
    height: 54px;
  }

  &:hover,
  &:active {
    background-color: #f3f3f3;
  }

  ${FiTrash2} {
    color: #f3f3f3;
  }

  &:hover ${FiTrash2}, &:active ${FiTrash2} {
    color: #161f37;
  }
`;
export const TrashIcon = styled(FiTrash2)`
  fill: ${({ theme }) => theme.mainText};
  width: 18px;
  height: 18px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
