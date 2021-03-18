import React, { Component } from "react";
import axios from "axios";
import "../styles/Register.css";
import Joi from "joi-browser";
class Register extends Component {
  state = {
    account: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
    },
    errors: {},
  };
  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };
  schema = {
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    phoneNumber: Joi.string()
      .length(10)
      .regex(/^[0-9]+$/)
      .required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  };
  validate = () => {
    const { error } = Joi.validate(this.state.account, this.schema, {
      abortEarly: false,
    });
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  handleSubmit = async () => {
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    const { data } = await axios.post(
      "http://localhost:3001/api/users/",
      this.state.account
    );
    localStorage.setItem("jwt", data);
    window.location = "/home";
  };
  render() {
    const { setUser } = this.props;
    const { errors } = this.state;
    return (
      <div className="register">
        <div className="register__header">
          <h1 className="register__logo">Bongoo</h1>
          <p className="register__caption">
            ¿Necesitas una reparación? Nosotros la tenemos
          </p>
        </div>
        <div className="register__form">
          <div className="register__title">
            <p>Registrarse</p>
          </div>
          <div className="register__group">
            <input
              onChange={this.handleChange}
              placeholder="Tu nombre"
              value={this.state.account.firstName}
              type="text"
              name="firstName"
              id=""
            />
            {errors.firstName && (
              <p className="login_fielderror">{errors.firstName}</p>
            )}
          </div>
          <div className="register__group">
            <input
              onChange={this.handleChange}
              placeholder="Tu apellido"
              value={this.state.account.lastName}
              type="text"
              name="lastName"
              id=""
            />
            {errors.lastName && (
              <p className="login_fielderror">{errors.lastName}</p>
            )}
          </div>
          <div className="register__group">
            <input
              onChange={this.handleChange}
              placeholder="Tu celular"
              value={this.state.account.phoneNumber}
              type="text"
              name="phoneNumber"
              id=""
            />
            {errors.phoneNumber && (
              <p className="login_fielderror">{errors.phoneNumber}</p>
            )}
          </div>
          <div className="register__group">
            <input
              onChange={this.handleChange}
              placeholder="Email"
              value={this.state.account.email}
              type="text"
              name="email"
              id=""
            />
            {errors.email && <p className="login_fielderror">{errors.email}</p>}
          </div>
          <div className="register__group">
            <input
              onChange={this.handleChange}
              placeholder="Contraseña"
              value={this.state.account.password}
              type="password"
              name="password"
              id=""
            />
            {errors.password && (
              <p className="login_fielderror">{errors.password}</p>
            )}
          </div>
          <button onClick={this.handleSubmit} className="register__button">
            Registrarse
          </button>
        </div>
      </div>
    );
  }
}

export default Register;
