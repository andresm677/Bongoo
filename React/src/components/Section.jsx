import React, { Component, useState } from "react";
import { Switch, Route } from "react-router-dom";
import "../styles/Section.css";
import Banner from "./Banner";
import Service from "./ServiceCard";
import Services from "./Services";
const Section = ({ title, desc, services, categories }) => {
  const [selected, setSelected] = useState("");
  /*const handleCatSelect = (category) => {
    setSelected(category);
  };

  const doCategoryFilter = () =>
    allServices.filter((service) => service.category === selected);

  const services = !selected ? allServices : doCategoryFilter();
  console.log(services);*/

  return (
    <>
      <Banner categories={categories} />
      <div className="section">
        <div className="section__heading">
          <div className="section-info">
            <p className="section__title">{title}</p>
            <p className="section__desc">{desc}</p>
          </div>
        </div>
        <div className="section__service">
          {services.map((s) => (
            <Service
              title={s.title}
              category={s.category}
              author={s.author}
              totalOffers={s.totalOffers}
              images={s.images}
              _id={s._id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Section;
