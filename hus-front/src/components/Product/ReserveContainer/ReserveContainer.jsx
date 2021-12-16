import React from "react";
import AvailableDates from "../AvailableDates/AvailableDates";
import Reserve from "../Reserve/Reserve";
import { ReserveContainerStyled } from "./ReserveContainerStyled";

export default function ReserveContainer(id) {
  return (
    <ReserveContainerStyled>
      <div className="title">
        <h2>Fechas disponibles</h2>
      </div>
      <div className="reserveContainer">
        <AvailableDates />
        <Reserve id={id}/>
      </div>
    </ReserveContainerStyled>
  );
}
