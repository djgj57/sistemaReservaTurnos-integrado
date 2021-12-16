import styled from "styled-components";
import { colors } from "./../../styles/utils/colors";

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const ModalContainer = styled.div`
  display: flex;
  margin: 5%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 638px;
  height: 302px;
  min-height: 100px;
  background: ${colors.primary};
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
  text-align: center;
`;

export const TextContainer = styled.div`
  p {
    font-weight: 500;
    font-size: 1.25rem;
    color: ${colors.formText};
    font-weight: bold;
  }
`;
