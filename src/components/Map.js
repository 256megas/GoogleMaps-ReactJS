import React from "react";
import GetCoords from "./GetCoords";
import GoogleMaps from "simple-react-google-maps";
import credentials from "../credentials";
const Map = (props) => {
  var coords = GetCoords();

  return (
    <div style={{ height: "500px", width: "370px" }}>
      <h2>Map Component</h2>
      {coords.lat && coords.lng ? (
        <div className="container">
          Lat: {coords.lat} <br />
          Lng: {coords.lng}
          <br />
          <GoogleMaps
            apikey={credentials.apiKey}
            style={{ height: "500px", width: "370px" }}
            zoom={5}
            center={{ lat: coords.lat, lng: coords.lng }}
            markers={[
              { lat: coords.lat, lng: coords.lng },
              { lat: 40.423765, lng: -3.664428 },
            ]}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Map;
