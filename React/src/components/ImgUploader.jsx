import React, { Component } from "react";
import "../styles/ImgUploader.css";
import ImgMiniature from "./ImgMiniature";
const ImgUploader = ({ imgs, onUpload }) => {
  console.log("allimgs", imgs);
  return (
    <div className="imguploader">
      <div className="imguploader__imgs">
        {imgs.map((img) => (
          <ImgMiniature urlObject={img} />
        ))}
      </div>
      {imgs.length <= 2 && <input onChange={onUpload} type="file" />}
    </div>
  );
};

export default ImgUploader;
