import React, { Component } from "react";
import Miniature from "./Miniature";
import { FaRegClock, FaToolbox, FaTag } from "react-icons/fa";

import Profile from "./Profile";
import MyMap from "./myMap";
const ServiceFinished = () => {
  return (
    <div className="serv">
      <div className="serv__info">
        <h1 className="serv__title">Microondas dañado</h1>
        <div className="serv__stats">
          <div className="serv__stat">
            <FaRegClock className="serv__stat__icon" />
            <p>Hace 1 hr</p>
          </div>
          <div className="serv__stat">
            <FaToolbox className="serv__stat__icon" />
            <p>Electricidad</p>
          </div>
          <div className="serv__stat">
            <FaTag className="serv__stat__icon" />
            <p>+5 ofertas</p>
          </div>
        </div>

        <div className="serv__desc">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            laudantium magni velit hic voluptates nulla adipisci distinctio odio
            nobis error eum odit quidem voluptatem, soluta vel exercitationem
            dolores laborum earum inventore cumque. Enim obcaecati officiis sed
            quam eveniet ducimus suscipit?
          </p>
        </div>
        <div className="serv__imgs">
          <Miniature />
          <Miniature />
          <Miniature />
        </div>
        <div className="serv__author">
          <Profile name="Juan Perez" number="099974221" price={40} />
        </div>
      </div>
      <div className="serv__map">
        <MyMap />
      </div>
    </div>
  );
};

export default ServiceFinished;
