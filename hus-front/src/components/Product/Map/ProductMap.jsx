import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { ProductMapStyled } from "./ProductMapStyled";
import { useLocation } from "react-router-dom";

export default function ProductMap({ position, apiKey, city }) {
  const location = useLocation();

  const containerStyle = {
    width: "100%",
    height: (location.pathname ==="/")? "300px": "400px",
  };
  return (
    <ProductMapStyled>
      <div className="titleContainer">
        <h3>¿Dónde vas a estar?</h3>
      </div>
      <div className="location">
        <p>
          {city.name}, {city.country}
        </p>
      </div>
      <div className="map">
        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={position}
            zoom={19}
          >
            <Marker position={position} />
          </GoogleMap>
        </LoadScript>
      </div>
    </ProductMapStyled>
  );
}
