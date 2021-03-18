import React, { Component, useEffect, useState } from "react";
import { FaRegClock, FaToolbox, FaTag } from "react-icons/fa";
import Miniature from "./Miniature";
import "../styles/Services.css";
import Profile from "./Profile";
import Joi from "joi-browser";
import MyMap from "./myMap";
import axios from "axios";
import jwtDecode from "jwt-decode";
import ImgMiniature from "./ImgMiniature";
const Services = (props) => {
  const [service, setService] = useState();
  const [price, setPrice] = useState();

  const handleSubmit = async () => {
    const { _id: worker } = jwtDecode(localStorage.getItem("jwt"));
    const { id } = props.match.params;
    const offer = {
      service: id,
      price,
      worker,
    };
    const resp = await axios.post("http://localhost:3001/api/offers", offer);
  };
  const handleChange = (e) => {
    setPrice(e.currentTarget.value);
  };
  const getService = async () => {
    const { id } = props.match.params;
    const { data } = await axios.get(
      `http://localhost:3001/api/services/${id}`
    );

    setService(data);
  };
  useEffect(() => {
    getService();
  }, []);

  if (!service) return null;
  return (
    <div className="serv">
      <div className="serv__info">
        <h1 className="serv__title">{service.title}</h1>
        <div className="serv__stats">
          <div className="serv__stat">
            <FaToolbox className="serv__stat__icon" />
            <p>{service.category}</p>
          </div>
          <div className="serv__stat">
            <FaTag className="serv__stat__icon" />
            <p>{service.totalOffers + " Ofertas"}</p>
          </div>
        </div>

        <div className="serv__desc">
          <p>{service.description}</p>
        </div>
        <div className="serv__imgs">
          {service.images.map((i) => (
            <Miniature url={i} />
          ))}
        </div>
        <div className="serv__author">
          <Profile name={service.author} />
        </div>
        <div className="serv__offer">
          <input
            onChange={handleChange}
            value={price}
            type="text"
            placeholder="$ 0.00"
          />
          <button onClick={handleSubmit} className="serv__offer__btn">
            Ofertar
          </button>
        </div>
      </div>
      <div className="serv__map">
        <MyMap location={service.location} />
      </div>
    </div>
  );
};

export default Services;
