import styled from 'styled-components';
import { Link } from 'react-router-dom';
import transition from '../../utils/transition';

export const SectionWrap = styled.div`
  padding-top: 80px;
  padding-bottom: 112px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 47px;

  @media screen and (min-width: 768px) {
    padding-top: 120px;
    padding-bottom: 123px;
    gap: 54px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 185px;
    padding-bottom: 218px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 130px;
  }
`;

export const MainWrap = styled.div`
  /* padding-left: 100px; */
`;

export const MainTitle = styled.h1`
  width: 335px;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    width: 641px;
    font-size: 56px;
    line-height: 1.07;
  }

  @media screen and (min-width: 1440px) {
    width: 715px;
    font-size: 64px;
    line-height: 1.06;
  }
`;

export const MainDescr = styled.p`
  max-width: 335px;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    max-width: 619px;
    font-size: 18px;
    line-height: 1.3;
    margin-bottom: 48px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 486px;
    font-size: 18px;
    line-height: 1.3;
    margin-bottom: 40px;
  }
`;

export const MainLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 151px;
  height: 46px;
  border-radius: 42px;
  background: #f3f3f3;
  background: ${({ theme }) => theme.userPopupBtnText};

  color: #161f37;
  color: ${({ theme }) => theme.userPopupText};

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  border: 2px solid transparent;
  transition: color ${transition};
  transition: background ${transition};

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    width: 160px;
    height: 54px;
  }

  &:active {
    border: 2px solid rgba(64, 112, 205, 0.5);
  }

  &:hover {
    color: #f3f3f3;
    background: #161f37;
  }

  &:focus {
    color: #f3f3f3;
    background: #161f37;
  }

  &:disabled {
    color: rgba(243, 243, 243, 0.2);
    background: #434d67;
  }
`;

export const ImageWrap = styled.div`
  position: relative;
  height: 100%;
  z-index: 2;
`;

export const ImageBgYellow = styled.div`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
    position: absolute;
    z-index: -1;
    top: 225px;
    left: -145px;
    width: 387px;
    height: 381px;
    border-radius: 387px;
    background: rgba(188, 230, 210, 0.3);
    filter: blur(104.8543701171875px);
  }
`;

export const ImageBgBlue = styled.div`
  position: absolute;
  width: 549px;
  height: 543px;
  right: -680px;
  top: 100px;

  border-radius: 549px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);

  @media screen and (min-width: 768px) {
    top: -40px;
    right: -680px;
  }

  @media screen and (min-width: 1440px) {
    top: 340px;
    right: -470px;
  }
`;

export const Gradient = styled.div`
  position: absolute;
  left: -590px;
  top: 60px;
  z-index: -1;

  width: 784px;
  height: 849px;

  border-radius: 849px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);
`;
