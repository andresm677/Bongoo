import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import "../styles/Offer.css";
const Offer = () => {
  return (
    <div className="offer">
      <div className="offer__info">
        <Avatar className="service__avatar" alt={"J"} src="./profile.jpg" />
        <div className="offer__info__text">
          <p className="offer__info__name">Juan Perez</p>
          <p className="offer__info__price">{"$" + 50}</p>
        </div>
      </div>
      <div className="offer__btns">
        <button className="offer_hirebtn">Contratar</button>
      </div>
    </div>
  );
};

export default Offer;
