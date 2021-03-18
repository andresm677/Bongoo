import React, { Component } from "react";
import { FaBell } from "react-icons/fa";
import "../styles/Header.css";
const Header = () => {
  const logout = () => {
    localStorage.removeItem("jwt");
    window.location = "/";
  };
  return (
    <div className="app__header">
      <div className="app__logo">
        <h2>Bongoo</h2>
      </div>
      <div>
        <ul className="app__navbar">
          <li className="app__navbar__item">
            <FaBell size={21} />
          </li>
          <li className="app__navbar__item">
            <a href="/myservices">Mis servicios</a>
          </li>
          <li className="app__navbar__item">Mi cuenta</li>
          <li onClick={logout} className="app__navbar__item">
            Cerrar Sesion
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
