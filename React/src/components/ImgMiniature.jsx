import React, { Component } from "react";
import "../styles/ImgUploader.css";
const ImgMiniature = ({ urlObject }) => {
  return (
    <img src={URL.createObjectURL(urlObject)} className="img__miniature" />
  );
};

export default ImgMiniature;
