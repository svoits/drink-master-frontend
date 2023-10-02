import styled from 'styled-components';
import transition from '../../utils/transition';

export const AddDrinkFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  // gap: 80px;
`;

export const AddDrinkFormBtn = styled.button`
  border-radius: 42px;

  background: ${({ theme }) => theme.hoverBackgroundColorLink};
  padding: 13px 39px;
  border: 1px solid transparent;

  color: ${({ theme }) => theme.hoverColorTextLink};

  font-weight: 600;
  line-height: 1.2;
  transition: color ${transition};
  transition: background-color ${transition};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.activeNavLinkText};
    background: ${({ theme }) => theme.activeNavLinkBg};
  }

  &:disabled {
    color: rgba(243, 243, 243, 0.2);
    background: #434d67;
  }

  @media screen and (min-width: 768px) {
    padding: 17.5px 43px;
    font-size: 16px;
    line-height: 1.125;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
  }
`;
