import React from "react";
import {
  Overlay,
  ModalContainer,
  TextContainer,
} from "./ReservationModalStyled";
import Button from "./../../shared/Button/Button";
import Lottie from "react-lottie";
import SmallLogo from "./../../../images/SmallLogo"
const ReservationModal = ({ stateModal, setStateModal, checkIn, checkOut, address, price, name}) => {
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
            <div className="logo">
              <SmallLogo/>
            </div>
            
            <TextContainer>
              <h3>Detalles de su reserva:</h3>
              <p>{name}</p>
              <p>Checkin: {checkIn}</p>
              <p>CheckOut: {checkOut}</p>
              <p>Address: {address}</p>
              <p>Price por noche: ${price}</p>
            </TextContainer>
            <Button
              handlerEvent={() => setStateModal(false)}
              text="Volver"
            />
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
};

export default ReservationModal;
