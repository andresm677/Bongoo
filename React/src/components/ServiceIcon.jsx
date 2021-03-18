import React, { Component, useState } from "react";

import { FaToolbox } from "react-icons/fa";
import "../styles/ServiceIcon.css";

const ServiceIcon = ({ label, click }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="serviceicon">
      <div onClick={() => click(label)} className="serviceicon__area">
        <FaToolbox size={22} />
      </div>
      <p>{label}</p>
    </div>
  );
};

export default ServiceIcon;
