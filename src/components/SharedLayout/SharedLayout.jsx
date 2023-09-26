import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../Header/Header';
import Loader from '../Loader';
import { Main, MainContainer } from './SharedLayout.styled';
import Footer from '../Footer/Footer';

const SharedLayout = () => {
  const { pathname } = useLocation();

  const isVisible =
    pathname !== '/welcome' && pathname !== '/signup' && pathname !== '/signin';

  return (
    <MainContainer>
      {isVisible && <Header />}

      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>

      {isVisible && <Footer />}
    </MainContainer>
  );
};

export default SharedLayout;
