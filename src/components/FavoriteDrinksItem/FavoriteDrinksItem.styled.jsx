import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';
import transition from '../../utils/transition';

export const StyledItem = styled.li`
  margin-left: auto;
  margin-right: auto;
`;

export const StyledImg = styled.img`
  width: 100%;
  border-radius: 8px;
  height: 360px;

  object-fit: ${({ placeholder }) =>
    placeholder === 'true' ? 'contain' : 'cover'};
  background-color: #161f37;
  padding: ${({ placeholder }) => (placeholder === 'true' ? '28px' : 0)};

  @media screen and (min-width: 768px) {
    width: 342px;
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
  height: 73px;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  margin-top: 18px;
  margin-bottom: 18px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  @media screen and (min-width: 768px) {
    height: 110px;
    font-size: 16px;
    line-height: 1.38;
    margin-top: 24px;
    margin-bottom: 24px;
    -webkit-line-clamp: 5;
  }

  @media screen and (min-width: 1440px) {
    height: 90px;
    -webkit-line-clamp: 4;
  }
`;

export const ButtonsWRAPPER = styled.div`
  display: flex;
  column-gap: 8px;
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
  padding: 14px 40px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: 1px solid transparent;
  transition:
    background-color ${transition},
    border-color ${transition},
    color ${transition};

  &:hover {
    background-color: #f3f3f3;
    color: #161f37;
    border-color: ${({ theme }) => theme.basicBtnBorderHover};
  }

  @media (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
    line-height: calc(18 / 16);
  }
`;

export const TrashIcon = styled(FiTrash2)`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`;

export const DeleteBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  border-radius: 40px;
  border: none;
  padding: 0;
  background-color: #161f37;
  color: #f3f3f3;
  border: 1px solid transparent;
  transition:
    background-color ${transition},
    color ${transition},
    border-color ${transition};

  @media (min-width: 768px) {
    width: 56px;
    height: 56px;
  }

  &:hover,
  &:focus {
    background-color: #f3f3f3;
    color: #161f37;
    border-color: ${({ theme }) => theme.basicBtnBorderHover};
  }
`;
