import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import Wrapper from '../Wrapper/Wrapper';
import Loader from '../Loader/Loader';

const SharedLayout = () => {
  return (
    <Wrapper>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;
