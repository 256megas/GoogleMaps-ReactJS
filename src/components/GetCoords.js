import { useEffect, useState } from "react";

function GetCoords() {
  const [coordenadas, setCoordenadas] = useState({
    lat: null,
    lng: null,
  });

  useEffect(() => {
    let geoId;
    // Mount
    geoId = window.navigator.geolocation.watchPosition((position) => {
      setCoordenadas({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });

    // Unmount
    return () => {
      navigator.geolocation.clearWatch(geoId);
    };
  });
  return coordenadas;
}

export default GetCoords;
