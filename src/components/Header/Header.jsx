import React from 'react';
import logo from './logo.png';
import './Header.scss';
import { Link, useLocation } from 'react-router-dom';

/**
 * @description Component for showing header
 * @component
 */

const Header = () => {
  const location = useLocation();

  return (
    <div className="header" aria-label="page header">
      <img className="logo" src={logo} alt="logo" />
      <span className="title" aria-label="page title">
        HRNET
      </span>
      {location.pathname === '/employee-list' ? (
        <Link to="/" className="add-button">
          <i className="fa-solid fa-user-plus"></i> <span>Add employee</span>
        </Link>
      ) : (
        <Link to="/employee-list" className="add-button">
          <i className="fa-solid fa-user"></i> <span>Employee List</span>
        </Link>
      )}
    </div>
  );
};

export default Header;
