import React from "react";
import Button from "../../components/shared/Button/Button";
import { AssetContainer, ColorContainer } from "./AssetsStyled";

export default function Assets() {
  return (
    <AssetContainer bg="#d1d1d1">
      <h1>Styled Component Factory</h1>
      <div>
        <h2>Colors</h2>
        <ColorContainer className="colorsContainer" bg="#FFF">
          primary #FFF
        </ColorContainer>
        <ColorContainer className="colorsContainer" bg="#545776">
          secondary #545776
        </ColorContainer>
        <ColorContainer className="colorsContainer" bg="#1DBEB4">
          highlight #1DBEB4
        </ColorContainer>
        <ColorContainer className="colorsContainer" bg="#383b58">
          formText #383b58
        </ColorContainer>
        <ColorContainer className="colorsContainer" bg="#FF0000">
          error #FF0000
        </ColorContainer>
      </div>
      <div>
        <h2>{"<Button/>"}</h2>
        <div className="btnContainer">
          <Button theme="primary" text="primary" />
        </div>
        <div className="btnContainer">
          <Button theme="secondary" text="secondary" />
        </div>
      </div>
    </AssetContainer>
  );
}
