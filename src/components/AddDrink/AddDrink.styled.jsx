import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SectionWrap = styled.div`
  padding-top: 185px;
  padding-bottom: 218px;
  display: flex;
  align-items: center;
  gap: 130px;
`;

export const MainWrap = styled.div`
  padding-left: 100px;
`;

export const MainTitle = styled.h1`
  width: 715px;

  font-size: 64px;
  font-style: normal;
  font-weight: 600;
  line-height: 68px;

  margin-bottom: 28px;
`;

export const MainDescr = styled.p`
  width: 486px;

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  margin-bottom: 40px;
`;

export const MainLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 54px;
  /* padding: 18px 44px; */
  border-radius: 42px;
  background: #f3f3f3;

  color: #161f37;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  border: 2px solid transparent;

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
  position: absolute;
  left: -200px;
  width: 387px;
  height: 381px;
  border-radius: 387px;
  background: rgba(188, 230, 210, 0.3);
  filter: blur(104.8543701171875px);
`;

export const ImageBgBlue = styled.div`
  position: absolute;
  width: 549px;
  height: 543px;
  right: -540px;

  border-radius: 549px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);
`;
