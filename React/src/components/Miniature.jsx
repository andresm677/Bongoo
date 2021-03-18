import React, { Component } from "react";
import "../styles/Miniature.css";
const Miniature = ({ url }) => {
  return (
    <div className="miniature">
      <img className="miniature__content" src={url}></img>
    </div>
  );
};

export default Miniature;
