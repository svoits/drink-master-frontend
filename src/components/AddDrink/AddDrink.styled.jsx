import styled from 'styled-components';
import { Link } from 'react-router-dom';
import transition from '../../utils/transition';

export const SectionContainer = styled.section`
  padding-top: 80px;
  padding-bottom: 112px;

  @media screen and (min-width: 768px) {
    padding-top: 120px;
    padding-bottom: 124px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 128px;
    padding-bottom: 160px;
  }
`;

export const SectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 47px;

  @media screen and (min-width: 768px) {
    row-gap: 54px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    column-gap: 130px;
  }
`;

export const MainWrap = styled.div`
  max-width: 716px;
`;

export const MainDescr = styled.p`
  line-height: 1.4;
  margin-top: 16px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    max-width: 619px;
    font-size: 18px;
    line-height: 1.3;
    margin-bottom: 48px;
    margin-top: 28px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 486px;
    font-size: 18px;
    line-height: 1.3;
    margin-bottom: 40px;
  }
`;

export const MainLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 42px;
  border-radius: 42px;

  background: ${({ theme }) => theme.hoverBackgroundColorLink};
  color: ${({ theme }) => theme.hoverColorTextLink};

  font-weight: 600;
  line-height: 1.285;
  border: 2px solid transparent;
  transition: color ${transition};
  transition: background-color ${transition};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 15px 47px;
  }

  &:active {
    border: 2px solid rgba(64, 112, 205, 0.5);
  }

  &:hover {
    color: ${({ theme }) => theme.activeNavLinkText};
    background: ${({ theme }) => theme.activeNavLinkBg};
  }

  &:focus {
    color: ${({ theme }) => theme.activeNavLinkText};
    background: ${({ theme }) => theme.activeNavLinkBg};
  }

  &:disabled {
    color: rgba(243, 243, 243, 0.2);
    background: #434d67;
  }
`;

export const ImageWrap = styled.div`
  position: relative;

  z-index: 2;
`;

export const ImageBgYellow = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    position: absolute;
    z-index: -1;
    top: 110px;
    left: -145px;
    width: 387px;
    height: 381px;
    border-radius: 387px;
    background: rgba(188, 230, 210, 0.3);
    filter: blur(104.8543701171875px);
  }
`;
