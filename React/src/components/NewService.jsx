import React, { Component, useState } from "react";
import "../styles/NewService.css";
import ServiceIcon from "./ServiceIcon";
import { Link, Route, Switch } from "react-router-dom";
import ServiceForm from "./ServiceForm";
const categories = ["Electricidad", "Plomeria", "Construccion"];
const NewService = ({ handleCategorieChange }) => {
  return (
    <div>
      <div className="newservice">
        <div className="newservice__text">
          <p className="newservice__welcome">Hola, Juan</p>
          <h1 className="newservice__caption">¿Necesitas una reparación?</h1>
          <p className="newservice__select">Selecciona una categoria</p>
          <div className="newservice__categories">
            {categories.map((categorie) => (
              <ServiceIcon label={categorie} click={handleCategorieChange} />
            ))}
          </div>
          <button className="newservice__nextbtn">
            <Link to="/home/newservice">Siguiente</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewService;
