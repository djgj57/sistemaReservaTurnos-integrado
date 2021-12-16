import React from "react";
import {
  Overlay,
  ModalContainer,
  TextContainer,
} from "./SuccessfulNewProductModalStyled";
import Check from "./../../../images/Check";
import Button from "./../../shared/Button/Button";
import Lottie from "react-lottie";

const SuccessfulNewProductModal = ({ stateModal, setStateModal }) => {
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
      {stateModal && (
        <Overlay>
          <ModalContainer>
            <Lottie options={defaultOptions} height={150} width={150} />
            <TextContainer>
              <p>Tu propiedad se ha creado con éxito.</p>
            </TextContainer>
            <Button
              handlerEvent={() => setStateModal(false)}
              to="/"
              // theme="secondary"
              text="Volver"
            />
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
};

export default SuccessfulNewProductModal;
