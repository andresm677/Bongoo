import React, { Component } from "react";
import Map from "./map";
class MyMap extends Component {
  state = {};
  render() {
    const { location } = this.props;
    const key = "AIzaSyDlRkByI8SM4Dp3V7kTI4gomxIwDFzKOnQ";
    const url = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${key}`;

    return (
      <div>
        <Map
          location={location}
          googleMapURL={url}
          containerElement={<div style={{ height: "92vh" }} />}
          mapElement={<div style={{ height: "100%" }} />}
          loadingElement={<p>Cargando</p>}
        />
      </div>
    );
  }
}

export default MyMap;
