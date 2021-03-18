import React, { Component } from "react";
import Service from "./ServiceCard";

import ServiceIcon from "./ServiceIcon";
import Header from "./Header";
import "../styles/Banner.css";
const Banner = ({ onCatSelect, categories }) => {
  return (
    <div className="app__banner">
      <div className="app__banner__text">
        <p className="app__banner__welcome">¡Hola Juan!</p>
        <h1 className="app__banner__caption">
          Encuentra oportunidades de trabajo en el área que prefieras
        </h1>
        <p>Tus areas :</p>

        <div className="app__banner__categories">
          {categories.map((c) => (
            <ServiceIcon label={c} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
