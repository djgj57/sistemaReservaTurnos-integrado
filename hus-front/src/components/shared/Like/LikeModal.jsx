import React from "react";
import {
  Overlay,
  ModalContainer,
  TextContainer,
} from "./LikeModalStyled";
import Button from "./../../shared/Button/Button";

const LikeModal = ({ stateModal, setStateModal}) => {
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
            <TextContainer>
              <h3>Deberas estar logueado para hacer realizar esta funcion</h3>
            </TextContainer>
            <div className="buttons">
            <Button
              handlerEvent={() => setStateModal(false)}
              text="Volver"
            />
            <Button
              handlerEvent={() => setStateModal(false)}
              text="Login"
              to="/login"
            />
            </div>
            
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
};

export default LikeModal;