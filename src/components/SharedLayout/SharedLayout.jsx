import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import Loader from '../Loader';
import { Main, MainContainer } from './SharedLayout.styled';
import Footer from '../Footer/Footer';
const BgBlue = '/drink-master-frontend/src/images/BgBlue.png';

const SharedLayout = () => {
  return (
    <MainContainer>
      <Header />

      <Main bg={BgBlue}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>

      <Footer />
    </MainContainer>
  );
};

export default SharedLayout;
