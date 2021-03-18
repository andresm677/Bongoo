import React, { Component, useEffect, useState } from "react";
import Miniature from "./Miniature";
import { FaRegClock, FaToolbox, FaTag } from "react-icons/fa";
import Profile from "./Profile";
import MyMap from "./myMap";
import "../styles/ServicePending.css";
import Offer from "./Offer";
import axios from "axios";
const ServicePending = (props) => {
  const [service, setService] = useState();
  const [offers, setOffers] = useState();
  const getData = async () => {
    const { id } = props.match.params;
    const { data: service } = await axios.get(
      `http://localhost:3001/api/services/${id}`
    );
    setService(service);
    const { data: offers } = await axios.get(
      `http://localhost:3001/api/services/${id}/offers`
    );
    setOffers(offers);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log("offers", offers);
  if (!service || !offers) return null;
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            laudantium magni velit hic voluptates nulla adipisci distinctio odio
            nobis error eum odit quidem voluptatem, soluta vel exercitationem
            dolores laborum earum inventore cumque. Enim obcaecati officiis sed
            quam eveniet ducimus suscipit?
          </p>
        </div>
        <div className="serv__offers">
          {offers.map((o) => (
            <Profile name={o.name} number={o.phoneNumber} price={o.price} />
          ))}
        </div>
      </div>
      <div className="serv__map">
        <MyMap location={service.location} />
      </div>
    </div>
  );
};

export default ServicePending;
