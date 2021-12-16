import React from "react";
import AlertSVG from "../../images/AlertSVG";
import { AlertStyled } from "./AlertStyled";
import { useLocation } from 'react-router-dom';


export default function Alert(props) {  
    const location = useLocation();
    const showAlert = new URLSearchParams (location.search).get('showAlert');

    
    
  return (
    // EN COMPONENTS/STYLES/PRODUCT/HEADINGNAMESTYLED TENES EL WRAPPER DE STYLED COMPONENT DE ESTE COMPONENTE
    <AlertStyled>
     <div className={!showAlert? "hidden": "errorAlert"}>
          <AlertSVG/>
        <h4>Para realizar una reserva necesitas estar logueado</h4>
        </div>
    </AlertStyled>
  );
}
