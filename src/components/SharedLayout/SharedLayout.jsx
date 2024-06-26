import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import Wrapper from '../Wrapper/Wrapper';

const SharedLayout = () => {
  return (
    <Wrapper>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};

export default SharedLayout;
