import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
class Landing extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route path="/register" component={Register} />
        <Route
          path="/"
          render={(props) => <Login setUser={setUser} {...props} />}
        />
      </Switch>
    );
  }
}

export default Landing;
