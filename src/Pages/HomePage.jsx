import React from 'react';
import { CreateForm } from '../components';
/**
 * @description render page
 * @component
 *
 * @returns
 */

import './HomePage.scss';
const HomePage = () => {
  return (
    <main className="home-page" aria-label="home page">
      <CreateForm />
    </main>
  );
};

export default HomePage;
