import React, { Component, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NewService from "./NewService";
import ServiceForm from "./ServiceForm";
import ServicePending from "./ServicePending";
class BannerNewService extends Component {
  state = { category: "" };
  handle = (cate) => {
    this.setState({ category: cate });
  };
  render() {
    return (
      <>
        <Switch>
          <Route
            path="/home/newservice"
            render={(props) => <ServiceForm category={this.state.category} />}
          />
          <Route
            path="/home/myservices/:id"
            render={(props) => <ServicePending {...props} />}
          />
          <Route
            path="/home"
            component={(props) => (
              <NewService handleCategorieChange={this.handle} />
            )}
          />
        </Switch>
      </>
    );
  }
}

export default BannerNewService;
