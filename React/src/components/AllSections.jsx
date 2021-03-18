import React, { Component, useEffect } from "react";
import Banner from "./Banner";
import SectionPreview from "./SectionPreview";
import ServiceCard from "./ServiceCard";

const AllSections = ({
  categories,
  handleFilter,
  allServices,
  filterByOffers,
}) => {
  return (
    <>
      <Banner categories={categories} />
      <SectionPreview
        services={allServices}
        title="Cerca de ti"
        emoji="🏃"
        desc="No te muevas, trabaja a tu alrededor"
      />
      <SectionPreview
        services={filterByOffers()}
        title="Oportunidades"
        emoji="🔥"
        desc="Pocas ofertas, esta es tu oportunidad"
      />
      {categories.map((c) => (
        <SectionPreview
          services={handleFilter(c)}
          title={c}
          emoji=" 🧰"
          desc="Tu area = Valiosa experiencia"
        />
      ))}
    </>
  );
};

export default AllSections;
