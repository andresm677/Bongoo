import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/SectionPreview.css";
import ServiceCard from "./ServiceCard";

class SectionPreview extends Component {
  state = {};

  render() {
    const { title, emoji, desc, services } = this.props;

    return (
      <div className="sectionprev">
        <div className="section__heading">
          <div className="section-info">
            <p className="section__title">{title + emoji}</p>
            <p className="section__desc">{desc}</p>
          </div>
          <div className="section__btn">
            <Link
              to={`home/services/${title.replaceAll(" ", "-").toLowerCase()}`}
            >
              Ver todos
            </Link>
          </div>
        </div>

        <div className="section__services">
          {services.map((s) => (
            <ServiceCard
              title={s.title}
              category={s.category}
              author={s.author}
              totalOffers={s.totalOffers}
              images={s.images}
              _id={s._id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SectionPreview;
