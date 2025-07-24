import React from "react";
import "../styles/awards.css";

const Header = ({ month }) => {
  return (
    <header className="awards-header">
        <img src="/images/flowColoredLogo_hd.png" alt="Flow Logo" className="flow-logo" />

      <h1 className="page-title">
        {month.toUpperCase()}
        <span className="indent">ENLERİ</span>
      </h1>
    </header>
  );
};

export default Header;
