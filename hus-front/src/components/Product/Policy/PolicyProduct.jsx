import React from "react";
import { PolicyProductStyled } from "./PolicyProductStyled";

export default function PolicyProduct() {
  return (
    // EN COMPONENTS/STYLES/PRODUCT/HEADINGNAMESTYLED TENES EL WRAPPER DE STYLED COMPONENT DE ESTE COMPONENTE
    <PolicyProductStyled>
      <div className="politics_product">
        <h3>Qué tenés que saber</h3>
      </div>
      <div className="Policy_General">
        <div className="item1">
          <h4>Normas de la casa</h4>
          <ul>
            <li>Ckeck-out: 10:00</li>
            <li>No se permiten fiestas</li>
            <li>No fumar</li>
          </ul>
        </div>
        <div className="item2">
          <h4>Salud y seguridad</h4>
          <ul>
            <li>
              Se aplican las pautas de distanciamiento social
              <br />y otras normas relacionadas con el coronavirus.
            </li>
            <li>Detector de humo</li>
            <li>Depósito de seguridad</li>
          </ul>
        </div>
        <div className="item3">
          <h4>Política de cancelacíon</h4>
          <ul>
            <li>
              Agregá las fechas de tu viaje para obtener los
              <br />
              detalles de cancelacion de esta estadía.
            </li>
            <li>72 horas limites para la cancelacíon</li>
            <li>El lugar se recerva todo los derechos</li>
          </ul>
        </div>
      </div>
    </PolicyProductStyled>
  );
}
