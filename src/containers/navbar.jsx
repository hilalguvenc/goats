import React from 'react';
import "./style/navbar.css";

const NavBar = () => {
  return <>
    <nav className="navbar">
      <div className="navbar-logo">
        <img height="50" src="goat-logo.png" alt="Keçi Sütü"/>
      </div>
      <div className="navbar-actions">
        <div className="navbar-actions-items">
        <ul>
          <li>Sipariş</li>
        </ul>
      </div>
      <div className="navbar-actions-item">
        <ul>
          <li>Yardım</li>
        </ul>
      </div>
      </div>
    </nav>
  </>
}

export { NavBar }