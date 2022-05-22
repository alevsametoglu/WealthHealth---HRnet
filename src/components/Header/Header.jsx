import React from "react";
import logo from "./logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <span className="title">HRNET</span>
      <span></span>
    </div>
  );
};

export default Header;
