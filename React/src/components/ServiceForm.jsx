import React, { Component } from "react";
import "../styles/ServiceForm.css";
import Joi from "joi-browser";
import MyMap from "./myMap";
import axios from "axios";
import NewServiceIcon from "./NewServiceIcon";
import jwtDecode from "jwt-decode";
import AutocompleteBar from "./AutocompleteBar";
import ImgMiniature from "./ImgMiniature";
import ImgUploader from "./ImgUploader";
class ServiceForm extends Component {
  state = {
    service: {
      title: "",
      description: "",
      location: [],
      images: [],
      category: this.props.category,
    },
    errors: {},
  };
  schema = {
    title: Joi.string().required(),
    description: Joi.string().required(),
    images: Joi.array().min(1).required(),
    location: Joi.array().min(1).required(),
    category: Joi.string().required(),
  };
  handleLocation = (location) => {
    const service = { ...this.state.service };
    service.location = location;
    this.setState({ service });
  };
  validate = () => {
    const { error } = Joi.validate(this.state.service, this.schema, {
      abortEarly: false,
    });
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  handleChange = (e) => {
    const service = { ...this.state.service };
    service[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ service });
  };
  handleSubmit = async () => {
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    const imgs = await this.postImages();

    const service = { ...this.state.service };
    service.images = imgs;
    service.author = jwtDecode(localStorage.getItem("jwt"))._id;
    try {
      const resp = await axios.post(
        "http://localhost:3001/api/services",
        service
      );
    } catch (error) {}
  };
  postImages = async () => {
    const urls = await Promise.all(
      this.state.service.images.map(async (i) => {
        const form = new FormData();
        form.append("file", i);
        form.append("upload_preset", "rodqpirb");
        form.append("api_key", "916695668244719");
        const {
          data: { secure_url },
        } = await axios.post(
          "https://api.cloudinary.com/v1_1/dxwkfrdrp/image/upload",
          form
        );
        return secure_url;
      })
    );

    return urls;
  };
  handleImgUpload = (e) => {
    const service = { ...this.state.service };
    const files = e.target.files[0];
    service.images = [...service.images, files];
    this.setState({ service });
  };
  render() {
    console.log(this.state);
    const { errors } = this.state;
    const { title, description, images } = this.state.service;
    const { category } = this.props;
    return (
      <div className="serviceform">
        <div className="serviceform__content">
          <div className="serviceform__title">
            <NewServiceIcon />
            <h1>Nueva Reparacion</h1>
          </div>

          <input
            className="serviceform__input"
            placeholder="De que trata tu reparacion"
            name="title"
            value={title}
            onChange={this.handleChange}
          ></input>
          {errors.title && <p className="login_fielderror">{errors.title}</p>}
          <input
            className="serviceform__input"
            value={category}
            disabled
          ></input>

          <textarea
            className="serviceform__textarea"
            placeholder="Añade detalles"
            name="description"
            id=""
            value={description}
            cols="30"
            rows="6"
            onChange={this.handleChange}
          ></textarea>
          {errors.description && (
            <p className="login_fielderror">{errors.description}</p>
          )}
          <ImgUploader imgs={images} onUpload={this.handleImgUpload} />
          {errors.images && <p className="login_fielderror">{errors.images}</p>}
          <AutocompleteBar onLocation={this.handleLocation} />
          {errors.location && (
            <p className="login_fielderror">{errors.location}</p>
          )}
          <button onClick={this.handleSubmit} className="serv__offer__btn">
            Publicar
          </button>
        </div>
        <div className="serviceform__map">
          <MyMap location={this.state.service.location} />
        </div>
      </div>
    );
  }
}

export default ServiceForm;
