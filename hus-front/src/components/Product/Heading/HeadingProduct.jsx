import React from "react";
import { HeadingProductStyled } from "./HeadingProductStyled";
import LeftArrow from "../../../images/LeftArrow";
import { useHistory } from "react-router-dom";

export default function HeadingProduct({ name, category }) {
  let history = useHistory();

  return (
    // EN COMPONENTS/STYLES/PRODUCT/HEADINGNAMESTYLED TENES EL WRAPPER DE STYLED COMPONENT DE ESTE COMPONENTE
    <HeadingProductStyled>
      <div className="titleContainer">
        <h3>{category.title}</h3>
        <h1>{name}</h1>
      </div>
      <div className="backIcon" onClick={() => history.goBack()}>
        <LeftArrow variant="leftArrow" />
      </div>
    </HeadingProductStyled>
  );
}
