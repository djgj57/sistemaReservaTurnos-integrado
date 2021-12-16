import React from "react";
import { Link } from "react-router-dom";
import { ButtonWrap } from "./ButtonStyled";

export default function Button({ theme, text, to, handlerEvent, disabled }) {
  return (
    <>
      {to !== undefined ? (
        <Link to={to}>
          <ButtonWrap theme={theme} text={text} onClick={handlerEvent} disabled={disabled} >
            {text}
          </ButtonWrap>
        </Link>
      ) : (
        <ButtonWrap onClick={handlerEvent} theme={theme} text={text} disabled={disabled}>
          {text}
        </ButtonWrap>
      )}
    </>
  );
}
