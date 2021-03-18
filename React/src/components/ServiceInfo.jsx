import React, { Component } from "react";
import { FaRegClock, FaToolbox, FaTag } from "react-icons/fa";
import Miniature from "./Miniature";
import "../styles/ServiceInfo.css";
const ServiceInfo = (props) => {
  const {
    title,
    desc,
    stats: { time, category, totalOffers },
    imgs,
  } = props;
  return (
    <div>
      <h1 className="serv__title">{title}</h1>
      <div className="serv__stats">
        <div className="serv__stat">
          <FaRegClock className="serv__stat__icon" />
          <p>{time}</p>
        </div>
        <div className="serv__stat">
          <FaToolbox className="serv__stat__icon" />
          <p>{category}</p>
        </div>
        <div className="serv__stat">
          <FaTag className="serv__stat__icon" />
          <p>{totalOffers}</p>
        </div>
      </div>
      <div className="serv__desc">
        <p>{desc}</p>
      </div>
      <div className="serv__imgs">
        <Miniature />
        <Miniature />
        <Miniature />
      </div>
    </div>
  );
};

export default ServiceInfo;
