import React, { Component } from "react";
import "../styles/ServiceCard.css";
import Avatar from "@material-ui/core/Avatar";
import { FaRegClock, FaToolbox, FaTag } from "react-icons/fa";
import { Link } from "react-router-dom";
const ServiceCard = ({ title, category, totalOffers, author, _id, images }) => {
  return (
    <div className="service">
      <img className="service__image" src={images} alt="" />

      <div className="service__info">
        <h1 className="service__title">{title}</h1>
        <div className="service__stats">
          <div className="service__stat">
            <FaToolbox className="service__stat__icon" />
            <p>{category}</p>
          </div>
          <div className="service__stat">
            <FaTag className="service__stat__icon" />
            <p>{totalOffers + " Ofertas"}</p>
          </div>
        </div>
      </div>

      <div className="services__author">
        <Avatar className="services__avatar" alt={author} src="./profile.jpg" />
        <p>{author}</p>
      </div>
      <Link to={`/home/services/${_id}`}>
        <button
          onClick={() => console.log("Hello World")}
          className="service__button"
        >
          Ver mas
        </button>
      </Link>
    </div>
  );
};

export default ServiceCard;
