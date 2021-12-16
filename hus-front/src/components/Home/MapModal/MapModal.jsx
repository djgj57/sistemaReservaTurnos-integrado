import React from "react";
import { Overlay, ModalContainer } from "./MapModalStyled";
import ProductMap from "./../../Product/Map/ProductMap";

const MapModal = ({ mapModal, setMapModal, product, urlRedirect }) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: require("./../../../assets/tick_success.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      {mapModal && (
        <Overlay>
          <ModalContainer>
            <i
              class="fas fa-times"
              onClick={() => setMapModal(false)}
              style={{ position: "absolute", right: "20px", top: "20px" }}
            ></i>
            <ProductMap
              apiKey="AIzaSyAek8mB0pwqNVMFECvxjM3QK8gBILr0yJA"
              position={{ lat: product.latitude, lng: product.longitude }}
              city={product.city}
            />
            <a
              className="mapRedirect"
              target="_blank"
              rel="noreferrer"
              href={urlRedirect}
              style={{ fontWeight: "bold", cursor: "pointer" }}
            >
              IR A GOOGLE MAPS
            </a>
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
};

export default MapModal;
