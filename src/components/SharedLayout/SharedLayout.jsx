import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import Loader from '../Loader';
import { MainContainer } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <MainContainer>
      <Header />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </MainContainer>
  );
};

export default SharedLayout;
