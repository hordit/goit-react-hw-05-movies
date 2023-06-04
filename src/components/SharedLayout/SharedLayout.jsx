import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import { Header, Nav, NavLinkHeader } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <div>
      <Header>
        <Nav>
          <NavLinkHeader to="/">Home</NavLinkHeader>
          <NavLinkHeader to="/movies">Movies</NavLinkHeader>
        </Nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
