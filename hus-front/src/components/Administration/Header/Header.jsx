import React from "react";
import { HeaderContainer } from "./HeaderStyled";
import LeftArrow from "../../../images/LeftArrow";
import { useHistory } from "react-router-dom";

export default function HeadingProduct({ name, category }) {
  let history = useHistory();

  return (
    <HeaderContainer>
      <div className="titleContainer">
        <h1>Administración</h1>
      </div>
      <div className="backIcon" onClick={() => history.goBack()}>
        <LeftArrow variant="leftArrow" />
      </div>
    </HeaderContainer>
  );
}
