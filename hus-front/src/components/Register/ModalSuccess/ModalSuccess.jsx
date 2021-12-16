import React from "react";
import { Link } from "react-router-dom";
import SmallLogo from "../../../images/SmallLogo";
import { ModalContainer, Overlay } from "./ModalStyled";

export default function ModalSuccess() {
  return (
    <Overlay>
      <ModalContainer>
        <div className="logoContainer">
          <SmallLogo />
        </div>
        <h1>Felicitaciones !</h1>
        <h2>Para continuar necesitamos que verifiques tu email.</h2>
        <h2>Por favor revisa la casilla del correo y sigue los pasos.</h2>
        <h3>Muchas gracias</h3>
        <Link to="/login">
          <h4>Ir al login</h4>
        </Link>
      </ModalContainer>
    </Overlay>
  );
}
