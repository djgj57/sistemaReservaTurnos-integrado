import React from "react";
import HeadingProductInfoStyled from "./HeadingProductInfoStyled";
import StartRated from "../../../images/StartRated";
import StartNotRated from "../../../images/StartNotRated";
import Location from "../../../images/Location";

export default function HeadingProductInfo({ city, score }) {
  const handleStarts = (score) => {
    const arr = [];
    for (let i = 0; i < 5; i++) {
      if (i < score) {
        arr.push(<StartRated />);
      } else {
        arr.push(<StartNotRated />);
      }
    }
    return arr;
  };

  return (
    <HeadingProductInfoStyled>
      <div className="heading_info_title">
        <h4>
          <Location /> {city}
        </h4>
      </div>
      <div className="scoreContainer">
        <div className="scoreFirstContainer">
          <p>
            {score > 4.5
              ? "Excelente"
              : score > 3.8
              ? "Muy bueno"
              : score > 3
              ? "Bueno"
              : "Normal"}
          </p>
          <span className="startContainer">{handleStarts(score)}</span>
        </div>
        <div>
          <span>{score}</span>
        </div>
      </div>
    </HeadingProductInfoStyled>
  );
}
