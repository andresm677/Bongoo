import React, { Component } from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import "../styles/Login.css";
import axios from "axios";
class Login extends Component {
  state = { account: { email: "", password: "" }, errors: {} };

  schema = {
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
    try {
      const { data } = await axios.post(
        "http://localhost:3001/api/auth/",
        this.state.account
      );
      localStorage.setItem("jwt", data);
      window.location = "/home";
    } catch (e) {
      alert(e.response.data);
    }
  };
  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };
  render() {
    const { setUser } = this.props;
    const { errors } = this.state;

    return (
      <div className="login">
        <div className="login__header">
          <h1 className="login__logo">Bongoo</h1>
          <p className="login__caption">
            ¿Necesitas una reparación? Nosotros la tenemos
          </p>
          <Link to="/register">
            <p className="login__registerlink">Registrarse</p>
          </Link>
        </div>
        <div className="login__form">
          <div className="login__title">
            <p>Iniciar Sesion</p>
          </div>
          <div className="login__group">
            <input
              onChange={this.handleChange}
              placeholder="Email"
              type="text"
              value={this.state.account.email}
              name="email"
              id=""
            />
            {errors.email && <p className="login_fielderror">{errors.email}</p>}
          </div>
          <div className="login__group">
            <input
              onChange={this.handleChange}
              placeholder="Contraseña"
              type="password"
              name="password"
              value={this.state.account.password}
              id=""
            />
            {errors.password && (
              <p className="login_fielderror">{errors.password}</p>
            )}
          </div>

          <button onClick={this.handleSubmit} className="login__button">
            Iniciar Sesion
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
