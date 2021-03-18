import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";
const Map = ({ location }) => {
  console.log("map", location);
  return (
    <>
      <GoogleMap
        defaultZoom={14}
        center={{
          lat: location[1] || -0.193592,
          lng: location[2] || -78.481996,
        }}
      >
        <Marker position={{ lat: location[1], lng: location[2] }} />
      </GoogleMap>
    </>
  );
};
export default withScriptjs(withGoogleMap(Map));
