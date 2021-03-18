import React, { Component } from "react";
import ServiceCard from "./ServiceCard";

const SectionPrev = (props) => {
  return (
    <div className="sectionprev">
      <div className="section__heading">
        <div className="section-info">
          <p className="section__title"></p>
          {props.services.map((s) => (
            <ServiceCard />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionPrev;
