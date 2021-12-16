import React from "react";
import {
  Overlay,
  ModalContainer,
  TextContainer,
} from "./SuccessfulBookingModalStyled";
import Check from "./../../../images/Check";
import Button from "./../../shared/Button/Button";
import Lottie from "react-lottie";
const SuccessfulBookingModal = ({ stateModal, setStateModal, urlMerPa }) => {
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
            {/* <Check /> */}
            <Lottie options={defaultOptions} height={150} width={150} />
            <TextContainer>
              <h3>¡Muchas gracias!</h3>
              <p>Su reserva se ha realizado con éxito</p>
              <p className="alert-time">Tienes 24 horas para pagar tu reserva</p>
            </TextContainer>
            <div className="buttons">
            <Button
              handlerEvent={() => setStateModal(false)}
              to="/"
              // theme="secondary"
              text="Volver"
            />
            <Button text="Pagar ahora" handlerEvent={()=> { window.location.href = urlMerPa}}/>
            </div>
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
};

export default SuccessfulBookingModal;
