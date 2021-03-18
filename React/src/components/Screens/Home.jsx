import React, { Component, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import AllSections from "../AllSections";
import Banner from "../Banner";
import Section from "../Section";
import SectionPreview from "../SectionPreview";
import axios from "axios";
import jwtDecode from "jwt-decode";
import Services from "../Services";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState([]);
  const { _id } = jwtDecode(localStorage.getItem("jwt"));
  const getCategories = async () => {
    const { data } = await axios.get(
      `http://localhost:3001/api/users/categories/${_id}`
    );
    setCategories(data);
  };
  const getServices = async () => {
    const { data } = await axios.get(
      `http://localhost:3001/api/services/?userId=${_id}`
    );
    setServices(data);
  };
  const filterByCategory = (category) => {
    return services.filter((service) => service.category === category);
  };
  const filterByOffers = () => {
    return services.filter((service) => service.totalOffers <= 5);
  };

  useEffect(() => {
    getCategories();
    getServices();
  }, []);
  console.log(services);
  return (
    <>
      <Switch>
        <Route
          path="/home/services/oportunidades"
          render={(props) => (
            <Section
              categories={categories}
              desc="Pocas ofertas, esta es tu oportunidad"
              services={filterByOffers()}
              title="Oportunidades 🔥"
              {...props}
            />
          )}
        />

        <Route
          path="/home/services/cerca-de-ti"
          render={(props) => (
            <Section
              categories={categories}
              desc="No te muevas, trabaja a tu alrededor"
              title="Cerca de ti 🏃"
              services={services}
              {...props}
            />
          )}
        />
        {categories.map((c) => (
          <Route
            path={`/home/services/${c.toLowerCase()}`}
            render={(props) => (
              <Section
                services={filterByCategory(c)}
                categories={categories}
                title={c + "🧰"}
                desc={"Tu area = Valiosa experiencia"}
                {...props}
              />
            )}
          />
        ))}
        <Route path="/home/services/:id" component={Services} />
        <Route
          path="/home"
          render={(props) => (
            <AllSections
              allServices={services}
              handleFilter={(c) => filterByCategory(c)}
              filterByOffers={filterByOffers}
              categories={categories}
              {...props}
            />
          )}
        />
      </Switch>
    </>
  );
};

export default Home;
