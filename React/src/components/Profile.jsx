import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import "../styles/Profile.css";
const Profile = ({ name, number, price }) => {
  return (
    <div className="service__author">
      <Avatar className="service__avatar" alt={name} src="./profile.jpg" />
      <div className="service__author__text">
        <p>{name}</p>
        {number && <p className="service__author__alt">{number}</p>}
        {price && <p className="service__author__price">{"$" + price}</p>}
      </div>
    </div>
  );
};

export default Profile;
