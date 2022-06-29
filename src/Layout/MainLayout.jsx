import React from 'react';
import { Outlet } from 'react-router';
import { Header } from '../components';
/**
 * @description render header and childs
 * @component
 *
 * @returns
 */

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
