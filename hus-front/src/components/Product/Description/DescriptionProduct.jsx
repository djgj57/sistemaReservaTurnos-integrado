import React from "react";

import { DescriptionProductStyled } from "./DescriptionProductStyled";

export default function DescriptionProduct({ description, category, price }) {
  return (
    // EN COMPONENTS/STYLES/PRODUCT/HEADINGNAMESTYLED TENES EL WRAPPER DE STYLED COMPONENT DE ESTE COMPONENTE
    <DescriptionProductStyled>
      <div className="titleContainer">
        <h3>{category}</h3>
        <p>{description}</p>
      </div>
      <div>
      <h3>Precio por noche</h3>
      <p>${price}</p>
      </div>
    </DescriptionProductStyled>
  );
}
